// Copy and temporary media live here. Published Sanity galleries override project and service photos.
const photo = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const brand = {
  name: 'AdventVista',
  founded: '2023',
  email: 'anishd@adventvista.com',
  secondaryEmail: 'support@adventvista.com',
  phone: '+91 94054 79396',
  phoneHref: '+919405479396',
  address: 'KrishnaKunj, Near Old Renapur Naka, Latur, Maharashtra',
  instagram: 'https://www.instagram.com/', // Replace with AdventVista's verified profile when available.
  linkedin: 'https://in.linkedin.com/company/adventvista',
  careersFormUrl: 'https://www.google.com/', // Replace with the actual Google Form URL.
  bookingUrl: 'https://calendly.com/', // Replace with the owner's booking link.
};

export const images = {
  hero: photo('photo-1517248135467-4c7edcad34c4', 1800),
  food: photo('photo-1504674900247-0877df9cc836'),
  hotel: photo('photo-1542314831-068cd1dbfeeb'),
  cafe: photo('photo-1554118811-1e0d58224f24'),
  resort: photo('photo-1571896349842-33c89424de2d'),
  dining: photo('photo-1414235077428-338989a2e8c0'),
  chef: photo('photo-1577219491135-ce391730fb2c'),
  dessert: photo('photo-1488477181946-6428a0291777'),
  table: photo('photo-1559339352-11d035aa65de'),
  plate: photo('photo-1512621776951-a57141f2eefd'),
  coffee: photo('photo-1495474472287-4d71bcdd2085'),
};

export const clients = [
  'Carnival Resorts', 'Enrise by Sayaji', 'Hotel City Centre', 'VFood Park',
  'Tuljai Idli', 'HiTown', 'Sanjay Quality Restaurant', 'Hotel Anil',
];

export const services = [
  { id: 'digital-marketing', number: '01', title: 'Digital Marketing', line: 'A sharper plan for a more visible brand.', description: 'A tailored mix of channel strategy, audience insight and creative direction built around your business goals.', delivers: 'Channel strategy, content plans, campaign roadmaps, reporting', for: 'Brands ready to build a consistent, measurable digital presence', impact: 'More relevant reach, clearer positioning and smarter marketing decisions' },
  { id: 'social-media', number: '02', title: 'Social Media Management', line: 'A feed worth following. A community worth keeping.', description: 'We plan, publish and manage social content that reflects the experience people have with your brand.', delivers: 'Content calendars, publishing, community engagement, monthly insights', for: 'Restaurants, cafés, hotels and food brands with an active audience', impact: 'Stronger engagement, brand recall and audience relationships' },
  { id: 'content', number: '03', title: 'Content Creation', line: 'Make every moment feel impossible to scroll past.', description: 'From the first idea to the finished asset, we make content that earns attention and fits every channel.', delivers: 'Concepts, copy, graphics, blogs and campaign assets', for: 'Brands needing a dependable creative content partner', impact: 'A distinctive voice and a more consistent visual presence' },
  { id: 'photography', number: '04', title: 'Photography', line: 'Show the feeling behind the place.', description: 'Food, space, people and atmosphere captured with a clear eye for brand and appetite.', delivers: 'Food, interiors, hospitality and lifestyle photography', for: 'Menus, launches, social channels and hospitality websites', impact: 'A visual library that makes the experience tangible' },
  { id: 'video', number: '05', title: 'Video & Reels', line: 'Stories that move as fast as your audience.', description: 'Short-form films and reels that translate the energy of a space, dish or launch into motion.', delivers: 'Concepts, shoots, editing, reels and promotional videos', for: 'Brands with stories, experiences or launches to show', impact: 'More engaging content for discovery and consideration' },
  { id: 'branding', number: '06', title: 'Branding & Rebranding', line: 'A brand people can recognize and remember.', description: 'We shape the identity, message and visual language that hold every customer touchpoint together.', delivers: 'Positioning, visual identity, art direction and brand guidelines', for: 'New ventures or established brands ready for a fresh chapter', impact: 'Stronger recognition and a more coherent customer experience' },
  { id: 'influencer', number: '07', title: 'Influencer Marketing', line: 'The right voices for the right crowd.', description: 'Relevant creator partnerships that feel credible to the people you want to reach.', delivers: 'Creator selection, briefs, coordination and campaign tracking', for: 'Brands looking to build awareness in specific communities', impact: 'Authentic exposure and useful social proof' },
  { id: 'campaigns', number: '08', title: 'Campaign Strategy', line: 'Give people a reason to show up.', description: 'Launches, festivals, events and seasonal moments built into campaigns with a clear idea at the centre.', delivers: 'Campaign concepts, creative production, channel plans and rollout', for: 'Businesses with an occasion, offer or story to amplify', impact: 'Coordinated attention around moments that matter' },
  { id: 'performance', number: '09', title: 'Performance Marketing', line: 'Creative thinking, accountable delivery.', description: 'Paid campaigns planned around measurable objectives and improved with real campaign signals.', delivers: 'Meta and Google campaign planning, creative tests and reporting', for: 'Brands seeking qualified inquiries, discovery or demand', impact: 'Better visibility into campaign performance and next steps' },
];

