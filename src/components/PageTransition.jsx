import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export default function PageTransition() {
  const overlayRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isTransitioningRef = useRef(false);

  // Page Enter: Slide upward off the screen (translateY(0%) -> translateY(-100%))
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    window.scrollTo(0, 0);
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.fromTo(
      overlay,
      { y: '0%' },
      {
        y: '-100%',
        duration: 0.6,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set(overlay, { y: '100%' });
          isTransitioningRef.current = false;
        }
      }
    );
  }, [location.pathname]);

  // Page Exit: Intercept internal link clicks and slide in from bottom (translateY(100%) -> translateY(0%))
  useEffect(() => {
    const handleClick = (e) => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Exclude modified clicks (Cmd/Ctrl/Shift/Alt click for new tabs)
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

      // Check if already on destination
      const currentTarget = location.pathname + location.search;
      if (href === currentTarget || href === location.pathname) {
        return;
      }

      // Prevent duplicate triggers
      if (isTransitioningRef.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      isTransitioningRef.current = true;

      const overlay = overlayRef.current;
      if (!overlay) {
        navigate(href);
        return;
      }

      gsap.fromTo(
        overlay,
        { y: '100%' },
        {
          y: '0%',
          duration: 0.6,
          ease: 'power3.inOut',
          onComplete: () => {
            navigate(href);
          }
        }
      );
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
    />
  );
}
