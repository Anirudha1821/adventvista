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
    defineField({ name: 'brandStory', title: 'Brand story', type: 'text', rows: 4, description: 'Introduce the restaurant, hotel or brand and what makes it distinct.' }),
    defineField({ name: 'whatWeDid', title: 'What we did', type: 'text', rows: 4, description: 'Describe the work AdventVista actually delivered for this client.' }),
    defineField({ name: 'creativeDirection', title: 'Creative direction', type: 'text', rows: 3, description: 'A short introduction shown above the scrolling images.' }),
    defineField({ name: 'challenge', title: 'The opportunity / brief', type: 'text', rows: 3 }),
    defineField({ name: 'approach', title: 'Strategy / approach', type: 'text', rows: 3 }),
    defineField({ name: 'creative', title: 'Creative work delivered', type: 'text', rows: 3 }),
    defineField({ name: 'results', title: 'Verified results', type: 'text', rows: 3 }),
    defineField({ name: 'impactStats', title: 'Verified impact statistics', type: 'array', description: 'Add only client-approved figures. Empty stats display as pending on the website.', of: [{ type: 'object', fields: [defineField({ name: 'value', title: 'Value', type: 'string', description: 'For example, a verified reach or growth figure.', validation: Rule => Rule.required() }), defineField({ name: 'label', title: 'What this measures', type: 'string', validation: Rule => Rule.required() })] }], validation: Rule => Rule.max(4) }),
    defineField({ name: 'appreciation', title: 'Appreciation text', type: 'text', rows: 3, description: 'Closing note about the people or details behind the brand.' }),
    defineField({ name: 'appreciationQuote', title: 'Client appreciation quote', type: 'text', rows: 3, description: 'Optional approved client quote.' }),
    defineField({ name: 'appreciationCredit', title: 'Quote credit', type: 'string', description: 'Name and role of the person who gave the quote.' }),
    defineField({ name: 'appreciationImages', title: 'Appreciation images', type: 'array', description: 'Optional closing images. If empty, the website uses the first two gallery images.', of: [{ type: 'image', fields: [defineField({ name: 'alt', title: 'Image description', type: 'string', validation: Rule => Rule.required().max(160) })] }] }),
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
