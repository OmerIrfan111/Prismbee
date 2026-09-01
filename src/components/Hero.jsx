import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TrendingUp, Activity, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-obsidian min-h-screen flex items-center pt-24 overflow-hidden" id="hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M25 0L50 14.4v28.8L25 57.6L0 43.2V14.4L25 0z" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-emerald font-display font-medium text-lg md:text-xl">
              Digital Growth Agency
            </h3>
            
            <h1 className="text-white font-display font-extrabold text-[48px] leading-[1.1] md:text-[56px] lg:text-[64px] tracking-tight">
              We Turn Attention<br />Into <span className="font-editorial text-[#A7F3D0] font-normal tracking-normal">Revenue.</span>
            </h1>
            
            <p className="text-slate-400 font-body text-[15px] md:text-[16px] leading-relaxed max-w-[480px]">
              Prismbee is your end-to-end growth partner — combining organic social media dominance, high-converting web platforms, and precision brand identity design to scale modern brands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="contact" smooth={true} duration={800} offset={-80}>
                <button className="btn-primary w-full sm:w-auto">
                  Start Growing
                </button>
              </Link>
              <Link to="services" smooth={true} duration={800} offset={-80}>
                <button className="btn-secondary text-white border-white hover:bg-white/10 w-full sm:w-auto">
                  View Our Services
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-[500px] mx-auto lg:mx-0"
          >
            {/* Glowing Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-mint/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Geometric diamond accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-mint/30 rotate-45 pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"></div>

            {/* Dashboard Card */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative bg-[#0a3d2e] border border-mint rounded-[12px] p-8 shadow-2xl backdrop-blur-sm z-10"
            >
              <div className="flex flex-col gap-8">
                {/* Metric 1 */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-mint/80 font-body text-sm mb-1">Organic Reach</p>
                    <p className="text-emerald font-display font-bold text-4xl">+284%</p>
                  </div>
                  <div className="w-16 h-10 flex items-end gap-1 opacity-80">
                    <div className="w-full bg-emerald rounded-t-sm h-1/3"></div>
                    <div className="w-full bg-emerald rounded-t-sm h-1/2"></div>
                    <div className="w-full bg-emerald rounded-t-sm h-full"></div>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-mint/20"></div>

                {/* Metric 2 */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-mint/80 font-body text-sm mb-1">Conversion Rate</p>
                    <p className="text-white font-display font-bold text-3xl">+67%</p>
                  </div>
                  <div className="text-mint opacity-80">
                    <TrendingUp size={32} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-mint/20"></div>

                {/* Metric 3 */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-mint/80 font-body text-sm mb-1">Monthly Revenue</p>
                    <p className="text-white font-display font-bold text-3xl">$124K</p>
                  </div>
                  <div className="text-emerald opacity-80">
                    <Activity size={32} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
