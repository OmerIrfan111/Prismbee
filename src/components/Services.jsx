import { motion } from 'framer-motion';
import { Flame, Code2, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Flame className="text-emerald w-8 h-8" />,
      title: "Organic Social Growth",
      body: "Full multi-platform management across Instagram, TikTok, LinkedIn, and more — with Reels, content calendars, community engagement, and monthly analytics.",
      tags: ["Instagram", "TikTok", "LinkedIn", "Facebook", "X"],
      featured: false
    },
    {
      icon: <Code2 className="text-emerald w-8 h-8" />,
      title: "Web Design & Development",
      body: "Bespoke, high-speed websites and landing pages built on Framer or Webflow — designed to convert incoming traffic into leads and paying clients.",
      tags: ["Framer", "Webflow", "Landing Pages", "Hosting", "UX/UI"],
      featured: true
    },
    {
      icon: <Palette className="text-emerald w-8 h-8" />,
      title: "Brand Identity & Visual Systems",
      body: "Logo suites, color palettes, typography systems, and brand guidelines that build instant trust and separate you from every competitor.",
      tags: ["Logo Design", "Brand Guidelines", "Typography", "Color Systems"],
      featured: false
    }
  ];

  return (
    <section className="bg-white py-24" id="services">
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
            What We Do
          </h3>
          <h2 className="text-obsidian font-display font-bold text-3xl md:text-4xl mb-4">
            Three Pillars of Growth
          </h2>
          <p className="text-body-text font-body text-base md:text-lg">
            One partner. Every channel. Total growth system.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`card flex flex-col p-8 transition-transform duration-300 hover:-translate-y-2 ${
                service.featured 
                  ? 'border-mint shadow-[0_0_30px_rgba(167,243,208,0.4)] relative z-10' 
                  : 'border-mint/50'
              }`}
            >
              <div className="bg-mist w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-obsidian font-display font-semibold text-xl mb-3">
                {service.title}
              </h3>
              
              <p className="text-body-text font-body text-[15px] leading-relaxed flex-grow mb-8">
                {service.body}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-mist">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-display font-medium text-obsidian bg-mist px-2.5 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
