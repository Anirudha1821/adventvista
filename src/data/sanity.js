import { projects as fallbackProjects, services as fallbackServices } from './site.js';
import { galleryDocumentId } from './gallery-ids.js';

const galleryQuery = `*[_type in ["projectGallery", "serviceGallery"]]{
  _id,
  illustrative,
  "caseStudy": caseStudy{headline, challenge, approach, creative, results},
  "images": images[]{"url": asset->url, alt}
}`;

export function sanityGalleryUrl(projectId, dataset = 'production', useDevProxy = false) {
  if (!/^[a-z0-9-]+$/.test(projectId) || !/^[a-z0-9_-]+$/.test(dataset)) return null;
  // Read from the live API so published edits are visible immediately.
  const url = new URL(`https://${projectId}.api.sanity.io/v2026-03-01/data/query/${dataset}`);
  url.searchParams.set('query', galleryQuery);
  return useDevProxy ? `/__sanity${url.pathname}${url.search}` : url.toString();
}

function galleryImages(document) {
  if (!Array.isArray(document?.images)) return [];
  return document.images
    .filter(image => typeof image?.url === 'string' && image.url.startsWith('https://cdn.sanity.io/images/'))
    .map(image => {
      const url = new URL(image.url);
      url.searchParams.set('w', '1600');
      url.searchParams.set('fit', 'max');
      url.searchParams.set('auto', 'format');
      url.searchParams.set('q', '82');
      return { url: url.toString(), alt: typeof image.alt === 'string' ? image.alt : '' };
    });
}

export function mergeSanityGalleries(documents, projects = fallbackProjects, services = fallbackServices) {
  const byId = new Map((Array.isArray(documents) ? documents : []).map(document => [document?._id, document]));
  const withGallery = (item, type) => {
    const document = byId.get(galleryDocumentId(type, item.id));
    const images = galleryImages(document);
    const story = Object.fromEntries(Object.entries(document?.caseStudy || {}).filter(([, value]) => typeof value === 'string' && value.trim()));
    if (!images.length && !Object.keys(story).length) return item;
    return {
      ...item,
      ...(images.length ? { image: images[0].url, images, mediaSource: 'sanity', isIllustrative: document.illustrative === true } : {}),
      ...(Object.keys(story).length ? { caseStudy: { ...item.caseStudy, ...story } } : {}),
    };
  };
  return {
    projects: projects.map(item => withGallery(item, 'projectGallery')),
    services: services.map(item => withGallery(item, 'serviceGallery')),
  };
}

export async function fetchSanityGalleries(projectId, dataset, signal) {
  const url = sanityGalleryUrl(projectId, dataset, import.meta.env?.DEV === true);
  if (!url) throw new Error('Invalid Sanity project ID or dataset');
  const response = await fetch(url, { signal, cache: 'no-store' });
  if (!response.ok) throw new Error(`Sanity returned ${response.status}`);
  const body = await response.json();
  if (!Array.isArray(body.result)) throw new Error('Sanity returned an unexpected gallery response');
  return body.result;
}
