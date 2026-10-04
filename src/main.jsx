import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Footer, Navbar } from './components';
import { SiteContentProvider } from './content';
import { About, Capabilities, Careers, Contact, FAQ, FreeAudit, Home, Legal, NotFound, ProjectDetail, Services, Work } from './pages';
import './styles.css';

// Public placeholder photos can be unavailable in restricted networks.
// Keep the image frames intentional until approved local project media arrives.
document.addEventListener('error', event => {
  if (event.target instanceof HTMLImageElement) {
    event.target.style.display = 'none';
    event.target.parentElement?.classList.add('media-unavailable');
  }
}, true);

const titles = {
  '/': 'AdventVista — Make them feel something', '/about': 'About — AdventVista',
  '/services': 'Services — AdventVista', '/capabilities': 'How We Help — AdventVista',
  '/work': 'Our Work — AdventVista', '/audit': 'Free Brand Audit — AdventVista',
  '/careers': 'Careers — AdventVista', '/faq': 'FAQ — AdventVista',
  '/contact': 'Contact — AdventVista', '/privacy': 'Privacy — AdventVista',
  '/terms': 'Terms — AdventVista',
};

function currentPath() {
  const legacyRoutes = { '/pricing': '/capabilities', '/rebranding': '/services#branding' };
  const redirect = legacyRoutes[window.location.pathname];
  if (redirect) window.history.replaceState({}, '', redirect);
  return window.location.pathname;
}

function App() {
  const [path, setPath] = useState(currentPath);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try { window.localStorage.setItem('adventvista-theme', nextTheme); } catch { /* Storage may be unavailable. */ }
  };
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#141513' : '#f5f4f0');
  }, [theme]);
  useEffect(() => {
    const change = () => setPath(currentPath());
    window.addEventListener('popstate', change);
    window.addEventListener('app:navigate', change);
    return () => { window.removeEventListener('popstate', change); window.removeEventListener('app:navigate', change); };
  }, []);
  useEffect(() => {
    document.title = titles[path] || (path.startsWith('/work/') ? 'Case Study — AdventVista' : 'AdventVista');
    const timer = window.setTimeout(() => {
      if (window.location.hash) document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [path]);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll('.section-heading, .project-card, .campaign-card, .why-point, .value, .pricing-card');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });
    elements.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
    return () => observer.disconnect();
  }, [path]);

  let page;
  if (path === '/') page = <Home />;
  else if (path === '/about') page = <About />;
  else if (path === '/services') page = <Services />;
  else if (path === '/work') page = <Work />;
  else if (path.startsWith('/work/')) page = <ProjectDetail id={path.split('/')[2]} />;
  else if (path === '/capabilities') page = <Capabilities />;
  else if (path === '/audit') page = <FreeAudit />;
  else if (path === '/careers') page = <Careers />;
  else if (path === '/faq') page = <FAQ />;
  else if (path === '/contact') page = <Contact />;
  else if (path === '/privacy') page = <Legal kind="privacy" />;
  else if (path === '/terms') page = <Legal kind="terms" />;
  else page = <NotFound />;

  return <><a className="skip-link" href="#main">Skip to content</a><Navbar path={path} theme={theme} onToggleTheme={toggleTheme} /><main id="main" key={path} className="page-enter">{page}</main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<SiteContentProvider><App /></SiteContentProvider>);
