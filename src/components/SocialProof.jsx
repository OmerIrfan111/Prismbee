// Pure CSS infinite marquee showing agency core skills in compact, refined typography
export default function SocialProof() {
  const skills = [
    'Organic Social Dominance',
    'Full-Stack Web Development',
    'Viral Reels & Video Editing',
    'Brand Identity Systems',
    'Conversion Rate Optimization',
    'UI/UX Engineering',
    'Short-Form Content Strategy',
    'High-Speed Next.js Platforms',
    'Motion Graphics & 3D',
    'Performance Analytics'
  ];

  // Quadruple array to ensure seamless infinite looping on all screen sizes
  const marqueeList = [...skills, ...skills, ...skills, ...skills];

  return (
    <section aria-label="Agency capabilities and skills" className="w-full py-4 sm:py-5 bg-white overflow-hidden border-y border-[#064E3B]/10">
      <div className="w-full overflow-hidden flex relative">
        {/* Soft edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-infinite flex items-center gap-8 md:gap-12">
          {marqueeList.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-8 md:gap-12 shrink-0"
            >
              <span className="font-bold text-xs sm:text-sm md:text-[15px] tracking-tight text-[#064E3B] whitespace-nowrap hover:text-[#10B981] transition-colors">
                {skill}<span className="text-[#10B981]">.</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A7F3D0] shrink-0 select-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
