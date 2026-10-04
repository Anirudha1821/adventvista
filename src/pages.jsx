import React, { useState } from 'react';
import { brand, campaignConcepts, clients, faqs, images, rebrandingOffer, recentCampaigns, roles } from './data/site';
import { useSiteContent } from './content';
import { ArrowLink, CampaignCard, ClientLogoGrid, ContinuousGallery, CTASection, DiscoveryCallForm, FAQAccordion, FreeAuditForm, InstagramScroller, Link, Marquee, MediaCarousel, PageHero, ProjectCard, SectionHeading, ServiceCard, TestimonialsSection } from './components';

export function Home() {
  const { projects, services } = useSiteContent();
  const hasPlaceholderMedia = projects.some(project => project.mediaSource !== 'sanity' || project.isIllustrative);
  return <>
    <section className="home-hero editorial-hero">
      <div className="container home-hero-inner">
        <div className="hero-stage">
          <div className="hero-copy">
            <p className="eyebrow">For hospitality & food brands</p>
            <h1>Make them <em>feel</em><br />something<span className="hero-period">.</span></h1>
            <div className="hero-bottom">
              <p>We make hospitality and food brands impossible to overlook. Explore the work, then see what your own brand could become.</p>
              <div className="hero-actions">
                <Link to="/work" className="hero-action hero-action-primary">
                  <span className="hero-action-copy"><small>Selected work</small><strong>Explore the portfolio</strong></span>
                  <span className="hero-action-icon" aria-hidden="true">↗</span>
                </Link>
                <Link to="/audit" className="hero-action hero-action-secondary">
                  <span className="hero-action-copy"><small>Your next move</small><strong>Get a free audit</strong></span>
                  <span className="hero-action-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-visual"><div className="hero-main-image"><img src={images.hero} alt="Warm, atmospheric restaurant interior" fetchpriority="high" /></div><div className="hero-inset-image"><img src={images.food} alt="A table of food ready to share" /></div><div className="hero-image-caption"><span>01 / THE EXPERIENCE</span><span>Look closer ↗</span></div></div>
        </div>
        <div className="hero-footline"><span>Strategy / Content / Campaigns</span><span>Scroll to explore ↓</span></div>
      </div>
    </section>
    <Marquee />
    <section className="work-section section-pad"><div className="container"><SectionHeading eyebrow="Selected work / 01" title={<>Places with stories<br /><em>worth telling.</em></>} aside={hasPlaceholderMedia ? 'Explore client case studies and selected visuals. Some imagery remains illustrative while approved assets are gathered.' : 'Explore client case studies and selected visuals.'} /><div className="project-grid home-project-grid">{[projects[0], projects[2], projects[1], projects[3]].map((project, index) => <ProjectCard key={project.id} project={project} large={index === 0} />)}</div><div className="section-end"><ArrowLink to="/work">See the full portfolio</ArrowLink></div></div></section>
    <section className="audit-preview section-pad"><div className="container audit-preview-grid"><div><p className="eyebrow light">Free brand audit / 02</p><h2>A fresh eye on<br /><em>your next move.</em></h2><p>Share your Instagram and business details. We’ll review your digital presence and email a PDF audit within one week of receiving your request.</p><ArrowLink to="/audit" light>Request your free audit</ArrowLink></div><ol><li><span>01</span><strong>Tell us about your brand</strong><p>Your business, audience, goals and Instagram handle.</p></li><li><span>02</span><strong>We review the details</strong><p>Content, positioning and opportunities to improve.</p></li><li><span>03</span><strong>Get your Brand Analysis</strong><p>A practical audit delivered to your email within one week.</p></li></ol></div></section>
    <section className="intro-section section-pad"><div className="container intro-grid"><p className="eyebrow">Who we are / 03</p><div><h2>For the places<br />people <em>come back to.</em></h2><div className="intro-bottom"><p>AdventVista is a creative marketing agency for restaurants, cafés, hotels, resorts and food brands. We pair the eye of a storyteller with the thinking of a strategist to make every experience more memorable.</p><ArrowLink to="/about">Get to know us</ArrowLink></div></div></div></section>
    <section className="services-preview section-pad"><div className="container"><SectionHeading eyebrow="What we do / 04" title={<>One agency.<br /><em>Every angle.</em></>} aside="The right story needs the right mix of strategy, identity and content." light /><div className="service-list">{[services[0], services[2], services[5]].map(service => <ServiceCard key={service.id} service={service} />)}</div><div className="section-end"><ArrowLink to="/capabilities" light>Explore how we help</ArrowLink></div></div></section>
    <section className="why-section section-pad"><div className="container"><SectionHeading eyebrow="Why AdventVista / 05" title={<>We know the business<br /><em>of being remembered.</em></>} /><div className="why-grid"><div className="why-intro"><p>Guests remember a feeling. We make sure your brand gives them one before they even arrive.</p><ArrowLink to="/about">Meet the agency</ArrowLink></div><div className="why-points">{[['01', 'Hospitality is our world', 'From neighbourhood cafés to destination stays, we understand what makes people choose a place.'], ['02', 'Creative with purpose', 'Strategy and storytelling work together to build attention that leads somewhere.'], ['03', 'A partner, not a template', 'Direct conversations and tailored ideas shaped around your business.']].map(([number, title, copy]) => <div className="why-point" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></div></section>
    <section className="clients-section section-pad"><div className="container"><SectionHeading eyebrow="In good company / 06" title={<>Good company.<br /><em>Great stories.</em></>} aside="Brands named by AdventVista for this revamp." /><ClientLogoGrid /></div></section>
    <CTASection />
  </>;
}

export function About() {
  return <>
    <PageHero eyebrow="About AdventVista" title={<>A different kind<br />of <em>appetite.</em></>} description="Creative minds, clear thinking and a deep love for the businesses that bring people together." image={images.table} imageAlt="Restaurant interior set for guests" />
    <section className="about-intro section-pad"><div className="container split-story"><p className="eyebrow">Our story / Est. 2023</p><div><h2>Born to make<br />hospitality <em>impossible<br />to overlook.</em></h2><p>Founded in 2023, AdventVista is a young creative agency with a focused point of view: the best food and hospitality marketing makes people feel something before they ever step through the door.</p><p>We work across strategy, content, social, branding and campaigns to make that feeling visible, recognizable and worth returning to.</p></div></div></section>
    <section className="manifesto-section"><div className="container"><p className="eyebrow light">What we believe</p><h2>A brand is the<br />feeling that <em>stays.</em></h2><p>We turn the small details—an inviting table, a first bite, a warm welcome—into stories people carry with them.</p></div></section>
    <section className="values-section section-pad"><div className="container"><SectionHeading eyebrow="Our point of view" title={<>Intention in<br /><em>every detail.</em></>} /><div className="values-grid">{[['01', 'Listen closely', 'We begin with your place, your people and your ambition.'], ['02', 'Think creatively', 'Every idea starts with a real reason for your audience to care.'], ['03', 'Make it memorable', 'Visuals and words should stay with someone beyond the scroll.'], ['04', 'Keep learning', 'Campaign signals help us refine the work and make the next move smarter.']].map(([n, t, c]) => <div className="value" key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></div>)}</div></div></section>
    <section className="mission-section section-pad"><div className="container mission-grid"><div><p className="eyebrow">Our mission</p><h2>More visibility.<br />Deeper connection.<br /><em>Experiences remembered.</em></h2><p>We help hospitality and food brands strengthen their digital presence and turn ordinary dining and stays into memorable brand experiences.</p></div><div><p className="eyebrow">Our vision</p><h2>From Maharashtra,<br /><em>and beyond.</em></h2><p>To become a leading creative partner for food, beverage and hospitality brands through storytelling, strategy and measurable growth.</p></div></div></section>
    <section className="about-photo"><img src={images.chef} alt="Chef preparing food in a kitchen" loading="lazy" /><div className="container"><span>For the people behind the experience.</span></div></section>
    <TestimonialsSection />
    <CTASection eyebrow="We should talk" title={<>Your next story<br /><em>starts with us.</em></>} />
  </>;
}

export function Services() {
  const { services } = useSiteContent();
  return <>
    <PageHero eyebrow="Our services" title={<>What moves<br /><em>your brand.</em></>} description="A creative and strategic toolkit built around the way hospitality brands grow." image={images.food} imageAlt="Food served for a shared meal" />
    <section className="services-detail section-pad"><div className="container">
      <div className="services-lead"><p className="eyebrow">What we do</p><p>Choose one service or bring us into the bigger picture. We shape the right mix around your audience, ambition and stage of growth.</p></div>
      {services.map(service => <article className="service-detail" id={service.id} key={service.id}>
        <div className="service-detail-title"><span>{service.number} / {String(services.length).padStart(2, '0')}</span><h2>{service.title}</h2><p>{service.line}</p></div>
        <div className="service-detail-body"><p>{service.description}</p><dl><div><dt>What we provide</dt><dd>{service.delivers}</dd></div><div><dt>Who it’s for</dt><dd>{service.for}</dd></div><div><dt>Business impact</dt><dd>{service.impact}</dd></div></dl><ArrowLink to="/contact">Talk about this service</ArrowLink></div>
        {service.images?.length > 0 && <div className="service-detail-media"><MediaCarousel key="sanity" photos={service.images} label={service.title} className="service-carousel" /><p>{service.title} / {service.isIllustrative ? 'illustrative visual direction' : 'selected visuals'}</p></div>}
      </article>)}
    </div></section>
    <CTASection eyebrow="Put the pieces together" title={<>What could your<br /><em>brand become?</em></>} />
  </>;
}

export function Work() {
  const { projects } = useSiteContent();
  const hasPlaceholderMedia = projects.some(project => project.mediaSource !== 'sanity' || project.isIllustrative);
  const categories = ['All', 'Hospitality', 'Food & beverage', 'Branding', 'Social media', 'Campaigns'];
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter));
  return <>
    <PageHero eyebrow="Our work" title={<>Made to be<br /><em>remembered.</em></>} description="A look at the people and places behind the brands we help bring into focus." image={images.dining} imageAlt="Atmospheric restaurant table" />
    <section className="portfolio-section section-pad"><div className="container"><div className="portfolio-top"><p>{hasPlaceholderMedia ? 'Explore AdventVista’s client case studies and selected visuals. Some photography is illustrative; briefs and results are added only when confirmed.' : 'Explore AdventVista’s client case studies and selected visuals. Briefs and results are added as they are confirmed.'}</p><div className="filter-list" role="group" aria-label="Filter projects">{categories.map(category => <button key={category} type="button" className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div></div><div className="project-grid">{filtered.map((project, i) => <ProjectCard key={project.id} project={project} large={i % 3 === 0} />)}</div>{filtered.length === 0 && <p>No case studies in this category yet.</p>}</div></section>
    <section className="campaign-section section-pad" id="recent-campaigns"><div className="container"><SectionHeading eyebrow="Recently shared" title={<>Ideas out<br /><em>in the world.</em></>} aside="Work AdventVista has shared publicly. Imagery is illustrative; campaign status and results are pending confirmation." /><div className="campaign-grid">{recentCampaigns.map(item => <CampaignCard key={item.title} campaign={item} recent />)}</div></div></section>
    <section className="campaign-section section-pad" id="campaigns"><div className="container"><SectionHeading eyebrow="Campaign directions" title={<>The next idea<br /><em>is already moving.</em></>} aside="Illustrative campaign concepts, not claims of currently active campaigns." /><div className="campaign-grid">{campaignConcepts.map(item => <CampaignCard key={item.title} campaign={item} />)}</div></div></section>
    <InstagramScroller />
    <CTASection />
  </>;
}

export function ProjectDetail({ id }) {
  const { projects } = useSiteContent();
  const project = projects.find(item => item.id === id);
  if (!project) return <NotFound />;
  const illustrative = project.mediaSource !== 'sanity' || project.isIllustrative;
  const index = projects.findIndex(item => item.id === id);
  const next = projects[(index + 1) % projects.length];
  const story = project.caseStudy || {};
  const photos = project.images?.length ? project.images : [project.image];
  const appreciationPhotos = story.appreciationImages?.length ? story.appreciationImages : photos.slice(0, 2);
  const impactStats = story.impactStats?.length ? story.impactStats : null;
  const creativeDescription = story.creativeDirection || story.creative || 'A closer look at the imagery and visual details behind this project.';
  return <>
    <section className="case-study-hero" aria-labelledby="case-study-title">
      <div className="case-study-hero-media"><img src={project.image} alt={illustrative ? `Illustrative visual for ${project.client}` : (photos[0]?.alt || `${project.client} photograph`)} fetchPriority="high" /></div>
      <div className="container case-study-hero-inner">
        <div className="case-study-hero-top"><span>Case study / {String(index + 1).padStart(2, '0')}</span><Link to="/work">All projects <span aria-hidden="true">↗</span></Link></div>
        <div className="case-study-hero-copy"><p className="eyebrow">{project.category}</p><h1 id="case-study-title">{project.client}<span className="hero-period">.</span></h1><p>{story.headline || project.summary}</p></div>
      </div>
    </section>
    <section className="case-study-overview section-pad"><div className="container">
      <div className="case-study-overview-heading"><p className="eyebrow">01 / The story</p><h2>Every place has<br /><em>a point of view.</em></h2><p>The thinking, details and visual direction behind {project.client}.</p></div>
      <div className="case-study-overview-grid"><article><span>Brand story</span><h3>The feeling behind the name.</h3><p>{story.brandStory || story.challenge || project.summary}</p></article><article><span>What we did</span><h3>Giving the story a shape.</h3><p>{story.whatWeDid || story.approach || project.detail}</p></article></div>
      <div className="case-study-facts"><div><span>Client</span><strong>{project.client}</strong></div><div><span>Industry</span><strong>{project.category}</strong></div><div><span>Focus</span><strong>{project.tags.join(' · ')}</strong></div></div>
    </div></section>
    <ContinuousGallery photos={photos} label={project.client} isIllustrative={illustrative} eyebrow="02 / The creative" heading={<>Creativity,<br /><em>served.</em></>} description={`${creativeDescription}${illustrative ? ' Imagery is illustrative until approved project photography is added.' : ''}`} />
    <section className="case-study-results section-pad"><div className="container"><div className="case-study-results-lead"><p className="eyebrow light">03 / Results & impact</p><h2>Work that<br /><em>moves things forward.</em></h2><p>{story.results || 'We look at the outcomes that matter to each brand, from discovery and engagement to the reasons people choose to visit.'}</p></div><div className="case-study-impact-grid">{impactStats ? impactStats.map((stat, statIndex) => <article key={`${stat.label}-${statIndex}`}><span>{String(statIndex + 1).padStart(2, '0')}</span><strong>{stat.value}</strong><p>{stat.label}</p></article>) : [{ number: '01', label: 'Reach', detail: 'Visibility & discovery' }, { number: '02', label: 'Engagement', detail: 'Attention & interaction' }, { number: '03', label: 'Business impact', detail: 'Visits & loyalty' }].map(area => <article className="case-study-impact-pending" key={area.number}><strong>{area.number}</strong><p>{area.label}</p><small>{area.detail}</small></article>)}</div>{!impactStats && <p className="case-study-results-note">These are the three areas we track. Client performance figures can be added once verified and approved.</p>}</div></section>
    <section className="case-study-appreciation section-pad"><div className="container case-study-appreciation-grid"><div className="case-study-appreciation-copy"><p className="eyebrow">04 / Appreciation</p><h2>For the people<br /><em>behind the place.</em></h2><p>{story.appreciation || 'A closing look at the details, spaces and moments that give this brand its character.'}</p>{story.appreciationQuote && <blockquote>“{story.appreciationQuote}”<cite>{story.appreciationCredit || project.client}</cite></blockquote>}</div><div className={`case-study-appreciation-photos ${appreciationPhotos.length === 1 ? 'is-single' : ''}`}>{appreciationPhotos.map((photo, photoIndex) => <figure key={`${typeof photo === 'string' ? photo : photo.url}-${photoIndex}`}><img src={typeof photo === 'string' ? photo : photo.url} alt={typeof photo === 'string' ? `${project.client} detail ${photoIndex + 1}` : (photo.alt || `${project.client} detail ${photoIndex + 1}`)} loading="lazy" /><figcaption>{String(photoIndex + 1).padStart(2, '0')} / {project.client}</figcaption></figure>)}</div></div></section>
    <CTASection eyebrow="Your brand could be next" title={<>See your brand<br /><em>with fresh eyes.</em></>} button="Get a free audit" />
    <section className="next-project"><div className="container"><p className="eyebrow">Up next</p><Link to={`/work/${next.id}`}>{next.client} <span aria-hidden="true">↗</span></Link></div></section>
  </>;
}

export function Capabilities() {
  const { services } = useSiteContent();
  const offerings = [services[0], rebrandingOffer, ...services.slice(1).map(service => service.id === 'branding' ? { ...service, title: 'Brand Identity' } : service)];
  return <><PageHero eyebrow="How we help" title={<>The right work.<br /><em>For your next move.</em></>} description="Explore the creative and strategic work we can shape around your business. Every engagement starts with your goals, not a fixed package." /><section className="pricing-section section-pad"><div className="container"><div className="pricing-intro"><p className="eyebrow">Our capabilities</p><p>Choose a focused service or bring us in across strategy, content and campaigns. Each scope is tailored to the brand.</p></div><div className="pricing-grid capabilities-grid">{offerings.map((offering, index) => <article className={`pricing-card ${index === 0 ? 'featured' : ''}`} key={offering.id}><p className="eyebrow">{String(index + 1).padStart(2, '0')} / Capability</p><h2>{offering.title}</h2><p>{offering.description}</p><strong className="capability-label">What it can include</strong><ul>{offering.delivers.split(',').map(feature => <li key={feature}>{feature.trim()}</li>)}</ul><div className="capability-impact"><span>Built for</span><p>{offering.for}</p><span>Potential impact</span><p>{offering.impact}</p></div><ArrowLink to={`/services#${offering.id === 'rebranding' ? 'branding' : offering.id}`}>Explore this service</ArrowLink></article>)}</div></div></section><CTASection eyebrow="Start with insight" title={<>Find your brand’s<br /><em>next opportunity.</em></>} button="Get a free audit" /></>;
}

export function Careers() {
  return <><PageHero eyebrow="Careers & collaborations" title={<>Make things<br /><em>matter.</em></>} description="For curious minds who care about culture, creativity and the places that bring people together." image={images.coffee} imageAlt="Coffee and a creative workspace" /><section className="careers-intro section-pad"><div className="container split-story"><p className="eyebrow">The way we work</p><div><h2>Bring your eye.<br /><em>Bring your ideas.</em></h2><p>AdventVista is a small, growing agency where ideas move from conversation to camera to campaign. We believe strong work comes from paying attention, trying things and caring about the details.</p><p>We’re interested in designers, strategists, writers, photographers, filmmakers and people just getting started.</p></div></div></section><section className="careers-roles section-pad"><div className="container"><SectionHeading eyebrow="Explore opportunities" title={<>Find your<br /><em>kind of work.</em></>} aside="These are areas of interest, not confirmed open vacancies. The application link currently opens Google until the final Google Form is ready." /><div className="role-list">{roles.map(role => <a className="role-entry" key={role.title} href={brand.careersFormUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open application link for ${role.title} in a new tab`}><div><span>{role.type}</span><h3>{role.title}</h3><p>{role.copy}</p></div><span className="role-entry-arrow" aria-hidden="true">↗</span></a>)}</div></div></section></>;
}

export function FAQ() {
  return <><PageHero eyebrow="Frequently asked questions" title={<>A little more<br /><em>clarity.</em></>} description="The things people usually ask before we start making something together." /><section className="faq-page section-pad"><div className="container faq-page-grid"><div><p className="eyebrow">Answers / {String(faqs.length).padStart(2, '0')}</p><h2>Everything<br /><em>you need to know.</em></h2><p>Still have a question? We’re always happy to talk through your brief.</p><ArrowLink to="/contact">Ask us directly</ArrowLink></div><FAQAccordion /></div></section><CTASection /></>;
}

export function FreeAudit() {
  return <><PageHero eyebrow="Free brand audit" title={<>See your brand<br /><em>with fresh eyes.</em></>} description="Share your business and Instagram. We’ll review your digital presence and email a practical PDF audit within one week of receiving your request." /><section className="audit-page-intro section-pad"><div className="container"><SectionHeading eyebrow="What happens next" title={<>A useful look<br /><em>at what’s possible.</em></>} aside="A focused review of your current digital presence, made for hospitality and food brands." /><div className="audit-steps"><article><span>01 / Share</span><h3>Tell us about your business.</h3><p>Give us your Instagram handle, contact details and a little context about your goals.</p></article><article><span>02 / Review</span><h3>We look closely.</h3><p>We examine your content, brand presentation and opportunities to connect more clearly with customers.</p></article><article><span>03 / Receive</span><h3>Get your PDF audit.</h3><p>We email your audit within one week after receiving your request.</p></article></div></div></section><section className="audit-form-section section-pad"><div className="container audit-form-grid"><div><p className="eyebrow">Start here</p><h2>Your next move<br /><em>starts with clarity.</em></h2><p>There’s no charge for this first look. The PDF is sent to the email you provide in the request.</p></div><FreeAuditForm /></div></section></>;
}

export function Contact() {
  return <><PageHero eyebrow="Contact AdventVista" title={<>Let’s make<br /><em>something happen.</em></>} description="Tell us about a project, request a free audit, or book a call. We’d love to hear what you’re building." /><section className="contact-section section-pad"><div className="container contact-grid"><div className="contact-aside"><p className="eyebrow">Choose your next step</p><h2>Come with<br /><em>an idea.</em></h2><p>Want a first look at your digital presence? Start with a free audit. Ready to speak directly? Book a call through Calendly.</p><div className="contact-actions"><ArrowLink to="/audit">Get a free audit</ArrowLink><a className="contact-booking-link" href={brand.bookingUrl} target="_blank" rel="noopener noreferrer">Book a call on Calendly <span aria-hidden="true">↗</span></a><p>The direct booking calendar is coming soon; this link currently opens Calendly’s homepage.</p></div><div className="contact-lines"><div><span>Email us</span><a href={`mailto:${brand.email}`}>{brand.email} ↗</a></div><div><span>Call us</span><a href={`tel:${brand.phoneHref}`}>{brand.phone} ↗</a></div><div><span>Find us</span><strong>{brand.address}</strong></div></div></div><DiscoveryCallForm /></div></section></>;
}

export function Legal({ kind }) {
  const privacy = kind === 'privacy';
  return <><PageHero eyebrow={privacy ? 'Privacy' : 'Terms'} title={privacy ? <>Privacy<br /><em>policy.</em></> : <>Website<br /><em>terms.</em></>} description="A plain-language interim notice for this frontend preview." /><section className="legal-page section-pad"><div className="container"><p className="eyebrow">Interim website notice</p>{privacy ? <><h2>How inquiries work</h2><p>This frontend does not store or transmit form data to an AdventVista server. The contact and free-audit forms prepare email drafts in your own email application. Your request reaches AdventVista only when you send that email. The booking link on the Contact page opens Calendly.</p><p>Images in this preview may be loaded from Sanity or Unsplash, and fonts from Google Fonts. A full privacy policy should be approved before public launch, especially when analytics or a backend form is added.</p></> : <><h2>About this preview</h2><p>This website is a frontend preview. Sample campaign concepts and illustrative photography show structure and design direction. Case-study outcomes are shown only when confirmed; this preview does not guarantee services or results.</p><p>Final legal terms should be reviewed and approved before public launch.</p></>}<p>Questions? <a href={`mailto:${brand.email}`}>{brand.email}</a></p></div></section></>;
}

export function NotFound() {
  return <section className="not-found"><div className="container"><p className="eyebrow">404 / Page not found</p><h1>Looks like this<br /><em>story moved.</em></h1><ArrowLink to="/">Back to the beginning</ArrowLink></div></section>;
}
