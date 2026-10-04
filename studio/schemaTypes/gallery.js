import { defineField, defineType } from 'sanity';

const images = defineField({
  name: 'images',
  title: 'Images',
  type: 'array',
  description: 'Upload or drag multiple photos here. Drag them to reorder. The first image becomes the cover photo.',
  of: [{
    type: 'image',
    fields: [{
      name: 'alt',
      title: 'Image description',
      type: 'string',
      description: 'Describe the image for visitors using screen readers.',
      validation: Rule => Rule.required().max(160),
    }],
  }],
  validation: Rule => Rule.required().min(1),
});

const illustrative = defineField({
  name: 'illustrative',
  title: 'Show illustrative label',
  type: 'boolean',
  description: 'Turn this on only when the gallery should be presented as a temporary visual direction.',
  initialValue: false,
});

const caseStudy = defineField({
  name: 'caseStudy',
  title: 'Case study',
  type: 'object',
  description: 'Optional approved project story. Add verified outcomes only; leave a field blank until the client confirms it.',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'challenge', title: 'The opportunity / brief', type: 'text', rows: 3 }),
    defineField({ name: 'approach', title: 'Strategy / approach', type: 'text', rows: 3 }),
    defineField({ name: 'creative', title: 'Creative work delivered', type: 'text', rows: 3 }),
    defineField({ name: 'results', title: 'Verified results', type: 'text', rows: 3 }),
  ],
});

export const projectGallery = defineType({
  name: 'projectGallery',
  title: 'Hotel & brand gallery',
  type: 'document',
  fields: [illustrative, images, caseStudy],
  preview: { select: { media: 'images.0' }, prepare: ({ media }) => ({ title: 'Hotel & brand gallery', media }) },
});

export const serviceGallery = defineType({
  name: 'serviceGallery',
  title: 'Service gallery',
  type: 'document',
  fields: [illustrative, images],
  preview: { select: { media: 'images.0' }, prepare: ({ media }) => ({ title: 'Service gallery', media }) },
});
