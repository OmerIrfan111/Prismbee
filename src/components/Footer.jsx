import { Link } from 'react-scroll';
import { Hexagon } from 'lucide-react';

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-obsidian pt-20 pb-8 text-white border-t border-mint/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 - Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
              <img src="/logo.png" alt="Prismbee Logo" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-white text-xl tracking-tight">Prismbee</span>
            </div>
            <p className="font-body text-slate-300 text-[15px]">
              Scale Smarter. Grow Faster.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-white hover:text-mint transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-mint transition-colors">
                <LinkedinIcon size={20} />
              </a>
              {/* TikTok icon approximation or custom SVG. Using a generic play/video for now if not available, or X for twitter */}
              <a href="#" aria-label="X (Twitter)" className="text-white hover:text-mint transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white mb-2">Services</h4>
            <a href="#" className="font-body text-slate-300 text-[14px] hover:text-mint transition-colors">Social Media Management</a>
            <a href="#" className="font-body text-slate-300 text-[14px] hover:text-mint transition-colors">Web Design & Development</a>
            <a href="#" className="font-body text-slate-300 text-[14px] hover:text-mint transition-colors">Brand Identity</a>
          </div>

          {/* Col 3 - Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white mb-2">Company</h4>
            <a href="#" className="font-body text-slate-300 text-[14px] hover:text-mint transition-colors">About</a>
            <Link to="how-it-works" smooth={true} duration={800} offset={-80} className="font-body text-slate-300 text-[14px] hover:text-mint transition-colors cursor-pointer">Process</Link>
            <Link to="packages" smooth={true} duration={800} offset={-80} className="font-body text-slate-300 text-[14px] hover:text-mint transition-colors cursor-pointer">Packages</Link>
            <Link to="contact" smooth={true} duration={800} offset={-80} className="font-body text-slate-300 text-[14px] hover:text-mint transition-colors cursor-pointer">Contact</Link>
          </div>

          {/* Col 4 - Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white mb-2">Contact</h4>
            <a href="mailto:hello@prismbee.com" className="font-body text-slate-300 text-[14px] hover:text-mint transition-colors mb-4">
              hello@prismbee.com
            </a>
            <Link to="contact" smooth={true} duration={800} offset={-80}>
              <button className="btn-primary w-full text-center">
                Get a Free Strategy Call
              </button>
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-mint/20 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center opacity-50">
          <p className="font-body text-[13px] text-white">
            &copy; 2026 Prismbee. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
