import { getCliClient } from 'sanity/cli';
import { projectTargets, serviceTargets } from '../content-targets.js';
import { galleryDocumentId, legacyGalleryDocumentId } from '../../src/data/gallery-ids.js';

const client = getCliClient({ apiVersion: '2026-03-01' }).withConfig({ useCdn: false });
const targets = [
  ...projectTargets.map(({ id }) => ({ type: 'projectGallery', id })),
  ...serviceTargets.map(({ id }) => ({ type: 'serviceGallery', id })),
];

async function migrate() {
  const { projectId, dataset } = client.config();
  if (!projectId || !dataset) throw new Error('Sanity project ID or dataset is missing from the CLI configuration.');
  console.log(`Copying galleries in ${projectId}/${dataset} to public-readable document IDs.`);

  let created = 0;
  let skipped = 0;
  const missing = [];

  for (const { type, id } of targets) {
    const publicId = galleryDocumentId(type, id);
    const existing = await client.getDocument(publicId);
    if (existing) {
      console.log(`Kept existing ${publicId} (${existing.images?.length || 0} images).`);
      skipped += 1;
      continue;
    }

    const oldId = legacyGalleryDocumentId(type, id);
    const old = await client.getDocument(oldId);
    if (!old) {
      missing.push(oldId);
      console.warn(`Could not find ${oldId}; no replacement was created.`);
      continue;
    }

    // Only copy published document fields. Existing root galleries and old
    // documents are left untouched, including any owner's image edits.
    await client.createIfNotExists({
      _id: publicId,
      _type: type,
      illustrative: old.illustrative === true,
      images: old.images || [],
      ...(old.caseStudy ? { caseStudy: old.caseStudy } : {}),
    });
    console.log(`Created ${publicId} (${old.images?.length || 0} images).`);
    created += 1;
  }

  const publicUrl = new URL(`https://${projectId}.api.sanity.io/v2026-03-01/data/query/${dataset}`);
  publicUrl.searchParams.set('query', '*[_type in ["projectGallery", "serviceGallery"]]{_id,"count":count(images)}');
  const response = await fetch(publicUrl);
  if (!response.ok) throw new Error(`Public gallery verification returned HTTP ${response.status}. Check dataset visibility.`);
  const { result } = await response.json();
  const publicIds = new Set((result || []).map(document => document._id));
  const invisible = targets.map(({ type, id }) => galleryDocumentId(type, id)).filter(id => !publicIds.has(id));

  console.log(`Migration finished: ${created} created, ${skipped} already present, ${missing.length} legacy documents missing.`);
  console.log(`Unauthenticated website query can read ${publicIds.size} of ${targets.length} galleries.`);
  if (missing.length || invisible.length) {
    console.error(`Still unavailable to the website: ${[...new Set([...missing, ...invisible])].join(', ')}`);
    console.error('If new IDs exist but are not public, set the production dataset visibility to public in Sanity project settings.');
    process.exitCode = 1;
  }
}

migrate().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
