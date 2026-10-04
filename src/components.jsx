import React, { useCallback, useEffect, useRef, useState } from 'react';
import { brand, clients, faqs, projects, services, socialItems, testimonials } from './data/site';

export function navigate(path) {
  if (window.location.pathname !== path) window.history.pushState({}, '', path);
  window.dispatchEvent(new Event('app:navigate'));
  if (path.includes('#')) {
    window.setTimeout(() => document.getElementById(path.split('#')[1])?.scrollIntoView({ behavior: 'smooth' }), 80);
  } else window.scrollTo({ top: 0, behavior: 'instant' });
}

export function Link({ to, children, className = '', onClick, ...props }) {
  return <a href={to} className={className} onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(to);
  }} {...props}>{children}</a>;
}

export function ArrowLink({ to, children, light = false, className = '' }) {
  return <Link to={to} className={`arrow-link ${light ? 'arrow-link-light' : ''} ${className}`}><span>{children}</span><span aria-hidden="true">↗</span></Link>;
}

export function Logo({ light = false, onClick }) {
  return <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="AdventVista home" onClick={onClick}><span className="logo-mark">A<span className="logo-dot">.</span></span><span className="logo-name">ADVENT<br />VISTA</span></Link>;
}

const nav = [['/', 'Home'], ['/work', 'Our work'], ['/services', 'Services'], ['/capabilities', 'How we help'], ['/about', 'About'], ['/contact', 'Contact']];
const mobileMore = [['/careers', 'Careers'], ['/faq', 'FAQ']];

