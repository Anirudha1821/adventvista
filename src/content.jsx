import React, { createContext, useContext, useEffect, useState } from 'react';
import { projects, services } from './data/site';
import { fetchSanityGalleries, mergeSanityGalleries } from './data/sanity';

const fallbackContent = { projects, services };
const SiteContentContext = createContext(fallbackContent);

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(fallbackContent);

  useEffect(() => {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim();
    if (!projectId) return;
    const controller = new AbortController();
    fetchSanityGalleries(projectId, import.meta.env.VITE_SANITY_DATASET?.trim() || 'production', controller.signal)
      .then(documents => setContent(mergeSanityGalleries(documents)))
      .catch(error => {
        if (error.name !== 'AbortError') console.warn('Using local gallery images while Sanity is unavailable:', error);
      });
    return () => controller.abort();
  }, []);

  return <SiteContentContext.Provider value={content}>{children}</SiteContentContext.Provider>;
}

export const useSiteContent = () => useContext(SiteContentContext);
