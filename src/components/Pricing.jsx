import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const containerRef = useRef(null);

  const packages = [
    {
      name: 'Starter.',
      price: 'Custom Scope',
      desc: 'Foundational brand identity and single-channel organic engine.',
      featured: false,
      features: [
        'Brand identity setup & guidelines',
        '1 platform organic social management',
        'High-converting 5-page web platform',
        'Monthly performance analytics report'
      ]
    },
    {
      name: 'Growth.',
      badge: 'Most Popular',
      price: 'Custom Scope',
      desc: 'Complete multi-platform growth engine and conversion infrastructure.',
      featured: true,
      features: [
        'Full brand identity design system',
        '3-platform organic social management',
        'Web platform + dedicated landing pages',
        'Reels & video content production',
        'Daily community management & engagement',
        'Comprehensive monthly growth report'
      ]
    },
    {
      name: 'Authority.',
      price: 'Custom Scope',
      desc: 'Full-service enterprise scale for industry category leaders.',
      featured: false,
      features: [
        'Premium enterprise brand system',
        'Full multi-platform social management',
        'Custom web application / platform',
        'Studio video production & creative direction',
        'Dedicated senior account manager',
        'Bi-weekly strategic executive sessions'
      ]
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = containerRef.current?.querySelectorAll('.reveal-price-card');
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
          Pricing.
        </h1>
        <p className="mt-6 text-[#064E3B] font-semibold text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug tracking-tight max-w-[580px]">
          Flexible packages, clear results. Every engagement is scoped to your brand's exact growth stage.
        </p>
      </div>

      {/* Pricing Cards Grid (Huge Inc layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {packages.map((pkg, index) => {
          const isFeatured = pkg.featured;
          return (
            <div
              key={index}
              className="reveal-price-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 flex"
            >
              <div
                className={`w-full p-8 sm:p-10 md:p-12 rounded-[28px] md:rounded-[36px] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01] ${
                  isFeatured
                    ? 'bg-[#064E3B] text-white'
                    : 'bg-[#F0FDF4] text-[#064E3B] border border-[#A7F3D0]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight">
                      {pkg.name}
                    </h2>
                    {pkg.badge && (
                      <span className="text-xs font-bold tracking-tight px-3 py-1 rounded-full bg-[#10B981] text-white">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <p
                    className={`font-semibold text-lg tracking-tight mb-4 ${
                      isFeatured ? 'text-[#A7F3D0]' : 'text-[#10B981]'
                    }`}
                  >
                    {pkg.price}
                  </p>

                  <p
                    className={`text-sm sm:text-base font-medium tracking-tight mb-8 ${
                      isFeatured ? 'text-white/80' : 'text-[#064E3B]/80'
                    }`}
                  >
                    {pkg.desc}
                  </p>

                  <div
                    className={`h-px w-full mb-8 ${
                      isFeatured ? 'bg-white/15' : 'bg-[#064E3B]/10'
                    }`}
                  />

                  <ul className="flex flex-col gap-4 mb-10">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className={`font-bold select-none ${
                            isFeatured ? 'text-[#A7F3D0]' : 'text-[#10B981]'
                          }`}
                        >
                          —
                        </span>
                        <span
                          className={`text-sm sm:text-base font-medium tracking-tight ${
                            isFeatured ? 'text-white/90' : 'text-[#1e293b]'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-4 text-base ${
                      isFeatured ? 'pill-cta-inverted' : 'pill-cta'
                    }`}
                  >
                    Get a proposal
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
