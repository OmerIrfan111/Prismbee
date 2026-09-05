import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function WhyPrismbee() {
  const containerRef = useRef(null);

  const pillars = [
    {
      title: 'End-to-End Integration.',
      desc: 'We connect audience attention (social content) directly to conversion infrastructure (websites, landing pages). No handoff gaps, no lost momentum.'
    },
    {
      title: 'Data-Backed Everything.',
      desc: 'Every creative strategy is continuously refined against real revenue analytics. No guesswork, no vanity metrics — only decisions that move business fundamentals.'
    },
    {
      title: 'Consistent Quality Control.',
      desc: 'All design, copy, and code ships through strict QA checklists. You get polished deliverables and enterprise-grade reliability, every single time.'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = containerRef.current?.querySelectorAll('.reveal-why-card');
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
      className="w-full min-h-screen pt-36 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto bg-white"
    >
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-[#064E3B] font-extrabold text-[clamp(3.5rem,10vw,8.5rem)] tracking-[-0.04em] leading-[0.85] select-none">
          Company.
        </h1>
        <p className="mt-6 text-[#064E3B] font-semibold text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug tracking-tight max-w-[580px]">
          Built for brands that refuse to be generic. We fuse creative conviction with performance execution.
        </p>
      </div>

      {/* 3 Pillars in Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="reveal-why-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0"
          >
            <div className="p-8 sm:p-10 md:p-12 rounded-[24px] md:rounded-[32px] bg-[#F0FDF4] border border-[#A7F3D0]/60 flex flex-col justify-between min-h-[360px] md:min-h-[420px] transition-transform duration-300 hover:scale-[1.01]">
              <div className="flex flex-col gap-6">
                <span className="font-extrabold text-2xl text-[#10B981] tracking-tight">
                  0{index + 1}.
                </span>
                <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#064E3B] tracking-tight leading-tight">
                  {pillar.title}
                </h2>
              </div>
              <p className="text-base sm:text-lg font-medium text-[#1e293b]/80 leading-relaxed tracking-tight pt-6">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Team / Mission Quote Banner (Huge Inc bold typographic banner) */}
      <div className="mt-20 p-8 sm:p-14 md:p-20 rounded-[28px] md:rounded-[36px] bg-[#064E3B] text-white flex flex-col gap-8">
        <span className="text-[#A7F3D0] font-bold text-lg md:text-xl tracking-tight">
          Our Mandate.
        </span>
        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">
          "We treat client brands like our own equity — ruthless about conversion, obsessed with aesthetic perfection, and relentlessly focused on growth."
        </blockquote>
        <div className="pt-4 flex items-center justify-between">
          <span className="font-semibold text-white/70 tracking-tight">
            Prismbee Leadership
          </span>
          <Link to="/contact" className="pill-cta-inverted">
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}
