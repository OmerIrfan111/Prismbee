import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI only simulation
    setIsSubmitted(true);
  };

  return (
    <section className="bg-obsidian py-24" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Copy */}
          <div className="flex flex-col text-white">
            <h3 className="text-mint font-display font-medium text-lg uppercase tracking-widest mb-4">
              Ready to Scale?
            </h3>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
              Let's Build Your<br />Growth Engine.
            </h2>
            <p className="font-body text-slate-300 text-[16px] leading-relaxed max-w-[480px]">
              Tell us where your brand is today and where you want it to go. We'll map out exactly how Prismbee gets you there.
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-[8px] border border-mint p-8 md:p-10 shadow-[0_4px_24px_rgba(6,78,59,0.05)]">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 min-h-[400px]">
                <CheckCircle2 className="w-16 h-16 text-emerald mb-6" />
                <h4 className="font-display font-bold text-obsidian text-2xl mb-2">Message Sent</h4>
                <p className="font-body text-body-text">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block font-display font-medium text-obsidian text-sm mb-1.5" htmlFor="name">Name</label>
                  <input required type="text" id="name" className="w-full bg-mist border border-mint/50 rounded-md px-4 py-3 text-obsidian font-body text-[15px] focus:outline-none focus:border-emerald transition-colors" placeholder="Jane Doe" />
                </div>
                
                <div>
                  <label className="block font-display font-medium text-obsidian text-sm mb-1.5" htmlFor="email">Email</label>
                  <input required type="email" id="email" className="w-full bg-mist border border-mint/50 rounded-md px-4 py-3 text-obsidian font-body text-[15px] focus:outline-none focus:border-emerald transition-colors" placeholder="jane@brand.com" />
                </div>
                
                <div>
                  <label className="block font-display font-medium text-obsidian text-sm mb-1.5" htmlFor="brand">Brand/Company</label>
                  <input required type="text" id="brand" className="w-full bg-mist border border-mint/50 rounded-md px-4 py-3 text-obsidian font-body text-[15px] focus:outline-none focus:border-emerald transition-colors" placeholder="Brand Name" />
                </div>
                
                <div>
                  <label className="block font-display font-medium text-obsidian text-sm mb-1.5" htmlFor="service">Service Interest</label>
                  <select required id="service" className="w-full bg-mist border border-mint/50 rounded-md px-4 py-3 text-obsidian font-body text-[15px] focus:outline-none focus:border-emerald transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>Select a service</option>
                    <option value="social">Social Media</option>
                    <option value="web">Web Design</option>
                    <option value="brand">Brand Identity</option>
                    <option value="full">Full Package</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-display font-medium text-obsidian text-sm mb-1.5" htmlFor="message">Brief message</label>
                  <textarea required id="message" rows={4} className="w-full bg-mist border border-mint/50 rounded-md px-4 py-3 text-obsidian font-body text-[15px] focus:outline-none focus:border-emerald transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>
                
                <button type="submit" className="btn-primary mt-2">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
