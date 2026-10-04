import { defineConfig, defineSingleton } from 'sanity';
import { structureTool } from 'sanity/structure';
import { projectTargets, serviceTargets } from './content-targets';
import { projectGallery, serviceGallery } from './schemaTypes/gallery';

const galleryDocumentId = (type, id) => `${type}-${id}`;

const projectIds = projectTargets.map(({ id }) => galleryDocumentId('projectGallery', id));
const serviceIds = serviceTargets.map(({ id }) => galleryDocumentId('serviceGallery', id));

export default defineConfig({
  name: 'adventvista',
  title: 'AdventVista media',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  document: {
    singletons: [
      ...projectTargets.map(({ id, title }) => defineSingleton({ documentId: galleryDocumentId('projectGallery', id), schemaType: 'projectGallery', title })),
      ...serviceTargets.map(({ id, title }) => defineSingleton({ documentId: galleryDocumentId('serviceGallery', id), schemaType: 'serviceGallery', title })),
    ],
  },
  plugins: [structureTool({
    structure: S => S.list().title('Image galleries').items([
      S.listItem().title('Hotels & food brands').id('projects').child(S.list().title('Hotels & food brands').singletons(projectIds)),
      S.listItem().title('Services').id('services').child(S.list().title('Services').singletons(serviceIds)),
    ]),
  })],
  schema: { types: [projectGallery, serviceGallery] },
});
