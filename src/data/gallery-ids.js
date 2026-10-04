// Sanity hides dotted document IDs from unauthenticated website reads.
export const galleryDocumentId = (type, id) => `${type}-${id}`;
export const legacyGalleryDocumentId = (type, id) => `${type}.${id}`;
