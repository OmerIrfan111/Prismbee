import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable SEO component that dynamically updates document title,
 * meta description, canonical link, Open Graph, and Twitter tags
 * for client-side navigation.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://www.prismbee.site/og-image.png',
  ogType = 'website'
}) {
  const location = useLocation();
  const currentCanonical =
    canonical ||
    `https://www.prismbee.site${location.pathname === '/' ? '/' : location.pathname}`;

  useEffect(() => {
    // 1. Page Title
    if (title) {
      document.title = title;
    }

    // Helper: update or create <meta> tag
    const setMeta = (attrName, attrVal, contentVal) => {
      if (!contentVal) return;
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    // 2. Meta description
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }

    // 3. Titles for Social Cards
    if (title) {
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }

    // 4. URL & Type
    setMeta('property', 'og:url', currentCanonical);
    setMeta('property', 'og:type', ogType);
    setMeta('name', 'twitter:url', currentCanonical);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentCanonical);

    // 6. Social Images
    if (ogImage) {
      setMeta('property', 'og:image', ogImage);
      setMeta('name', 'twitter:image', ogImage);
    }
  }, [title, description, currentCanonical, ogImage, ogType]);

  return null;
}
