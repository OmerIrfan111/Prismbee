import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock } from 'lucide-react';
import SEO from './SEO';

/**
 * Package prices live in this one array — edit prices here only.
 * firstMonthPrice is the launch offer: 40% off the first month for
 * new clients (Starter $490 -> $294, Growth $990 -> $594,
 * Authority $1,990 -> $1,194).
 */
const PACKAGES = [
  {
    name: 'Starter.',
    monthlyPrice: 490,
    firstMonthPrice: 294,
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
    monthlyPrice: 990,
    firstMonthPrice: 594,
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
    monthlyPrice: 1990,
    firstMonthPrice: 1194,
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

const TURNAROUND_LINE =
  'Video edits in 1–2 business days · standard website builds in 3–4 business days';

const formatPrice = (value) => `$${value.toLocaleString('en-US')}`;

export default function Pricing() {
  const containerRef = useRef(null);

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
      className="relative w-full min-h-screen pt-36 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto bg-white overflow-hidden"
    >
      {/* Pale green backdrop accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 right-[-12%] w-[640px] h-[640px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(16,185,129,0.14) 0%, rgba(16,185,129,0) 65%)'
          }}
        />
        <div
          className="absolute bottom-[-25%] left-[-10%] w-[560px] h-[560px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(167,243,208,0.35) 0%, rgba(167,243,208,0) 68%)'
          }}
        />
      </div>

      <SEO
        title="Digital Growth Packages & Pricing | Prismbee"
        description="Prismbee packages: Starter $490/month, Growth $990/month, Authority $1,990/month, with 40% off your first month. Video edits in 1–2 business days, standard website builds in 3–4 business days."
        canonical="https://www.prismbee.site/packages"
      />

      <div className="relative">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#10B981] mb-3 block">
            Investment & Scopes
          </span>
          <h1 className="text-[#064E3B] font-extrabold text-[clamp(3.5rem,10vw,8.5rem)] tracking-[-0.04em] leading-[0.85] select-none">
            Pricing.
          </h1>
          <p className="mt-6 text-[#064E3B] font-semibold text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug tracking-tight max-w-[580px]">
            Flexible packages, clear results. Every engagement is scoped to your brand's exact growth stage.
          </p>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#064E3B] to-[#10B981] text-white text-sm font-bold tracking-tight px-5 py-2.5 shadow-[0_12px_28px_-10px_rgba(16,185,129,0.6)]">
            Launch offer: 40% off your first month on every package
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {PACKAGES.map((pkg, index) => {
            const isFeatured = pkg.featured;
            return (
              <div
                key={index}
                className="reveal-price-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 flex"
              >
                <div
                  className={`w-full p-8 sm:p-10 md:p-12 rounded-[28px] md:rounded-[36px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                    isFeatured
                      ? 'bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#0A7A5C] text-white ring-4 ring-[#10B981]/25 shadow-[0_36px_80px_-24px_rgba(6,78,59,0.55)] lg:scale-[1.03]'
                      : 'bg-white text-[#064E3B] border border-[#A7F3D0]/80 card-soft-shadow hover:ring-2 hover:ring-[#10B981]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight">
                        {pkg.name}
                      </h2>
                      {pkg.badge && (
                        <span className="text-xs font-bold tracking-tight px-3 py-1.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#34D399] text-[#064E3B] shadow-[0_8px_20px_-6px_rgba(16,185,129,0.7)]">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-sm sm:text-base font-medium tracking-tight mb-8 ${
                        isFeatured ? 'text-white/80' : 'text-[#064E3B]/80'
                      }`}
                    >
                      {pkg.desc}
                    </p>

                    {/* Monthly price */}
                    <p className="flex items-baseline gap-1.5">
                      <span className="font-extrabold text-5xl sm:text-6xl tracking-tight">
                        {formatPrice(pkg.monthlyPrice)}
                      </span>
                      <span
                        className={`text-base font-semibold ${
                          isFeatured ? 'text-[#A7F3D0]' : 'text-[#064E3B]/60'
                        }`}
                      >
                        /month
                      </span>
                    </p>

                    {/* First month launch offer */}
                    <div
                      className={`mt-6 rounded-2xl p-5 ${
                        isFeatured
                          ? 'bg-white/10 border border-white/15'
                          : 'bg-[#F0FDF4] border border-[#A7F3D0]/70'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span
                          className={`text-xs font-bold uppercase tracking-[0.15em] ${
                            isFeatured ? 'text-[#A7F3D0]' : 'text-[#064E3B]/70'
                          }`}
                        >
                          First month
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full bg-gradient-to-r from-[#064E3B] to-[#10B981] text-white">
                          40% off first month
                        </span>
                      </div>
                      <p className="flex items-baseline gap-2.5">
                        <span className="font-extrabold text-3xl sm:text-4xl tracking-tight">
                          {formatPrice(pkg.firstMonthPrice)}
                        </span>
                        <span
                          className={`text-lg font-semibold line-through ${
                            isFeatured ? 'text-white/50' : 'text-[#064E3B]/40'
                          }`}
                        >
                          {formatPrice(pkg.monthlyPrice)}
                        </span>
                      </p>
                    </div>

                    {/* Turnaround */}
                    <p
                      className={`mt-6 flex items-start gap-2 text-sm font-semibold tracking-tight ${
                        isFeatured ? 'text-[#A7F3D0]' : 'text-[#064E3B]/75'
                      }`}
                    >
                      <Clock className="w-4.5 h-4.5 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>Turnaround: {TURNAROUND_LINE}</span>
                    </p>

                    <div
                      className={`h-px w-full my-8 ${
                        isFeatured ? 'bg-white/15' : 'bg-[#064E3B]/10'
                      }`}
                    />

                    <ul className="flex flex-col gap-4 mb-10">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 shrink-0 w-5.5 h-5.5 rounded-full flex items-center justify-center ${
                              isFeatured
                                ? 'bg-[#10B981] text-white'
                                : 'bg-[#F0FDF4] text-[#059669] border border-[#A7F3D0]'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" strokeWidth={3} aria-hidden="true" />
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

                  <div className="pt-2">
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

        <p className="mt-10 text-center text-sm font-medium tracking-tight text-[#064E3B]/60">
          First month discount applies to new clients. Prices in USD. Custom add-ons available on request.
        </p>
      </div>
    </section>
  );
}
