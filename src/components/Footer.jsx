import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-[#064E3B] text-white pt-20 md:pt-32 pb-10 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-16 md:gap-24">
        {/* Giant "Done." display statement (Huge Inc signature) */}
        <div>
          <h2 className="text-[clamp(4.5rem,15vw,13rem)] font-extrabold tracking-[-0.045em] leading-[0.82] select-none text-white m-0 p-0">
            Done<span className="text-[#10B981]">.</span>
          </h2>
        </div>

        {/* Middle Section: 2 Columns (Left: Nav, Right: Newsletter & Social) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Left: Nav Pages with Period Suffixes */}
          <div className="md:col-span-5 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <nav aria-label="Footer primary navigation" className="flex flex-col gap-4">
              <Link
                to="/work"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#A7F3D0] transition-colors w-fit"
              >
                Work.
              </Link>
              <Link
                to="/services"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#A7F3D0] transition-colors w-fit"
              >
                Solutions.
              </Link>
              <Link
                to="/how-it-works"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#A7F3D0] transition-colors w-fit"
              >
                Approach.
              </Link>
              <Link
                to="/why-prismbee"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#A7F3D0] transition-colors w-fit"
              >
                Company.
              </Link>
              <Link
                to="/packages"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#A7F3D0] transition-colors w-fit"
              >
                Pricing.
              </Link>
            </nav>

            <nav aria-label="Footer secondary navigation" className="flex flex-col gap-4 pt-1 sm:pt-0">
              <Link
                to="/contact"
                className="text-lg font-medium tracking-tight text-white/80 hover:text-white transition-colors w-fit"
              >
                Join us.
              </Link>
              <Link
                to="/contact"
                className="text-lg font-medium tracking-tight text-white/80 hover:text-white transition-colors w-fit"
              >
                Contact us.
              </Link>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium tracking-tight text-white/80 hover:text-white transition-colors w-fit"
              >
                Instagram.
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium tracking-tight text-white/80 hover:text-white transition-colors w-fit"
              >
                Linkedin.
              </a>
              <a
                href="mailto:hello@prismbee.com"
                className="text-lg font-medium tracking-tight text-[#A7F3D0] hover:underline w-fit"
              >
                hello@prismbee.com
              </a>
            </nav>
          </div>

          {/* Right: Newsletter (Get Prismbee in your DMs) */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col gap-6 md:pl-8 lg:pl-16">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Get Prismbee in your DMs.
            </h3>

            {isSubscribed ? (
              <p className="text-[#A7F3D0] font-semibold text-lg">
                You're on the list. Talk soon.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="flex items-center rounded-full bg-white/10 border border-white/20 px-5 py-2.5 focus-within:border-[#10B981] transition-colors">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work email"
                    className="flex-1 bg-transparent text-white placeholder:text-white/50 text-base font-medium outline-none"
                  />
                  <button
                    type="submit"
                    className="pill-cta-inverted text-xs py-2 px-4 ml-2"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-white/50 tracking-tight">
                  We respect your inbox. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 tracking-tight">
          <p>© {new Date().getFullYear()} Prismbee. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy.
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
