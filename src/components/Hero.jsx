import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero({
  headline = "Scaled.",
  subtitle = "Work that reimagines experiences, drives outcomes and leaves things better than we found them.",
  eyebrow = null,
  ariaLabel = null,
  trustStrip = false
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

  const lastWordStart = headline.lastIndexOf(' ') + 1;

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end pt-36 pb-16 md:pb-24 px-6 md:px-12 max-w-[1600px] mx-auto bg-white overflow-hidden"
    >
      {/* Layered emerald gradient backdrop (brand colours) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-none"
          style={{
            background:
              'radial-gradient(circle, rgba(16,185,129,0.22) 0%, rgba(16,185,129,0) 65%)'
          }}
        />
        <div
          className="absolute bottom-[-25%] left-[-8%] w-[540px] h-[540px] rounded-none"
          style={{
            background:
              'radial-gradient(circle, rgba(167,243,208,0.4) 0%, rgba(167,243,208,0) 68%)'
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-[440px] h-[440px] rounded-none"
          style={{
            background:
              'radial-gradient(circle, rgba(240,253,244,0.95) 0%, rgba(240,253,244,0) 70%)'
          }}
        />
      </div>

      <div className="w-full relative z-10">
        {/* Massive Display Scale Headline (clamp(80px, 14vw, 200px)), tight letter-spacing, clip-masked */}
        <h1
          ref={headlineRef}
          aria-label={ariaLabel || (eyebrow ? `${eyebrow} - ${headline}` : headline)}
          className="text-[#064E3B] font-extrabold tracking-[-0.045em] leading-[0.82] select-none text-[clamp(4.2rem,14vw,12.5rem)] m-0 p-0"
        >
          {eyebrow && (
            <span className="block text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#10B981] mb-3 md:mb-5 select-text">
              {eyebrow}
            </span>
          )}
          {headline.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden align-bottom"
              style={{ paddingBottom: '0.04em' }}
            >
              <span
                className={`hero-char inline-block will-change-transform ${
                  index >= lastWordStart
                    ? 'text-[#10B981]'
                    : ''
                }`}
              >
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

        {/* Trust strip: facts already published on the site */}
        {trustStrip && (
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
            {[
              'Video edits in 1–2 business days',
              'Websites in 3–4 business days',
              '40% off your first month',
              'Video · Social · Web — one team'
            ].map((fact) => (
              <span
                key={fact}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-[#064E3B]/75"
              >
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-none bg-[#10B981]" />
                {fact}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
