import { Link } from 'react-router-dom';

export default function HomeServices() {
  const services = [
    {
      num: '01',
      title: 'Viral Organic Social Media Content',
      category: 'Social Media Content Agency',
      description:
        'End-to-end multi-platform organic management across TikTok, Instagram, and LinkedIn. We develop viral content series, trend-reactive reels, and community strategies that turn casual scrollers into loyal brand advocates.',
      tags: ['TikTok & Reels', 'Viral Content Strategy', 'Community Scaling'],
      link: '/services',
      linkText: 'Explore social content',
      color: 'bg-[#F0FDF4] text-[#064E3B] border border-[#A7F3D0]/60'
    },
    {
      num: '02',
      title: 'Cinematic Video Production',
      category: 'Video Production Agency',
      description:
        'High-retention commercial video editing, 3D motion design, and visual storytelling. Engineered for the critical first 3 seconds of viewer attention to maximize watch time, algorithm distribution, and conversions.',
      tags: ['3D Motion Graphics', 'Commercial Video', 'Retention Editing'],
      link: '/work',
      linkText: 'View video portfolio',
      color: 'bg-[#064E3B] text-white border border-[#064E3B]'
    },
    {
      num: '03',
      title: 'Conversion-Focused Web Design',
      category: 'Web Engineering & UX',
      description:
        'Bespoke, lightning-fast web applications and high-converting landing pages built on modern architectures. Engineered with sub-second speeds to convert incoming organic traffic into qualified pipeline and revenue.',
      tags: ['Modern Web Platforms', 'Landing Page CRO', 'High-Speed Architecture'],
      link: '/services',
      linkText: 'Explore web design',
      color: 'bg-[#F0FDF4] text-[#064E3B] border border-[#A7F3D0]/60'
    },
    {
      num: '04',
      title: 'Brand Scaling & Identity Systems',
      category: 'Strategic Brand Dominance',
      description:
        'Comprehensive brand positioning, distinctive typography hierarchies, and complete visual identity guidelines. Designed to elevate startups into recognized, dominant category leaders.',
      tags: ['Brand Identity', 'Visual Guidelines', 'Strategic Scaling'],
      link: '/why-prismbee',
      linkText: 'Learn about brand scaling',
      color: 'bg-white text-[#064E3B] border border-[#064E3B]/15'
    }
  ];

  return (
    <section
      aria-label="Core digital growth services"
      className="w-full px-6 md:px-12 max-w-[1600px] mx-auto py-16 md:py-24 bg-white"
    >
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#064E3B]/10 pb-8">
        <div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#10B981] mb-3 block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#064E3B] tracking-tight leading-[1.05]">
            Core Services of Our Digital Growth Agency.
          </h2>
        </div>
        <p className="text-base sm:text-lg text-[#064E3B]/80 font-medium max-w-md tracking-tight">
          One unified partner combining viral organic content, high-retention video production, and high-converting web engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((service, index) => {
          const isDark = service.color.includes('text-white');
          return (
            <div
              key={index}
              className={`p-8 sm:p-10 md:p-12 rounded-[28px] md:rounded-[36px] ${service.color} flex flex-col justify-between min-h-[380px] transition-transform duration-300 hover:scale-[1.01] shadow-sm`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span
                    className={`font-extrabold text-2xl tracking-tight ${
                      isDark ? 'text-[#A7F3D0]' : 'text-[#10B981]'
                    }`}
                  >
                    {service.num}.
                  </span>
                  <span
                    className={`text-xs font-bold tracking-tight px-3 py-1 rounded-full ${
                      isDark
                        ? 'bg-white/10 text-[#A7F3D0] border border-white/10'
                        : 'bg-white text-[#064E3B]/70 border border-[#A7F3D0]/60'
                    }`}
                  >
                    {service.category}
                  </span>
                </div>

                <h3
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 ${
                    isDark ? 'text-white' : 'text-[#064E3B]'
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-base sm:text-lg font-medium leading-relaxed tracking-tight mb-8 ${
                    isDark ? 'text-white/80' : 'text-[#1e293b]/80'
                  }`}
                >
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t flex flex-wrap items-center justify-between gap-4 border-current/10">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        isDark ? 'bg-white/10 text-white/90' : 'bg-[#064E3B]/5 text-[#064E3B]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={service.link}
                  className={`text-sm sm:text-base font-bold tracking-tight hover:underline inline-flex items-center gap-1 ${
                    isDark ? 'text-[#A7F3D0]' : 'text-[#064E3B]'
                  }`}
                >
                  {service.linkText} &rarr;
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
