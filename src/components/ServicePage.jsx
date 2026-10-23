import { Link, Navigate, useParams } from 'react-router-dom';
import SEO from './SEO';
import FAQ from './FAQ';
import { getServicePage, servicePages } from '../data/servicePages';

/**
 * Dedicated landing page for one of Prismbee's core service lines
 * (video editing, social media management, web design).
 *
 * The slug can be passed as a prop or read from the route param.
 * All copy — SEO metadata, intro, what's included, FAQs — lives in
 * src/data/servicePages.js so the prerender script can reuse it as
 * crawlable static HTML.
 */
export default function ServicePage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const page = getServicePage(slug);

  if (!page) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = servicePages.filter((service) => service.slug !== page.slug);

  const h1Words = page.h1.split(' ');
  const h1Lead = h1Words.slice(0, -1).join(' ');
  const h1Accent = h1Words[h1Words.length - 1];

  return (
    <section className="w-full min-h-screen pt-36 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto bg-white">
      <SEO title={page.title} description={page.description} canonical={page.canonical} />

      {/* Header */}
      <div className="mb-14 md:mb-20">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#10B981] mb-3 block">
          {page.eyebrow}
        </span>
        <h1 className="text-[#064E3B] font-extrabold text-[clamp(2.6rem,6.5vw,5.5rem)] tracking-[-0.04em] leading-[0.95] max-w-5xl">
          {h1Lead} <span className="text-gradient-brand">{h1Accent}</span>
        </h1>
        <div className="mt-8 max-w-3xl flex flex-col gap-5">
          {page.intro.map((paragraph, index) => (
            <p
              key={index}
              className="text-[#064E3B]/85 font-medium text-lg sm:text-xl leading-relaxed tracking-tight"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="pill-cta">
            Book a free call
          </Link>
          <Link
            to="/packages"
            className="inline-flex items-center justify-center rounded-none px-7 py-2.5 text-[0.9375rem] font-semibold tracking-[-0.02em] leading-none border border-[#064E3B]/25 text-[#064E3B] transition-colors hover:bg-[#F0FDF4]"
          >
            See packages
          </Link>
        </div>
      </div>

      {/* What's included */}
      <div className="bg-[#F0FDF4] rounded-[28px] md:rounded-[36px] p-8 sm:p-12 md:p-16 mb-20 md:mb-28 card-soft-shadow">
        <h2 className="text-[#064E3B] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05] mb-10">
          What&apos;s included
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
          {page.included.map((item, index) => (
            <li key={index} className="flex items-start gap-3.5">
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center text-sm font-bold"
              >
                ✓
              </span>
              <span className="text-[#064E3B] font-semibold text-lg sm:text-xl leading-snug tracking-tight">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-[#064E3B]/70 font-medium text-base sm:text-lg leading-relaxed tracking-tight max-w-3xl">
          Prismbee packages are Starter ($490/month), Growth ($990/month), and Authority
          ($1,990/month), with 40% off your first month. Your exact deliverables are agreed in
          writing before work starts.
        </p>
      </div>

      {/* FAQ (also injects FAQPage JSON-LD) */}
      <div className="mb-20 md:mb-28 max-w-5xl">
        <FAQ faqs={page.faqs} heading={`${page.eyebrow}: Frequently Asked Questions`} />
      </div>

      {/* Explore the other core services */}
      <div className="mb-20 md:mb-28">
        <h2 className="text-[#064E3B] font-extrabold text-3xl sm:text-4xl tracking-tight leading-[1.05] mb-8">
          Part of one growth system
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherServices.map((service) => (
            <Link
              key={service.slug}
              to={service.path}
              className="group block bg-white border border-[#064E3B]/15 rounded-[28px] p-8 sm:p-10 card-soft-shadow transition-all duration-300 hover:-translate-y-1.5 hover:ring-2 hover:ring-[#10B981]/50"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#10B981] mb-2 block">
                {service.eyebrow}
              </span>
              <span className="text-[#064E3B] font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight block">
                {service.h1}
              </span>
              <span className="mt-4 inline-block text-[#064E3B] font-semibold text-base underline underline-offset-4 decoration-[#10B981] decoration-2">
                View service
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#10B981] rounded-[28px] md:rounded-[36px] p-8 sm:p-12 md:p-16 flex flex-col gap-8 glow-emerald">
        <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05] max-w-3xl">
          Ready to turn attention into revenue?
        </h2>
        <p className="text-[#A7F3D0] font-bold uppercase tracking-[0.15em] text-xs sm:text-sm">
          Launch offer: 40% off your first month on every package
        </p>
        <p className="text-white/80 font-medium text-lg sm:text-xl leading-relaxed tracking-tight max-w-2xl">
          Tell us about your brand and goals. We will come back with a clear scope — deliverables,
          timeline, and revisions agreed in writing before anything starts.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="pill-cta-inverted">
            Book a free call
          </Link>
          <Link
            to="/packages"
            className="inline-flex items-center justify-center rounded-none px-7 py-2.5 text-[0.9375rem] font-semibold tracking-[-0.02em] leading-none border border-white/40 text-white transition-colors hover:bg-white/10"
          >
            View packages
          </Link>
        </div>
      </div>
    </section>
  );
}
