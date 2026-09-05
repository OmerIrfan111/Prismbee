import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const containerRef = useRef(null);

  const phases = [
    {
      num: '01',
      label: 'Discovery & Onboarding.',
      desc: 'Brand questionnaire, competitor analysis, audience persona mapping, and technical access setup.'
    },
    {
      num: '02',
      label: 'Design & Strategy.',
      desc: 'Moodboards, logo suite creation, site wireframes, and a comprehensive 30-day multi-channel content calendar.'
    },
    {
      num: '03',
      label: 'Build & Launch.',
      desc: 'High-speed web engineering, responsive QA, Reels & media production, strategic copy, and publishing.'
    },
    {
      num: '04',
      label: 'Management & Scaling.',
      desc: 'Continuous engagement, publishing rhythm, platform optimization, and rigorous monthly performance reporting.'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const items = containerRef.current?.querySelectorAll('.reveal-approach-item');
    if (!items) return;

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

    items.forEach((item, idx) => {
      item.style.transitionDelay = `${idx * 100}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen pt-36 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto bg-white"
    >
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-[#064E3B] font-extrabold text-[clamp(3.5rem,10vw,8.5rem)] tracking-[-0.04em] leading-[0.85] select-none">
          Approach.
        </h1>
        <p className="mt-6 text-[#064E3B] font-semibold text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug tracking-tight max-w-[580px]">
          From strategy to scale. A disciplined four-phase delivery methodology.
        </p>
      </div>

      {/* Sequential Phase Grid (Huge Inc style) */}
      <div className="flex flex-col divide-y divide-[#064E3B]/15">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="reveal-approach-item py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0"
          >
            <div className="md:col-span-2">
              <span className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10B981] tracking-tight">
                {phase.num}
              </span>
            </div>

            <div className="md:col-span-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#064E3B] tracking-tight">
                {phase.label}
              </h2>
            </div>

            <div className="md:col-span-5">
              <p className="text-lg md:text-xl font-medium text-[#1e293b]/80 leading-relaxed tracking-tight">
                {phase.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 pt-12 border-t border-[#064E3B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="font-bold text-2xl md:text-3xl text-[#064E3B] tracking-tight">
          Ready to put our approach to work?
        </p>
        <Link to="/contact" className="pill-cta">
          Let's talk
        </Link>
      </div>
    </section>
  );
}
