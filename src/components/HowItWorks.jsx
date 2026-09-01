import { motion } from 'framer-motion';

export default function HowItWorks() {
  const phases = [
    {
      num: "01",
      label: "Discovery & Onboarding",
      desc: "Brand questionnaire, competitor analysis, audience persona mapping, and technical access setup."
    },
    {
      num: "02",
      label: "Design & Strategy",
      desc: "Moodboards, logo suite creation, site wireframes, and a full 30-day content calendar."
    },
    {
      num: "03",
      label: "Build & Launch",
      desc: "Web development, hosting, Reels editing, caption writing, and initial publishing."
    },
    {
      num: "04",
      label: "Management & Scaling",
      desc: "Daily engagement, publishing, platform optimization, and monthly performance reporting."
    }
  ];

  return (
    <section className="bg-mist py-24" id="how-it-works">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h3 className="text-emerald font-display font-medium text-lg uppercase tracking-widest mb-2">
            Our Process
          </h3>
          <h2 className="text-obsidian font-display font-bold text-3xl md:text-4xl">
            From Strategy to Scale
          </h2>
        </motion.div>

        {/* Stepper */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-[2px] border-t-2 border-dashed border-mint z-0"></div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-6 bottom-6 left-6 w-[2px] border-l-2 border-dashed border-mint z-0"></div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="relative z-10 flex flex-col md:items-center text-left md:text-center pl-16 md:pl-0">
                
                {/* Number Circle */}
                <div className="absolute md:relative left-0 md:left-auto top-0 md:top-auto w-12 h-12 bg-white border-2 border-emerald rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <span className="font-display font-extrabold text-emerald text-lg">
                    {phase.num}
                  </span>
                </div>
                
                <h4 className="text-obsidian font-display font-semibold text-xl mb-3">
                  {phase.label}
                </h4>
                
                <p className="text-body-text font-body text-[15px] leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
