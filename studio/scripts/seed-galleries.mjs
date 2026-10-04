import { spawnSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { images, projects, services } from '../../src/data/site.js';
import { projectTargets, serviceTargets } from '../content-targets.js';
import { galleryDocumentId } from '../../src/data/gallery-ids.js';

const studioRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const datasetFile = resolve(studioRoot, '.tmp', 'website-galleries.ndjson');
const envText = await readFile(resolve(studioRoot, '.env.local'), 'utf8').catch(() => '');
const readSetting = key => envText.match(new RegExp(`^${key}=(.+)$`, 'm'))?.[1]?.trim();
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || readSetting('SANITY_STUDIO_PROJECT_ID');
const dataset = process.env.SANITY_STUDIO_DATASET || readSetting('SANITY_STUDIO_DATASET') || 'production';

if (!/^[a-z0-9-]+$/.test(projectId || '') || !/^[a-z0-9_-]+$/.test(dataset)) {
  throw new Error('Set a valid SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET in studio/.env.local first.');
}
if (projectTargets.some((target, index) => target.id !== projects[index]?.id) || serviceTargets.some((target, index) => target.id !== services[index]?.id)) {
  throw new Error('Studio gallery targets and website content are out of sync.');
}

const servicePhotos = {
  'digital-marketing': [images.dining, images.cafe, images.hotel],
  'social-media': [images.food, images.coffee, images.dessert],
  content: [images.chef, images.food, images.plate],
  photography: [images.dining, images.resort, images.food],
  video: [images.chef, images.cafe, images.resort],
  branding: [images.cafe, images.coffee, images.table],
  influencer: [images.cafe, images.table, images.dessert],
  campaigns: [images.resort, images.dining, images.dessert],
  performance: [images.hotel, images.food, images.coffee],
};

const galleryDocument = (type, item, urls) => ({
  _id: galleryDocumentId(type, item.id),
  _type: type,
  illustrative: false,
  images: urls.map((url, index) => ({
    _type: 'image',
    _key: `${item.id}-${index + 1}`,
    _sanityAsset: `image@${url}`,
    alt: `${item.client || item.title} visual ${index + 1}`,
  })),
});

const documents = [
  ...projects.map(item => galleryDocument('projectGallery', item, item.images)),
  ...services.map(item => galleryDocument('serviceGallery', item, servicePhotos[item.id] || [])),
];
if (documents.some(document => document.images.length < 2)) throw new Error('Every starter gallery needs multiple photos.');

await mkdir(dirname(datasetFile), { recursive: true });
await writeFile(datasetFile, `${documents.map(document => JSON.stringify(document)).join('\n')}\n`, 'utf8');
process.stdout.write(`Prepared ${documents.length} website galleries in ${datasetFile}.\n`);

if (!process.argv.includes('--prepare-only')) {
  process.stdout.write('Importing only galleries that do not already exist. Existing owner edits will be kept.\n');
  const cli = resolve(studioRoot, 'node_modules', 'sanity', 'bin', 'sanity');
  const result = spawnSync(process.execPath, [cli, 'datasets', 'import', datasetFile, '--dataset', dataset, '--missing', '--project-id', projectId], {
    cwd: studioRoot,
    stdio: 'inherit',
    env: process.env,
  });
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
}
