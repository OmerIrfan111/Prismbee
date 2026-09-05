import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Work', to: '/work' },
    { name: 'Solutions', to: '/services' },
    { name: 'Approach', to: '/how-it-works' },
    { name: 'Company', to: '/why-prismbee' },
    { name: 'Pricing', to: '/packages' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-[0_2px_20px_rgba(6,78,59,0.06)]'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="w-full px-6 md:px-12 max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Left: Brand Logo & Wordmark */}
        <Link to="/" className="flex items-center gap-2.5 group cursor-pointer">
          <img
            src="/logo.png"
            alt="Prismbee Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-extrabold text-[22px] sm:text-[24px] tracking-tight text-[#064E3B]">
            Prismbee<span className="text-[#10B981]">.</span>
          </span>
        </Link>

        {/* Center: Minimal plain text links (Huge style: no borders, no backgrounds, plain grotesque text) */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.name}
                to={link.to}
                className={`text-[15px] font-medium tracking-tight transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#064E3B] font-semibold'
                    : 'text-[#064E3B]/80 hover:text-[#064E3B]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Pill CTA Button ("Let's talk" equivalent) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="pill-cta"
          >
            Let's talk
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="pill-cta text-sm py-2 px-5"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Huge Inc minimal layout) */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-between p-8 md:p-12 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          isMobileOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
      >
        <nav className="flex flex-col gap-6 pt-4">
          <Link
            to="/"
            onClick={() => setIsMobileOpen(false)}
            className="text-4xl font-bold tracking-tight text-[#064E3B] hover:text-[#10B981] transition-colors"
          >
            Home.
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsMobileOpen(false)}
              className="text-4xl font-bold tracking-tight text-[#064E3B] hover:text-[#10B981] transition-colors"
            >
              {link.name}.
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="text-4xl font-bold tracking-tight text-[#10B981] hover:text-[#064E3B] transition-colors"
          >
            Contact.
          </Link>
        </nav>

        <div className="pt-8 border-t border-[#A7F3D0]/30 flex flex-col gap-4">
          <p className="text-sm font-semibold text-[#064E3B]/60 tracking-tight">
            Prismbee Digital Growth Agency
          </p>
          <Link
            to="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="pill-cta text-center w-full py-4 text-base"
          >
            Let's talk
          </Link>
        </div>
      </div>
    </header>
  );
}
