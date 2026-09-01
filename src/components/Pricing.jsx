import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Check } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: "Starter",
      price: "Custom Quote",
      featured: false,
      features: [
        "Brand identity setup",
        "1 platform social management",
        "Basic website (5 pages)",
        "Monthly analytics report"
      ],
      ctaText: "Get Started",
      btnClass: "btn-secondary w-full"
    },
    {
      name: "Growth",
      badge: "Most Popular",
      price: "Custom Quote",
      featured: true,
      features: [
        "Full brand system",
        "3-platform social management",
        "Website + 2 landing pages",
        "Reels & Shorts production",
        "Community management",
        "Monthly growth report"
      ],
      ctaText: "Book a Call",
      btnClass: "btn-primary w-full"
    },
    {
      name: "Authority",
      price: "Custom Quote",
      featured: false,
      features: [
        "Premium brand identity",
        "Full multi-platform management",
        "Custom web platform",
        "Video production",
        "Dedicated account manager",
        "Bi-weekly strategy sessions"
      ],
      ctaText: "Get Started",
      btnClass: "btn-secondary w-full"
    }
  ];

  return (
    <section className="bg-white py-24" id="packages">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h3 className="text-emerald font-display font-medium text-lg uppercase tracking-widest mb-2">
            Investment
          </h3>
          <h2 className="text-obsidian font-display font-bold text-3xl md:text-4xl mb-4">
            Flexible Packages, Clear Results
          </h2>
          <p className="text-body-text font-body text-base md:text-lg">
            Every Prismbee engagement is scoped to your brand's exact growth stage.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`flex flex-col p-8 md:p-10 rounded-[8px] transition-transform duration-300 hover:-translate-y-2 ${
                pkg.featured 
                  ? 'bg-obsidian text-white border border-mint shadow-[0_0_30px_rgba(167,243,208,0.2)] lg:scale-105 relative z-10' 
                  : 'bg-white text-obsidian border border-mint/50 shadow-[0_4px_24px_rgba(6,78,59,0.05)]'
              }`}
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display font-bold text-2xl">{pkg.name}</h4>
                  {pkg.badge && (
                    <span className="bg-emerald text-white text-xs font-display font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <div className="font-display font-semibold text-xl opacity-90">
                  {pkg.price}
                </div>
              </div>

              <div className="h-px w-full bg-mint/20 mb-8"></div>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${pkg.featured ? 'text-mint' : 'text-emerald'}`} />
                    <span className={`font-body text-[15px] ${pkg.featured ? 'text-slate-300' : 'text-body-text'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="contact" smooth={true} duration={800} offset={-80} className="mt-auto">
                <button className={pkg.btnClass}>
                  {pkg.ctaText}
                </button>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
