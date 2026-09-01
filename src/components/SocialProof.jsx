import { Star } from 'lucide-react';

export default function SocialProof() {
  const reviews = [
    "Prismbee tripled our Instagram reach in 60 days.",
    "The website they built converts at 3x our old one.",
    "Best agency investment we've made.",
    "Our brand finally looks as premium as our product."
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...reviews, ...reviews, ...reviews];

  return (
    <section className="bg-mist py-8 overflow-hidden border-y border-mint/30">
      <div className="relative w-full flex overflow-hidden">
        
        {/* Gradients for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-mist to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-mist to-transparent z-10"></div>

        <div className="flex w-max animate-marquee hover:pause whitespace-nowrap items-center">
          {marqueeItems.map((review, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center gap-4 px-8">
                <div className="flex text-emerald">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-body text-body-text text-sm md:text-[15px]">"{review}"</p>
              </div>
              
              {/* Separator */}
              <div className="text-mint font-bold px-4 select-none">|</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
