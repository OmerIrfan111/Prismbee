import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const containerRef = useRef(null);

  const services = [
    {
      num: '01',
      title: 'Organic Social Growth.',
      body: 'Full multi-platform management across Instagram, TikTok, LinkedIn, and more — with Reels, content calendars, community engagement, and monthly analytics.',
      tags: ['Instagram', 'TikTok', 'LinkedIn', 'Reels Production', 'Analytics'],
      color: 'bg-[#F0FDF4]'
    },
    {
      num: '02',
      title: 'Web Engineering & Design.',
      body: 'Bespoke, high-speed websites and landing pages built on Framer, Webflow, or Next.js — engineered to convert incoming traffic into qualified leads and paying clients.',
      tags: ['Web Platforms', 'Landing Pages', 'UX/UI Design', 'Conversion Optimization'],
      color: 'bg-[#064E3B] text-white'
    },
    {
      num: '03',
      title: 'Brand Identity & Systems.',
      body: 'Logo suites, color palettes, typography systems, and comprehensive brand guidelines that establish authority and separate you from every competitor.',
      tags: ['Brand Identity', 'Typography', 'Visual Guidelines', 'Design Systems'],
      color: 'bg-[#F0FDF4]'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = containerRef.current?.querySelectorAll('.reveal-service-card');
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
      { threshold: 0.12 }
    );

    cards.forEach((card, idx) => {
      card.style.transitionDelay = `${idx * 80}ms`;
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
          Solutions.
        </h1>
        <p className="mt-6 text-[#064E3B] font-semibold text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug tracking-tight max-w-[580px]">
          One partner. Every channel. Total growth system.
        </p>
      </div>

      {/* Vertical Large Cards Stack (Huge Inc layout) */}
      <div className="flex flex-col gap-8 md:gap-12">
        {services.map((service, index) => {
          const isDark = service.color.includes('text-white');
          return (
            <div
              key={index}
              className="reveal-service-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0"
            >
              <div
                className={`p-8 sm:p-12 md:p-16 rounded-[28px] md:rounded-[36px] ${service.color} flex flex-col justify-between min-h-[420px] transition-transform duration-300 hover:scale-[1.01]`}
              >
                <div className="flex flex-col gap-6 max-w-4xl">
                  <span
                    className={`font-extrabold text-xl tracking-tight ${
                      isDark ? 'text-[#A7F3D0]' : 'text-[#064E3B]/60'
                    }`}
                  >
                    {service.num}.
                  </span>
                  <h2
                    className={`font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] ${
                      isDark ? 'text-white' : 'text-[#064E3B]'
                    }`}
                  >
                    {service.title}
                  </h2>
                  <p
                    className={`font-medium text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight ${
                      isDark ? 'text-white/80' : 'text-[#064E3B]/80'
                    }`}
                  >
                    {service.body}
                  </p>
                </div>

                <div className="pt-10 flex flex-wrap gap-2.5 items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full tracking-tight ${
                          isDark
                            ? 'bg-white/10 text-white'
                            : 'bg-[#064E3B]/5 text-[#064E3B]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={isDark ? 'pill-cta-inverted mt-4 sm:mt-0' : 'pill-cta mt-4 sm:mt-0'}
                  >
                    Start with this
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
