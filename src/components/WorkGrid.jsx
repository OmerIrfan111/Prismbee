import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function WorkGrid({ limit = 6, showHeader = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // IntersectionObserver scroll reveal for cards with 80ms stagger
    const cards = containerRef.current?.querySelectorAll('.reveal-card');
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    cards.forEach((card, idx) => {
      card.style.transitionDelay = `${idx * 80}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const displayedStudies = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section
      ref={containerRef}
      aria-label="Case studies"
      className="w-full px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto py-12 md:py-16"
    >
      {showHeader && (
        <div className="mb-12">
          <h2 className="text-[#064E3B] text-4xl md:text-6xl font-extrabold tracking-tight">
            Work.
          </h2>
        </div>
      )}

      <div className="flex flex-col gap-6 md:gap-10">
        {displayedStudies.map((study, index) => (
          <div
            key={study.id}
            className="reveal-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0"
          >
            <Link
              to="/work"
              className="group block w-full outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-3xl"
            >
              <article className="relative w-full h-[65vh] sm:h-[72vh] md:h-[78svh] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col justify-end p-6 sm:p-10 md:p-14 bg-[#064E3B]">
                {/* Background Image with subtle zoom on hover */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src={study.image}
                    alt={study.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                  />
                  {/* Subtle dark gradient overlay so text is razor sharp */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                </div>

                {/* Card Content Layout Grid (Huge Inc style) */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-end">
                  {/* Title with Duplicate Scroll Effect */}
                  <div className="md:col-span-6 lg:col-span-5">
                    <div className="duplicate-title-wrap h-[1.18em] overflow-hidden text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.1]">
                      <div className="duplicate-title-inner transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2">
                        <span className="block">{study.title}</span>
                        <span className="block text-[#A7F3D0]">{study.title}</span>
                      </div>
                    </div>
                  </div>

                  {/* Descriptor */}
                  <div className="md:col-span-6 lg:col-span-7">
                    <p className="text-white/80 font-medium text-base sm:text-lg md:text-xl lg:text-[22px] leading-snug tracking-tight">
                      {study.descriptor}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