export const rebrandingOffer = {
  id: 'rebranding',
  title: 'Rebranding',
  description: 'A considered refresh of your positioning, identity and digital presence while keeping what people already love about the business.',
  delivers: 'Brand discovery, positioning, visual direction, identity rollout',
  for: 'Established hospitality and food brands ready for a new chapter',
  impact: 'A clearer, more consistent brand experience',
};

const caseStudyDrafts = {
  'carnival-resorts': {
    brandStory: 'A resort story starts long before a guest checks in. This spotlight considers the atmosphere, spaces and occasions that turn a stay into a destination worth imagining.',
    creativeDirection: 'Wide views and intimate details present the destination as an experience, not just a property.',
  },
  'enrise-by-sayaji': {
    brandStory: 'A memorable hotel presence should convey how a stay feels, from the first glance to the welcome at the door. This story centres on those small signals of care.',
    creativeDirection: 'Warm interiors, thoughtful details and arrival moments shape the visual rhythm of the stay.',
  },
  'tuljai-idli': {
    brandStory: 'Food stories can be built from the familiar. Tuljai Idli’s spotlight puts the simple pleasure of a meal at the centre, where appetite and everyday ritual meet.',
    creativeDirection: 'Close-up textures and serving moments keep the food front and centre.',
  },
  'hotel-city-centre': {
    brandStory: 'A hospitality venue can hold many experiences under one name. This story looks at how the spaces and occasions of Hotel City Centre can feel part of one identity.',
    creativeDirection: 'The visual direction moves between interiors, table settings and shared moments to connect the whole place.',
  },
  'sanjay-quality': {
    brandStory: 'The power of a local restaurant lies in the moments people return for. This spotlight pays attention to familiar dishes, generous tables and a sense of welcome.',
    creativeDirection: 'Food, people and atmosphere create a warm editorial sequence around a familiar local name.',
  },
  'vfood-park': {
    brandStory: 'A food destination brings many tastes and visits together. This spotlight explores how variety can become a recognizable, shareable story.',
    creativeDirection: 'Colour, appetite and movement give each frame a reason to catch the eye.',
  },
};

export const projects = [
  { id: 'carnival-resorts', client: 'Carnival Resorts', category: 'Resorts · Content', image: images.resort, images: [images.resort, images.hotel, images.dining], summary: 'A destination experience told through atmosphere, occasions and visual storytelling.', detail: 'A hospitality spotlight exploring how destination imagery and short-form content can make a stay feel worth planning.', tags: ['Hospitality', 'Photo & film'], status: 'Client spotlight' },
  { id: 'enrise-by-sayaji', client: 'Enrise by Sayaji', category: 'Hotels · Social', image: images.hotel, images: [images.hotel, images.resort, images.table], summary: 'Bringing the details of a stay into a more memorable digital presence.', detail: 'A hotel brand spotlight focused on the guest journey, from first impression to arrival.', tags: ['Hospitality', 'Social media'], status: 'Client spotlight' },
  { id: 'tuljai-idli', client: 'Tuljai Idli', category: 'Food · Storytelling', image: images.food, images: [images.food, images.plate, images.chef], summary: 'Everyday food made the hero of the story.', detail: 'A food brand spotlight that considers appetite-led photography and consistent social storytelling.', tags: ['Food & beverage', 'Content'], status: 'Client spotlight' },
  { id: 'hotel-city-centre', client: 'Hotel City Centre', category: 'Hospitality · Identity', image: images.dining, images: [images.dining, images.table, images.cafe], summary: 'A place with many experiences, brought into one clear visual story.', detail: 'A hospitality spotlight exploring how visual identity can connect individual experiences under one destination.', tags: ['Branding', 'Hospitality'], status: 'Client spotlight' },
  { id: 'sanjay-quality', client: 'Sanjay Quality Restaurant', category: 'Restaurant · Campaigns', image: images.table, images: [images.table, images.food, images.chef], summary: 'A familiar local favourite, seen through a fresh lens.', detail: 'A restaurant spotlight built around the people, food and moments that bring guests back.', tags: ['Restaurant', 'Campaigns'], status: 'Client spotlight' },
  { id: 'vfood-park', client: 'VFood Park', category: 'Food · Social', image: images.cafe, images: [images.cafe, images.plate, images.dessert], summary: 'A vibrant food destination with room for many stories.', detail: 'A food destination spotlight focused on variety, atmosphere and repeat discovery.', tags: ['Social media', 'Food & beverage'], status: 'Client spotlight' },
].map(project => ({ ...project, caseStudy: caseStudyDrafts[project.id] }));

