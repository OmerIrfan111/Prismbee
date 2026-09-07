import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const ROUTE_LABELS = {
  '/': 'Home.',
  '/work': 'Work.',
  '/services': 'Solutions.',
  '/solutions': 'Solutions.',
  '/how-it-works': 'Approach.',
  '/approach': 'Approach.',
  '/why-prismbee': 'Company.',
  '/company': 'Company.',
  '/packages': 'Pricing.',
  '/pricing': 'Pricing.',
  '/contact': 'Contact.'
};

function getLabelForDestination(href, anchorText) {
  if (!href) return '';
  const cleanPath = href.split('?')[0].split('#')[0];
  if (ROUTE_LABELS[cleanPath]) {
    return ROUTE_LABELS[cleanPath];
  }
  if (anchorText && anchorText.trim()) {
    const text = anchorText.trim();
    if (text.toLowerCase().includes("let's talk")) return 'Contact.';
    return text.endsWith('.') ? text : `${text}.`;
  }
  return '';
}

export default function PageTransition() {
  const overlayRef = useRef(null);
  const labelRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isTransitioningRef = useRef(false);
  // Only play transition when user deliberately navigates; NEVER on initial landing page load
  const hasNavigatedRef = useRef(false);

  // Page Enter: Overlay collapses from circle(150%) to circle(0%) only after a navigation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    // Never show or animate on initial landing page load
    if (!hasNavigatedRef.current) {
      return;
    }

    window.scrollTo(0, 0);
    const overlay = overlayRef.current;
    const label = labelRef.current;
    if (!overlay) return;

    // Slower, majestic radial iris collapse (0.95s)
    gsap.fromTo(
      overlay,
      { clipPath: 'circle(150% at 50% 50%)' },
      {
        clipPath: 'circle(0% at 50% 50%)',
        duration: 0.95,
        ease: 'power3.inOut',
        onComplete: () => {
          hasNavigatedRef.current = false;
          isTransitioningRef.current = false;
          if (label) {
            label.textContent = '';
            gsap.set(label, { opacity: 0 });
          }
        }
      }
    );

    // Fade label out smoothly as page is revealed
    if (label) {
      gsap.to(label, {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.in'
      });
    }
  }, [location.pathname]);

  // Page Exit: Intercept internal link clicks, display centered label, and radial expand
  useEffect(() => {
    const handleClick = (e) => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Exclude modified clicks (Cmd, Ctrl, Shift, Alt)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Exclude external links, new tabs, hash anchors, mailto, tel
      if (
        anchor.target === '_blank' ||
        anchor.hasAttribute('download') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) {
        return;
      }

      // Exclude cross-origin URLs
      if (anchor.origin && anchor.origin !== window.location.origin) {
        return;
      }

      // If already on target URL, ignore
      const currentTarget = location.pathname + location.search;
      if (href === currentTarget || href === location.pathname) {
        return;
      }

      // Prevent duplicate clicks while in transition
      if (isTransitioningRef.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.preventDefault();
      // Keep event propagating so React synthetic onClick handlers (like closing mobile menus) still fire
      isTransitioningRef.current = true;
      hasNavigatedRef.current = true;

      // Set label text
      const pageLabel = getLabelForDestination(href, anchor.textContent);
      const label = labelRef.current;
      const overlay = overlayRef.current;

      if (label) {
        label.textContent = pageLabel;
        gsap.set(label, { opacity: 0 });
      }

      if (!overlay) {
        navigate(href);
        return;
      }

      // Slower radial expand from center circle(0%) -> circle(150%) over 0.95s
      gsap.fromTo(
        overlay,
        { clipPath: 'circle(0% at 50% 50%)' },
        {
          clipPath: 'circle(150% at 50% 50%)',
          duration: 0.95,
          ease: 'power3.inOut',
          onComplete: () => {
            navigate(href);
          }
        }
      );

      // Fade label in once the black curtain expands over the screen
      if (label && pageLabel) {
        gsap.to(label, {
          opacity: 1,
          duration: 0.3,
          delay: 0.6,
          ease: 'power2.out'
        });
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, [location.pathname, location.search, navigate]);

  return (
    <div
      id="page-transition-overlay"
      ref={overlayRef}
      aria-hidden="true"
    >
      <div id="page-transition-label" ref={labelRef} />
    </div>
  );
}
