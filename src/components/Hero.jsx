import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero({ 
  headline = "Scaled.", 
  subtitle = "Work that reimagines experiences, drives outcomes and leaves things better than we found them." 
}) {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const chars = headlineRef.current?.querySelectorAll('.hero-char');

    if (prefersReducedMotion) {
      if (chars) {
        chars.forEach((char) => {
          char.style.transform = 'translateY(0%)';
        });
      }
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = '1';
        subtitleRef.current.style.transform = 'translateY(0px)';
      }
      return;
    }

    const ctx = gsap.context(() => {
      // Staggered clip-mask character reveal (0.8s - 1.2s ease-out)
      gsap.fromTo(
        chars,
        {
          y: '115%',
          opacity: 1,
        },
        {
          y: '0%',
          duration: 1.0,
          stagger: 0.04,
          ease: 'power3.out',
          delay: 0.1,
        }
      );

      // Subtitle reveal
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.45,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [headline]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end pt-36 pb-16 md:pb-24 px-6 md:px-12 max-w-[1600px] mx-auto bg-white"
    >
      <div className="w-full">
        {/* Massive Display Scale Headline (clamp(80px, 14vw, 200px)), tight letter-spacing, clip-masked */}
        <h1
          ref={headlineRef}
          aria-label={headline}
          className="text-[#064E3B] font-extrabold tracking-[-0.045em] leading-[0.82] select-none text-[clamp(4.2rem,14vw,12.5rem)] m-0 p-0"
        >
          {headline.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden align-bottom"
              style={{ paddingBottom: '0.04em' }}
            >
              <span className="hero-char inline-block will-change-transform">
                {char === ' ' ? '\u00A0' : char}
              </span>
            </span>
          ))}
        </h1>

        {/* Subtitle directly below, semi-bold, max ~55 chars */}
        <p
          ref={subtitleRef}
          className="mt-6 md:mt-10 text-[#064E3B] font-semibold text-[clamp(1.15rem,2.4vw,1.75rem)] leading-[1.25] tracking-tight max-w-[620px]"
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