export const campaignConcepts = [
  { title: 'The weekend escape', sector: 'Resorts & hotels', objective: 'Make a stay feel like the start of a story.', channels: 'Reels · Social · Creator content', image: images.resort, images: [images.resort, images.hotel, images.table] },
  { title: 'Something new on the menu', sector: 'Restaurants & cafés', objective: 'Turn a launch into a reason to visit.', channels: 'Photography · Social · Paid media', image: images.food, images: [images.food, images.plate, images.dessert] },
  { title: 'A place to come together', sector: 'Hospitality venues', objective: 'Put the occasion and atmosphere centre stage.', channels: 'Film · Campaign creative · Social', image: images.dining, images: [images.dining, images.cafe, images.table] },
];

export const recentCampaigns = [
  { title: 'A feed with a point of view', client: 'Tulsi Veg', objective: 'A consistent food-first social presence for a local restaurant.', channels: 'Reels · Posts · Stories', period: '12-month program shared recently', status: 'Recently shared', image: images.food, images: [images.food, images.plate, images.chef] },
  { title: 'A name to remember', client: 'Maharaja Benne Dosa', objective: 'A distinct name, visual identity and in-store story for a food brand.', channels: 'Naming · Identity · Space', period: 'Recent brand launch', status: 'Recently shared', image: images.cafe, images: [images.cafe, images.food, images.table] },
  { title: 'The details of a destination', client: 'Carnival Resort', objective: 'Capture atmosphere, thoughtful plating and hospitality in content.', channels: 'Photography · Content', period: 'Recent content work', status: 'Recently shared', image: images.resort, images: [images.resort, images.hotel, images.dining] },
];

export const testimonials = [
  { quote: 'AdventVista helped our brand gain more recognition.', client: 'Hotel Anil', detail: 'Published on the current AdventVista website' },
  { quote: 'City Center now has a new identity.', client: 'City Center Latur', detail: 'Published on the current AdventVista website' },
  { quote: 'For Latur food lovers, AdventVista is perfect!', client: 'Shelke Bhojanalaya', detail: 'Published on the current AdventVista website' },
];

export const faqs = [
  ['What industries do you work with?', 'Our focus is hospitality and food: restaurants, cafés, hotels, resorts and food brands. We can discuss adjacent projects when the fit is right.'],
  ['Do you only work with restaurants?', 'No. We also work with cafés, hotels, resorts, food brands and other hospitality businesses.'],
  ['Do you work with hotels and resorts?', 'Yes. Hospitality storytelling, photography, social content and campaigns are central to our work.'],
  ['What services do you provide?', 'We offer strategy, social media management, content creation, photography, video, branding, rebranding, influencer marketing and campaigns.'],
  ['Can you manage our complete social media?', 'Yes. We can help with planning, publishing, content production, engagement and reporting, with scope agreed for your business.'],
  ['Do you provide photography and video production?', 'Yes. Food, interiors, people, short-form reels and promotional films can all form part of a project.'],
  ['Do you work outside Maharashtra?', 'Our roots are in Maharashtra, and we are open to working with brands beyond the state. Production logistics are discussed during discovery.'],
  ['How does onboarding work?', 'We start with a conversation about your brand and goals, then outline an approach, scope and timeline. After alignment, we plan, create, launch and review.'],
  ['How much do your services cost?', 'Pricing depends on the scope, production needs and duration. We prepare a custom quote after learning what you need.'],
  ['What is the free brand audit?', 'Share your business details and Instagram handle. After receiving your request, we review your digital presence and email a PDF audit within one week.'],
  ['How can we book a call?', 'Use the scheduling link on our contact page or email us directly.'],
  ['Do you work with influencers?', 'Yes. We can identify relevant creators, shape the brief and coordinate a campaign suited to your audience.'],
  ['Do you provide branding and rebranding?', 'Yes. From positioning and visual direction to a refreshed identity, we can help define the next chapter of your brand.'],
];

export const roles = [
  { title: 'Creative & Design', type: 'Expression of interest', copy: 'Brand thinkers, visual designers and makers with a point of view.' },
  { title: 'Social & Strategy', type: 'Expression of interest', copy: 'People who can turn insight into ideas, calendars and community.' },
  { title: 'Photo, Film & Editing', type: 'Expression of interest', copy: 'Image makers who know how to capture the energy of food and place.' },
  { title: 'Internships', type: 'Expression of interest', copy: 'Curious emerging creatives who want to learn by making real work.' },
];

const feedPhotos = [images.food, images.cafe, images.resort, images.coffee, images.dining, images.plate, images.hotel, images.table, images.dessert, images.chef];
export const socialItems = Array.from({ length: 20 }, (_, i) => ({
  id: `social-${i + 1}`,
  image: feedPhotos[i % feedPhotos.length].replace(/w=\d+/, 'w=500'),
  type: i % 3 === 0 ? 'Reel concept' : 'Post concept',
  caption: ['A taste of what is possible', 'The details make the story', 'Made for the moment', 'The experience, in focus'][i % 4],
}));
