import { motion } from 'framer-motion';
import { Target, BarChart2, CheckCircle2 } from 'lucide-react';

export default function WhyPrismbee() {
  const features = [
    {
      icon: <Target className="text-emerald w-8 h-8" />,
      title: "End-to-End Integration",
      desc: "We connect audience attention (social content) directly to conversion infrastructure (websites, landing pages). No handoff gaps."
    },
    {
      icon: <BarChart2 className="text-emerald w-8 h-8" />,
      title: "Data-Backed Everything",
      desc: "Every strategy is continuously refined against real analytics. No guesswork, no vanity metrics — only decisions that move revenue."
    },
    {
      icon: <CheckCircle2 className="text-emerald w-8 h-8" />,
      title: "Consistent Quality Control",
      desc: "All design, copy, and code ships through strict QA checklists. You get polished deliverables, every single time."
    }
  ];

  return (
    <section className="bg-obsidian py-24" id="why-prismbee">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h3 className="text-mint font-display font-medium text-lg uppercase tracking-widest mb-4">
            Why We're Different
          </h3>
          <h2 className="text-white font-display font-bold text-3xl md:text-5xl leading-tight">
            Built for Brands That<br />Refuse to Be Generic.
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col text-white">
              <div className="mb-6">
                {feature.icon}
              </div>
              
              <h4 className="font-display font-semibold text-xl mb-4">
                {feature.title}
              </h4>
              
              <p className="font-body text-slate-300 text-[15px] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal Rule */}
        <div className="w-full h-px bg-mint/20 mt-20"></div>

      </div>
    </section>
  );
}