export function Navbar({ path, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  useEffect(() => {
    const closeOnDesktop = () => { if (window.innerWidth > 980) setOpen(false); };
    window.addEventListener('resize', closeOnDesktop);
    return () => window.removeEventListener('resize', closeOnDesktop);
  }, []);
  return <header className={`site-header ${open ? 'menu-is-open' : ''}`}>
    <div className="nav-shell">
      <div className="nav-brand"><Logo light onClick={() => setOpen(false)} /><span className="nav-brand-note">Creative for<br />food &amp; stays</span></div>
      <nav id="site-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <div className="nav-menu-intro"><span>Explore AdventVista</span><span>01 — 06</span></div>
        <div className="nav-primary">
          {nav.map(([to, label]) => {
            const active = path === to || (to === '/work' && path.startsWith('/work/'));
            return <Link key={to} to={to} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>;
          })}
        </div>
        <div className="nav-secondary">
          {mobileMore.map(([to, label]) => <Link key={to} to={to} className={path === to ? 'active' : ''} aria-current={path === to ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        </div>
        <Link to="/audit" className="nav-menu-cta" aria-current={path === '/audit' ? 'page' : undefined} onClick={() => setOpen(false)}>Get a free audit <span aria-hidden="true">↗</span></Link>
        <div className="nav-menu-footer"><span>Hospitality-first creative studio<br />Latur, Maharashtra</span><a href={`mailto:${brand.email}`}>{brand.email} ↗</a></div>
      </nav>
      <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'dark'} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
        {theme === 'dark'
          ? <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
          : <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z" /><path d="M17.5 3v3m-1.5-1.5h3" /></svg>}
      </button>
      <Link to="/audit" className="nav-cta" aria-label="Get a free brand audit" aria-current={path === '/audit' ? 'page' : undefined}>Free audit <span aria-hidden="true">↗</span></Link>
      <button ref={menuButtonRef} className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="site-navigation">
        <span /><span />
      </button>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="footer">
    <div className="container footer-top"><p className="eyebrow light">See your brand with fresh eyes</p><h2>Know what’s<br /><em>working next.</em></h2><ArrowLink to="/audit" light>Get a free audit</ArrowLink></div>
    <div className="container footer-bottom">
      <div className="footer-brand"><Logo light /><p>Creative strategy and content for the places, plates and people we remember.</p><span>Based in Latur, Maharashtra · Working beyond.</span></div>
      <div className="footer-col"><strong>Explore</strong><Link to="/work">Our work</Link><Link to="/services">Services</Link><Link to="/capabilities">How we help</Link><Link to="/about">About</Link></div>
      <div className="footer-col"><strong>More</strong><Link to="/audit">Free audit</Link><Link to="/careers">Careers</Link><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link><Link to="/privacy">Privacy policy</Link><Link to="/terms">Terms</Link></div>
      <div className="footer-col footer-contact"><strong>Say hello</strong><a href={`mailto:${brand.email}`}>{brand.email}</a><a href={`tel:${brand.phoneHref}`}>{brand.phone}</a><span>{brand.address}</span>{brand.instagram ? <a href={brand.instagram} target="_blank" rel="noreferrer">Instagram ↗</a> : <span>Instagram · profile link pending</span>}<a href={brand.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
    </div>
    <div className="container footer-legal"><span>© {new Date().getFullYear()} AdventVista. All rights reserved.</span><span>Made with a taste for what’s next.</span></div>
  </footer>;
}

export function SectionHeading({ eyebrow, title, aside, light = false, className = '' }) {
  return <div className={`section-heading ${light ? 'section-heading-light' : ''} ${className}`}><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{aside && <p className="section-aside">{aside}</p>}</div>;
}

export function PageHero({ eyebrow, title, description, image, imageAlt = '', className = '' }) {
  return <section className={`page-hero ${image ? 'has-image' : ''} ${className}`}>
    {image && <div className="page-hero-image"><img src={image} alt={imageAlt} /></div>}
    <div className="container page-hero-inner"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p className="page-hero-copy">{description}</p></div>
  </section>;
}

export function Marquee({ words = 'CREATIVE THINKING  ·  REAL CONNECTION  ·  BOLD STORIES  ·  ' }) {
  return <div className="marquee" aria-hidden="true"><div className="marquee-track">{Array.from({ length: 4 }, (_, i) => <span key={i}>{words}</span>)}</div></div>;
}

export function ServiceCard({ service }) {
  return <Link to={`/services#${service.id}`} className="service-card"><span className="service-number">{service.number} /</span><div><h3>{service.title}</h3><p>{service.line}</p></div><span className="service-arrow" aria-hidden="true">↗</span></Link>;
}

export function MediaCarousel({ photos, label, className = '', interval = 4200, to }) {
  const images = photos?.length ? photos : [];
  const looping = images.length > 1;
  const slides = looping ? [images[images.length - 1], ...images, images[0]] : images;
  const [position, setPosition] = useState(looping ? 1 : 0);
  const [animated, setAnimated] = useState(true);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const frameRef = useRef(null);
  const touchStart = useRef(null);
  const suppressClick = useRef(false);
  const moving = useRef(false);
  const unlockTimer = useRef(null);
  const active = looping ? ((position - 1 + images.length) % images.length) : 0;
  const move = useCallback(direction => {
    if (!looping || moving.current) return;
    moving.current = true;
    window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => { moving.current = false; }, 850);
    setAnimated(true);
    setPosition(current => current + direction);
  }, [looping]);

  useEffect(() => {
    if (!frameRef.current) return;
    if (!('IntersectionObserver' in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(frameRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!looping || !visible || paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => move(1), interval);
    return () => window.clearInterval(timer);
  }, [looping, visible, paused, interval, move]);

  useEffect(() => () => window.clearTimeout(unlockTimer.current), []);
  const finishMove = event => {
    if (event.target !== event.currentTarget || !looping) return;
    if (position === 0 || position === images.length + 1) {
      setAnimated(false);
      setPosition(position === 0 ? images.length : 1);
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => setAnimated(true)));
    }
    moving.current = false;
    window.clearTimeout(unlockTimer.current);
  };
  const finishTouch = event => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) < 40) return;
    suppressClick.current = true;
    move(distance < 0 ? 1 : -1);
    window.setTimeout(() => { suppressClick.current = false; }, 450);
  };

  return <div ref={frameRef} className={`media-carousel ${className}`} role="region" aria-roledescription="carousel" aria-label={`${label} photo gallery`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} onTouchStart={event => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={finishTouch} onTouchCancel={() => { touchStart.current = null; }}>
    <div className={`carousel-track ${animated ? '' : 'no-transition'}`} style={{ transform: `translateX(-${position * 100}%)` }} onTransitionEnd={finishMove} aria-live="off">
      {slides.map((photo, index) => {
        const clone = looping && (index === 0 || index === slides.length - 1);
        const isActiveSlide = looping ? index === active + 1 : index === 0;
        const image = <img src={typeof photo === 'string' ? photo : photo.url} alt={clone ? '' : (photo.alt || `${label} photo ${index} of ${images.length}`)} loading="lazy" draggable="false" />;
        const linkProps = { className: 'carousel-photo-link', tabIndex: !clone && isActiveSlide ? 0 : -1, onClick: event => { if (suppressClick.current) event.preventDefault(); } };
        return <div className="carousel-slide" key={`${typeof photo === 'string' ? photo : photo.url}-${index}`} aria-hidden={clone || !isActiveSlide}>{to
          ? <Link to={to} aria-label={`View ${label} project`} {...linkProps}>{image}</Link>
          : <a href={brand.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Open Instagram in a new tab from the ${label} gallery`} {...linkProps}>{image}</a>}</div>;
      })}
    </div>
    {looping && <><span className="carousel-count" aria-hidden="true">{String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span><div className="carousel-controls"><button type="button" onClick={() => move(-1)} aria-label={`Previous ${label} photo`}>←</button><button type="button" onClick={() => move(1)} aria-label={`Next ${label} photo`}>→</button></div><div className="carousel-dots" role="group" aria-label={`Choose ${label} photo`}>{images.map((_, index) => <button key={index} type="button" className={active === index ? 'active' : ''} onClick={() => { if (moving.current || active === index) return; moving.current = true; window.clearTimeout(unlockTimer.current); unlockTimer.current = window.setTimeout(() => { moving.current = false; }, 850); setAnimated(true); setPosition(index + 1); }} aria-label={`Show photo ${index + 1} of ${images.length}`} aria-current={active === index ? 'true' : undefined} />)}</div></>}
    <a className="carousel-instagram" href={brand.instagram} target="_blank" rel="noopener noreferrer" aria-label="Open Instagram in a new tab">Instagram ↗</a>
  </div>;
}

export function ProjectCard({ project, large = false }) {
  return <article className={`project-card ${large ? 'project-card-large' : ''}`}><MediaCarousel key={project.mediaSource || 'fallback'} photos={project.images || [project.image]} label={project.client} className="project-image" to={`/work/${project.id}`} /><div className="project-meta"><div><span>{project.category}</span><h3><Link to={`/work/${project.id}`}>{project.client}</Link></h3></div><Link to={`/work/${project.id}`} className="project-index">Read case study ↗</Link></div></article>;
}

export function ContinuousGallery({ photos, label, isIllustrative = true }) {
  const items = photos?.length ? photos : [];
  // Each half must be wider than the viewport, even when the owner publishes one photo.
  const sequence = items.length ? Array.from({ length: Math.ceil(3 / items.length) }, () => items).flat() : [];
  return <section className="continuous-gallery" aria-label={`${label} continuously scrolling image gallery`}>
    <div className="container continuous-gallery-heading"><div><p className="eyebrow">Through the lens</p><h2>{label}<span className="hero-period">.</span></h2></div><div><p>{isIllustrative ? 'Illustrative visual directions. Approved project photography can replace these images later.' : 'Selected visuals for this spotlight.'}</p><a href={brand.instagram} target="_blank" rel="noopener noreferrer">Open Instagram ↗</a></div></div>
    <div className="continuous-gallery-window"><div className="continuous-gallery-track">{[0, 1].map(copy => <div className="continuous-gallery-group" key={copy} aria-hidden={copy === 1}>{sequence.map((photo, index) => {
      const duplicate = copy === 1 || index >= items.length;
      return <a className="continuous-gallery-tile" href={brand.instagram} target="_blank" rel="noopener noreferrer" tabIndex={duplicate ? -1 : 0} aria-hidden={duplicate} aria-label={duplicate ? undefined : `Open Instagram from ${label} image ${index + 1}`} key={`${copy}-${index}`}><img src={typeof photo === 'string' ? photo : photo.url} alt={duplicate ? '' : (photo.alt || `${label} image ${index + 1}`)} loading="lazy" draggable="false" /></a>;
    })}</div>)}</div></div>
  </section>;
}

export function CampaignCard({ campaign, recent = false }) {
  return <article className="campaign-card"><MediaCarousel photos={campaign.images || [campaign.image]} label={campaign.client || campaign.title} className="campaign-image" /><p className="eyebrow">{recent ? `${campaign.client} · ${campaign.status}` : campaign.sector}</p><h3>{campaign.title}</h3><p>{campaign.objective}</p><small>{campaign.channels}{campaign.period ? ` / ${campaign.period}` : ''}</small></article>;
}

export function ClientLogoGrid() {
  const projectByClient = new Map(projects.map(project => [project.client, project.id]));
  return <div className="client-grid">{clients.map(name => projectByClient.has(name)
    ? <Link to={`/work/${projectByClient.get(name)}`} key={name} aria-label={`Read ${name} case study`}>{name} <span aria-hidden="true">↗</span></Link>
    : <span key={name}>{name}</span>)}</div>;
}

export function Testimonial({ item, index }) {
  return <article className="testimonial"><span className="quote-mark">“</span><blockquote>{item.quote}</blockquote><div><span className="testimonial-index">0{index + 1}</span><p><strong>{item.client}</strong><small>{item.detail}</small></p></div></article>;
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];
  return <section className="testimonials-section section-pad"><div className="container"><SectionHeading eyebrow="Kind words" title={<>Good work is<br /><em>felt by people.</em></>} aside="A few words carried over from AdventVista’s current website." /><div className="testimonial-editorial"><div className="testimonial-feature" key={item.client} aria-live="polite"><span className="testimonial-symbol" aria-hidden="true">“</span><blockquote>{item.quote}</blockquote><p><strong>{item.client}</strong><span>{item.detail}</span></p></div><div className="testimonial-select" aria-label="Choose a client review">{testimonials.map((review, i) => <button key={review.client} type="button" onClick={() => setActive(i)} className={active === i ? 'is-active' : ''} aria-pressed={active === i}><span>0{i + 1}</span><strong>{review.client}</strong><span aria-hidden="true">↗</span></button>)}</div></div></div></section>;
}

export function InstagramScroller() {
  const items = [...socialItems, ...socialItems];
  return <section className="social-section section-pad"><div className="container"><div className="social-heading"><div><p className="eyebrow">Visual appetite</p><h2>Made for<br /><em>the scroll.</em></h2></div><p>A fast-moving moodboard of sample content directions. Tap a tile to open Instagram; real posts can replace these visuals later.</p></div></div><div className="social-window" tabIndex="0" aria-label="Sample social content gallery. Scroll horizontally to explore."><div className="social-track">{items.map((item, i) => <a className="social-tile" href={brand.instagram} target="_blank" rel="noopener noreferrer" key={`${item.id}-${i}`} aria-label={`Open Instagram: ${item.caption}`}><img src={item.image} alt={`${item.type}: ${item.caption}`} loading="lazy" /><div><span>{item.type}</span><strong>{item.caption}</strong></div></a>)}</div></div><div className="container social-note"><span>01 / 20 · Sample visual directions</span><span>Hover to pause · Scroll to browse</span></div></section>;
}

export function FAQAccordion({ items = faqs }) {
  const [open, setOpen] = useState(0);
  return <div className="faq-list">{items.map(([question, answer], index) => <div className={`faq-item ${open === index ? 'is-open' : ''}`} key={question}><h3><button type="button" aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(open === index ? -1 : index)}><span className="faq-num">{String(index + 1).padStart(2, '0')}</span><span>{question}</span><span className="faq-plus" aria-hidden="true">{open === index ? '−' : '+'}</span></button></h3><div className="faq-answer" id={`faq-answer-${index}`} hidden={open !== index}><p>{answer}</p></div></div>)}</div>;
}

export function CTASection({ eyebrow = 'A clearer view of your brand', title = <>Know where you<br /><em>could go next.</em></>, copy = 'Share your business and Instagram. We’ll review your digital presence and email a PDF audit within one week of receiving your request.', button = 'Get a free audit', to = '/audit' }) {
  return <section className="cta-section"><div className="container cta-inner"><div><p className="eyebrow light">{eyebrow}</p><h2>{title}</h2></div><div className="cta-side"><p>{copy}</p><ArrowLink to={to} light>{button}</ArrowLink></div></div></section>;
}

export function DiscoveryCallForm() {
  const [selected, setSelected] = useState([]);
  const [message, setMessage] = useState('');
  const options = ['Social media', 'Content creation', 'Photography / video', 'Branding / rebranding', 'Campaigns', 'Performance marketing'];
  const toggle = (option) => setSelected(current => current.includes(option) ? current.filter(x => x !== option) : [...current, option]);
  const submit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get('name')}`, `Business: ${form.get('business')}`, `Phone: ${form.get('phone')}`,
      `Email: ${form.get('email')}`, `Website / Instagram: ${form.get('website') || 'Not provided'}`,
      `Business type: ${form.get('type')}`, `Services: ${selected.join(', ') || 'Not specified'}`,
      `Estimated budget: ${form.get('budget') || 'Not specified'}`, '', `Project details: ${form.get('message') || 'Not provided'}`,
    ].join('\n');
    setMessage('Your email app is opening with the inquiry ready to send. If it does not open, please email us directly.');
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(`Discovery inquiry — ${form.get('business')}`)}&body=${encodeURIComponent(body)}`;
  };
  return <form className="contact-form" onSubmit={submit}><div className="form-intro"><span className="eyebrow">Start a conversation</span><h2>Tell us about<br /><em>your brand.</em></h2><p>Share a little about your business. We’ll take it from there.</p></div>
    <div className="form-grid"><label>YOUR NAME *<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>BUSINESS NAME *<input name="business" required autoComplete="organization" placeholder="Your business" /></label><label>PHONE *<input name="phone" type="tel" required autoComplete="tel" placeholder="+91" /></label><label>EMAIL *<input name="email" type="email" required autoComplete="email" placeholder="you@business.com" /></label><label className="full">WEBSITE OR INSTAGRAM<input name="website" type="text" placeholder="Your website or social profile" /></label><label>BUSINESS TYPE *<select name="type" required defaultValue=""><option value="" disabled>Select your business</option><option>Restaurant</option><option>Café</option><option>Hotel / Resort</option><option>Food brand</option><option>Other hospitality</option><option>Other</option></select></label><label>ESTIMATED BUDGET<select name="budget" defaultValue=""><option value="">Prefer to discuss</option><option>Under ₹50,000</option><option>₹50,000–₹1,00,000</option><option>₹1,00,000–₹3,00,000</option><option>₹3,00,000+</option></select></label></div>
    <fieldset className="service-checks"><legend>WHAT DO YOU NEED HELP WITH?</legend><div>{options.map(option => <label key={option}><input type="checkbox" checked={selected.includes(option)} onChange={() => toggle(option)} /><span>{option}</span></label>)}</div></fieldset>
    <label className="message-label">TELL US MORE<textarea name="message" rows="4" placeholder="What are you working on? What would success look like?" /></label>
    <button type="submit" className="button-dark">Prepare inquiry email <span aria-hidden="true">↗</span></button><p className="form-helper">This opens a draft in your email app. Your inquiry is sent when you send that email.</p>{message && <p className="form-status" role="status">{message} <a href={`mailto:${brand.email}`}>{brand.email}</a></p>}
  </form>;
}

export function FreeAuditForm() {
  const [message, setMessage] = useState('');
  const submit = event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      'Free brand audit request', '',
      `Name: ${form.get('name')}`,
      `Business: ${form.get('business')}`,
      `Email for PDF audit: ${form.get('email')}`,
      `Phone: ${form.get('phone')}`,
      `Instagram handle or profile URL: ${form.get('instagram')}`,
      `Business type: ${form.get('type')}`,
      `Location: ${form.get('location') || 'Not provided'}`,
      `Website: ${form.get('website') || 'Not provided'}`,
      '', `About the business and current goals: ${form.get('details')}`,
    ].join('\n');
    setMessage('Your email app is opening. Send the prepared email to complete your audit request.');
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(`Free brand audit — ${form.get('business')}`)}&body=${encodeURIComponent(body)}`;
  };
  return <form className="contact-form audit-form" onSubmit={submit} id="audit-form">
    <div className="form-intro"><span className="eyebrow">Free brand audit / intake</span><h2>Tell us about<br /><em>your brand.</em></h2><p>We’ll use these details to review your current digital presence and send the PDF audit to your email.</p></div>
    <div className="form-grid">
      <label>YOUR NAME *<input name="name" required autoComplete="name" placeholder="Your name" /></label>
      <label>BUSINESS NAME *<input name="business" required autoComplete="organization" placeholder="Your business" /></label>
      <label>EMAIL FOR THE PDF *<input name="email" type="email" required autoComplete="email" placeholder="you@business.com" /></label>
      <label>PHONE *<input name="phone" type="tel" required autoComplete="tel" placeholder="+91" /></label>
      <label className="full">INSTAGRAM HANDLE OR PROFILE URL *<input name="instagram" required placeholder="@yourbusiness or instagram.com/yourbusiness" /></label>
      <label>BUSINESS TYPE *<select name="type" required defaultValue=""><option value="" disabled>Select your business</option><option>Restaurant</option><option>Café</option><option>Hotel / Resort</option><option>Food brand</option><option>Other hospitality</option><option>Other</option></select></label>
      <label>LOCATION<input name="location" placeholder="City, state" /></label>
      <label className="full">WEBSITE<input name="website" type="url" placeholder="https://yourbusiness.com" /></label>
    </div>
    <label className="message-label">ABOUT YOUR BUSINESS AND GOALS *<textarea name="details" rows="5" required placeholder="What do you offer, who are your customers, and what would you like to improve?" /></label>
    <button type="submit" className="button-dark">Prepare my audit request <span aria-hidden="true">↗</span></button>
    <p className="form-helper">This opens a draft in your email app. Your request reaches us when you send that email. We’ll email your PDF audit within one week of receiving it.</p>
    {message && <p className="form-status" role="status">{message} <a href={`mailto:${brand.email}`}>{brand.email}</a></p>}
  </form>;
}
