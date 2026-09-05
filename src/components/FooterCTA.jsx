import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function FooterCTA() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = containerRef.current?.querySelectorAll('.reveal-cta-card');
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
      { threshold: 0.15 }
    );

    cards.forEach((card, idx) => {
      card.style.transitionDelay = `${idx * 100}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Call to action"
      className="w-full px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1: About Us */}
        <div className="reveal-cta-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0">
          <Link
            to="/why-prismbee"
            className="group flex flex-col justify-between p-8 sm:p-12 md:p-16 rounded-[24px] md:rounded-[32px] bg-[#064E3B] text-white min-h-[380px] md:min-h-[460px] transition-transform duration-300 hover:scale-[1.01]"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[#A7F3D0] font-bold text-lg md:text-xl tracking-tight">
                About Prismbee.
              </span>
              <h3 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                See what makes us different.
              </h3>
            </div>

            <div className="pt-8">
              <span className="inline-flex items-center text-sm md:text-base font-semibold text-[#A7F3D0] group-hover:underline tracking-tight">
                /why-prismbee
              </span>
            </div>
          </Link>
        </div>

        {/* Card 2: Contact */}
        <div className="reveal-cta-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0">
          <Link
            to="/contact"
            className="group flex flex-col justify-between p-8 sm:p-12 md:p-16 rounded-[24px] md:rounded-[32px] bg-[#F0FDF4] text-[#064E3B] border border-[#A7F3D0]/60 min-h-[380px] md:min-h-[460px] transition-transform duration-300 hover:scale-[1.01]"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[#064E3B]/70 font-bold text-lg md:text-xl tracking-tight">
                Contact.
              </span>
              <h3 className="text-[#064E3B] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                Ready to talk?
              </h3>
            </div>

            <div className="pt-8">
              <span className="inline-flex items-center text-sm md:text-base font-semibold text-[#064E3B] group-hover:underline tracking-tight">
                /contact
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
