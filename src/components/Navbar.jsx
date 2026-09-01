import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', to: '/services' },
    { name: 'How It Works', to: '/how-it-works' },
    { name: 'Why Prismbee', to: '/why-prismbee' },
    { name: 'Packages', to: '/packages' },
    { name: 'Contact', to: '/contact' }
  ];

  // Force dark background if not on home page or if scrolled
  const navBackgroundClass = (isScrolled || !isHomePage) 
    ? 'bg-obsidian shadow-lg py-4' 
    : 'bg-transparent py-6';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass}`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="Prismbee Logo" className="w-8 h-8 object-contain" />
          <span className="font-display font-bold text-white text-xl sm:text-2xl tracking-tight">Prismbee</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-white font-body text-[14px] cursor-pointer relative group transition-colors"
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-emerald transition-all duration-300 ${location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="btn-primary">
              Get a Free Strategy Call
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`font-display text-2xl font-semibold cursor-pointer transition-colors ${location.pathname === link.to ? 'text-emerald' : 'text-white hover:text-emerald'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <button className="btn-primary mt-4">
              Get a Free Strategy Call
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
