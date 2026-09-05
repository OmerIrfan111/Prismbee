import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function WhyPrismbee() {
  const containerRef = useRef(null);

  const pillars = [
    {
      num: '01',
      title: 'The Prism & The Bee.',
      tag: 'Brand Philosophy',
      desc: 'A prism refracts single beams of attention into a full spectrum of growth channels. The honeybee executes with disciplined coordination, relentless work ethic, and speed. We unite multi-faceted strategy with rapid, flawless execution.'
    },
    {
      num: '02',
      title: 'Zero Handoff Friction.',
      tag: 'Integrated Stack',
      desc: 'Traditional agencies outsource your web engineering or hire disconnected freelancers for video editing. At Prismbee, your social strategists, full-stack developers, and video editors sit at the same table, working in perfect unison.'
    },
    {
      num: '03',
      title: 'Attention to Revenue.',
      tag: 'Conversion First',
      desc: 'Virality is worthless if it does not convert. We directly tie organic reach and high-retention video views to custom-engineered landing pages, automated email flows, and optimized storefronts built to monetize traffic.'
    }
  ];

  const disciplines = [
    {
      title: 'Organic Social Marketing.',
      tag: 'Reach & Authority',
      desc: 'Algorithm-native growth strategies across TikTok, Instagram, LinkedIn, and YouTube Shorts. We identify cultural trends before competitors and produce content calendars that dominate your industry niche.'
    },
    {
      title: 'Full-Stack Web Engineering.',
      tag: 'Performance Infrastructure',
      desc: 'Sub-second load times, headless commerce, high-converting lead funnels, and custom interactive web experiences built with React, Next.js, and modern styling architectures.'
    },
    {
      title: 'Cinematic Video Editing.',
      tag: 'Retention & Creative',
      desc: 'High-retention pacing, 3D motion graphics, sound design, and narrative hooks designed specifically for the first 3 seconds of viewer attention to maximize watch time and shareability.'
    },
    {
      title: 'Brand Systems & Visuals.',
      tag: 'Long-Term Equity',
      desc: 'Comprehensive visual design systems, typographic hierarchies, color palettes, and brand guidelines that elevate your company from another vendor into a recognized category leader.'
    }
  ];

  const values = [
    {
      title: 'Attention is Currency.',
      desc: 'If people scroll past your creative, your product never gets a chance. We obsess over the hook, the first frame, and the headline.'
    },
    {
      title: 'Code is the Multiplier.',
      desc: 'A high-converting website can multiply ad and organic return tenfold. We write clean, resilient code engineered for speed and conversion.'
    },
    {
      title: 'Speed Wins Markets.',
      desc: 'Digital platforms move at the speed of culture. Our agile 48-hour production turnaround ensures your brand leads rather than follows.'
    },
    {
      title: 'Zero Vanity Metrics.',
      desc: 'We do not celebrate impressions that do not convert. Every report tracks qualified pipeline, conversion rates, and revenue impact.'
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
      { threshold: 0.12 }
    );

    cards.forEach((card, idx) => {
      card.style.transitionDelay = `${(idx % 4) * 80}ms`;
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
        <p className="mt-6 text-[#064E3B] font-semibold text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug tracking-tight max-w-[640px]">
          Prismbee is a modern growth agency combining full-stack web engineering, cinematic video editing, and organic social dominance.
        </p>
      </div>

      {/* Core Agency DNA (3 Pillars) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="reveal-why-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0"
          >
            <div className="p-8 sm:p-10 md:p-12 rounded-[28px] md:rounded-[36px] bg-[#F0FDF4] border border-[#A7F3D0]/60 flex flex-col justify-between min-h-[380px] md:min-h-[440px] transition-transform duration-300 hover:scale-[1.01]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-2xl text-[#10B981] tracking-tight">
                    {pillar.num}.
                  </span>
                  <span className="text-xs font-bold text-[#064E3B]/60 tracking-tight bg-white px-3 py-1 rounded-full border border-[#A7F3D0]/40">
                    {pillar.tag}
                  </span>
                </div>
                <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#064E3B] tracking-tight leading-tight mt-2">
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

      {/* Disciplines Section */}
      <div className="mb-24">
        <div className="mb-12 border-t border-[#064E3B]/10 pt-12">
          <span className="text-sm font-bold text-[#10B981] tracking-tight block mb-2">
            What We Master.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#064E3B] tracking-tight">
            Our Three Integrated Engines.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {disciplines.map((item, index) => (
            <div
              key={index}
              className="reveal-why-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0"
            >
              <div className="p-8 sm:p-10 rounded-[24px] md:rounded-[32px] bg-white border border-[#064E3B]/15 hover:border-[#10B981] transition-colors flex flex-col justify-between min-h-[260px]">
                <div>
                  <span className="text-xs font-semibold text-[#10B981] uppercase tracking-wider block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#064E3B] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-[#1e293b]/80 leading-relaxed tracking-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operating Values */}
      <div className="mb-24">
        <div className="mb-12 border-t border-[#064E3B]/10 pt-12">
          <span className="text-sm font-bold text-[#10B981] tracking-tight block mb-2">
            Operating Principles.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#064E3B] tracking-tight">
            How Prismbee Operates.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="reveal-why-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0"
            >
              <div className="p-6 sm:p-8 rounded-[20px] bg-[#F0FDF4] border border-[#A7F3D0]/40 flex flex-col gap-3 h-full">
                <span className="text-sm font-bold text-[#10B981] tracking-tight">
                  0{idx + 1}.
                </span>
                <h4 className="text-xl font-bold text-[#064E3B] tracking-tight">
                  {val.title}
                </h4>
                <p className="text-sm sm:text-base font-medium text-[#1e293b]/75 leading-relaxed tracking-tight">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Mandate Banner */}
      <div className="p-8 sm:p-14 md:p-20 rounded-[28px] md:rounded-[36px] bg-[#064E3B] text-white flex flex-col gap-8">
        <span className="text-[#A7F3D0] font-bold text-lg md:text-xl tracking-tight">
          Our Mandate.
        </span>
        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">
          "We treat client brands like our own equity — ruthless about conversion, obsessed with aesthetic perfection, and relentlessly focused on growth."
        </blockquote>
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-semibold text-white/70 tracking-tight text-base sm:text-lg">
            Prismbee Leadership · Web, Video & Growth
          </span>
          <Link to="/contact" className="pill-cta-inverted">
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}
