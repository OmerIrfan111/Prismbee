// Pure CSS infinite marquee for client/partner logos (no pause on hover, monochrome style)
export default function SocialProof() {
  const logos = [
    { name: 'Google', width: 90 },
    { name: 'McDonald’s', width: 110 },
    { name: 'Ring', width: 70 },
    { name: 'CoinTracker', width: 120 },
    { name: 'Hublot', width: 95 },
    { name: 'NBC', width: 75 },
    { name: 'LPGA', width: 85 },
    { name: 'Lego', width: 80 },
    { name: 'Spotify', width: 95 },
    { name: 'Stripe', width: 85 }
  ];

  // Quadruple array to ensure seamless infinite looping on ultra-wide screens
  const marqueeList = [...logos, ...logos, ...logos, ...logos];

  return (
    <section aria-label="Client logos" className="w-full py-12 md:py-16 bg-white overflow-hidden border-y border-[#064E3B]/10">
      <div className="w-full overflow-hidden flex relative">
        {/* Soft edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-infinite flex items-center gap-16 md:gap-24">
          {marqueeList.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 grayscale opacity-75 hover:opacity-100 transition-opacity"
            >
              <span className="font-extrabold text-2xl md:text-3xl tracking-tight text-[#064E3B]">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
