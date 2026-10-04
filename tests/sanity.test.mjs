import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, services } from '../src/data/site.js';
import { mergeSanityGalleries, sanityGalleryUrl } from '../src/data/sanity.js';
import { projectTargets, serviceTargets } from '../studio/content-targets.js';
import { galleryDocumentId, legacyGalleryDocumentId } from '../src/data/gallery-ids.js';

const asset = (name, alt = name) => ({ url: `https://cdn.sanity.io/images/example/production/${name}.jpg`, alt });

test('Studio gallery targets match every project and service on the site', () => {
  assert.deepEqual(projectTargets.map(item => item.id), projects.map(item => item.id));
  assert.deepEqual(serviceTargets.map(item => item.id), services.map(item => item.id));
  assert.equal(galleryDocumentId('projectGallery', 'tuljai-idli'), 'projectGallery-tuljai-idli');
  assert.equal(legacyGalleryDocumentId('projectGallery', 'tuljai-idli'), 'projectGallery.tuljai-idli');
});

test('published images replace only their matching gallery and first photo becomes the cover', () => {
  const content = mergeSanityGalleries([
    { _id: 'projectGallery-tuljai-idli', illustrative: false, images: [asset('first'), asset('second')], caseStudy: { headline: 'A fresh food story', brandStory: 'A client-approved story.', results: '', impactStats: [{ value: '42%', label: 'Verified growth' }, { value: '', label: 'Incomplete metric' }], appreciationImages: [asset('appreciation'), { url: 'javascript:alert(1)' }] } },
    { _id: 'serviceGallery-photography', illustrative: true, images: [asset('service')] },
    { _id: 'projectGallery-carnival-resorts', images: [{ url: 'javascript:alert(1)' }] },
  ]);
  assert.match(content.projects[2].image, /first\.jpg\?w=1600&fit=max&auto=format&q=82$/);
  assert.equal(content.projects[2].images[0].alt, 'first');
  assert.match(content.projects[2].images[1].url, /second\.jpg\?w=1600/);
  assert.equal(content.projects[2].mediaSource, 'sanity');
  assert.equal(content.projects[2].isIllustrative, false);
  assert.equal(content.projects[2].caseStudy.headline, 'A fresh food story');
  assert.equal(content.projects[2].caseStudy.brandStory, 'A client-approved story.');
  assert.equal(content.projects[2].caseStudy.results, undefined);
  assert.deepEqual(content.projects[2].caseStudy.impactStats, [{ value: '42%', label: 'Verified growth' }]);
  assert.match(content.projects[2].caseStudy.appreciationImages[0].url, /appreciation\.jpg\?w=1600/);
  assert.equal(content.projects[2].caseStudy.appreciationImages.length, 1);
  assert.match(content.services[3].images[0].url, /service\.jpg\?w=1600/);
  assert.equal(content.services[3].isIllustrative, true);
  assert.equal(content.projects[0], projects[0]);
  assert.equal(content.services[0], services[0]);
});

test('public query URL is generated only from safe Sanity identifiers', () => {
  assert.match(sanityGalleryUrl('example123', 'production'), /^https:\/\/example123\.api\.sanity\.io\//);
  assert.match(sanityGalleryUrl('example123', 'production', true), /^\/__sanity\/v2026-03-01\/data\/query\/production\?/);
  assert.equal(sanityGalleryUrl('bad.project', 'production'), null);
  assert.equal(sanityGalleryUrl('example123', '../private'), null);
});
