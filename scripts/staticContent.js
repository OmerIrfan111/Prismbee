/**
 * Static, crawlable content injected into prerendered HTML by
 * scripts/prerender.js.
 *
 * The site is a client-rendered React app: without this block, crawlers
 * and AI bots that do not execute JavaScript only see metadata. The
 * block is placed inside #root; React's createRoot replaces it the
 * moment the app loads, so visitors see the normal site while non-JS
 * crawlers get the real page copy.
 *
 * All copy here comes from the site's own pages/components, or from
 * src/data/servicePages.js for the dedicated service pages. Nothing is
 * invented: no prices (packages are Custom Scope), no turnaround times,
 * no revision counts, no results claims.
 */
import { servicePages } from '../src/data/servicePages.js';

function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Render one page's static block from a content definition. */
export function renderStaticBlock(content) {
  const parts = ['<main>'];
  parts.push(`<h1>${esc(content.h1)}</h1>`);

  for (const paragraph of content.intro || []) {
    parts.push(`<p>${esc(paragraph)}</p>`);
  }

  if (content.bullets && content.bullets.length) {
    parts.push('<ul>');
    for (const bullet of content.bullets) {
      if (bullet.href) {
        parts.push(
          `<li><a href="${esc(bullet.href)}">${esc(bullet.label)}</a>${
            bullet.text ? ` — ${esc(bullet.text)}` : ''
          }</li>`
        );
      } else {
        parts.push(`<li>${esc(bullet.text)}</li>`);
      }
    }
    parts.push('</ul>');
  }

  if (content.faqs && content.faqs.length) {
    parts.push('<section>');
    parts.push('<h2>Frequently Asked Questions</h2>');
    for (const faq of content.faqs) {
      parts.push(`<h3>${esc(faq.question)}</h3>`);
      parts.push(`<p>${esc(faq.answer)}</p>`);
    }
    parts.push('</section>');
  }

  if (content.outro) {
    parts.push(`<p>${esc(content.outro)}</p>`);
  }

  parts.push('</main>');
  return parts.join('\n');
}

/** Static content for the pre-existing pages. Keyed by dist path ('' = home). */
export const staticContent = {
  '': {
    h1: 'Prismbee — Digital Growth Agency',
    intro: [
      'Prismbee is an elite digital growth agency combining viral organic social media content, cinematic video production, and high-converting web design to scale modern brands.',
      'We help brands in the United States, the United Kingdom, Canada, and Europe turn attention into revenue through three core service lines — video editing, social media content and management, and web design and development — supported by brand scaling and identity systems.'
    ],
    bullets: [
      {
        label: 'Video Editing Services',
        href: '/services/video-editing',
        text: 'high-retention commercial video editing, Reels production, and 3D motion design, with hooks engineered to captivate audiences in the first 3 seconds.'
      },
      {
        label: 'Social Media Management and Content Services',
        href: '/services/social-media-management',
        text: 'multi-platform organic management across TikTok, Instagram, and LinkedIn, with content calendars, community growth, and monthly ROI analytics. Meta ads is available as a supplementary add-on.'
      },
      {
        label: 'Web Design and Development Services',
        href: '/services/web-design',
        text: 'bespoke, high-speed websites and landing pages built on modern architectures to convert traffic into qualified leads and paying clients.'
      },
      {
        label: 'Growth Packages',
        href: '/packages',
        text: 'Starter, Growth, and Authority packages, all priced on custom scope.'
      },
      {
        label: 'How It Works',
        href: '/how-it-works',
        text: 'a four-stage process: discovery, strategy, build, and scaling.'
      },
      {
        label: 'Contact Prismbee',
        href: '/contact',
        text: 'book a free strategy call.'
      }
    ]
  },
  work: {
    h1: 'Video Production & Web Design Portfolio',
    intro: [
      'Selected work by Prismbee: high-converting web platforms, viral video edits, and multi-channel marketing campaigns engineered to scale modern brands.',
      'Explore client case studies and selected work featuring viral organic video production, 3D motion design, and high-converting web engineering.'
    ],
    bullets: [
      { text: 'Viral organic video production and editing' },
      { text: '3D motion design and visual effects' },
      { text: 'High-converting websites and landing pages' },
      {
        label: 'Start a project',
        href: '/contact',
        text: 'book a free strategy call with Prismbee.'
      }
    ]
  },
  services: {
    h1: 'Digital Growth Services',
    intro: [
      'One unified growth agency. Every channel. A total digital growth system from attention to revenue.',
      'Prismbee builds search and social visibility for brands in the United States, the United Kingdom, Canada, and Europe across three core service lines, plus brand scaling and identity systems.'
    ],
    bullets: [
      {
        label: 'Video Editing Services',
        href: '/services/video-editing',
        text: 'high-retention commercial video editing, 3D motion design, and visual storytelling engineered to captivate audiences in the first 3 seconds.'
      },
      {
        label: 'Social Media Management and Content Services',
        href: '/services/social-media-management',
        text: 'full multi-platform organic management across TikTok, Instagram, and LinkedIn, with viral Reels production, content calendars, community growth, and monthly ROI analytics.'
      },
      {
        label: 'Web Design and Development Services',
        href: '/services/web-design',
        text: 'bespoke, high-speed websites and landing pages built on modern architectures, engineered to convert organic traffic into qualified leads and paying clients.'
      },
      { text: 'Brand Scaling & Identity Systems — comprehensive logo suites, color palettes, typography systems, and brand guidelines.' }
    ]
  },
  'how-it-works': {
    h1: 'Our Approach & Growth Process',
    intro: [
      'Discover our disciplined 4-stage digital growth methodology, from discovery and strategy to build and scaling. See how Prismbee turns attention into revenue.'
    ],
    bullets: [
      { text: 'Stage 1 — Discovery: understanding your brand, audience, and goals.' },
      { text: 'Stage 2 — Strategy: the plan, channels, and scope, agreed before any build work starts.' },
      { text: 'Stage 3 — Build: production of your content, campaigns, and web platform.' },
      { text: 'Stage 4 — Scaling: measuring results and scaling what works.' }
    ]
  },
  'why-prismbee': {
    h1: 'Why Prismbee',
    intro: [
      'Learn why ambitious brands choose Prismbee for organic social dominance, cinematic video editing, and conversion-focused web engineering.',
      'Prismbee is a digital growth agency for brands in the United States, the United Kingdom, Canada, and Europe, combining video editing, social media content and management, and web design and development in one team — so content, channels, and your website work as a single growth system instead of separate vendors.'
    ],
    bullets: [
      {
        label: 'Video Editing Services',
        href: '/services/video-editing',
        text: 'cinematic editing and 3D motion design.'
      },
      {
        label: 'Social Media Management and Content Services',
        href: '/services/social-media-management',
        text: 'organic management across TikTok, Instagram, and LinkedIn.'
      },
      {
        label: 'Web Design and Development Services',
        href: '/services/web-design',
        text: 'conversion-focused websites and landing pages.'
      },
      {
        label: 'Growth Packages',
        href: '/packages',
        text: 'Starter, Growth, and Authority, priced on custom scope.'
      }
    ]
  },
  packages: {
    h1: 'Digital Growth Packages & Pricing',
    intro: [
      'Explore flexible growth packages tailored to your brand stage. All Prismbee packages are priced on custom scope — there is no public price list. After a short discovery call you receive a written quote with deliverables, timelines, and revision rounds agreed before work starts.'
    ],
    bullets: [
      { text: 'Starter — brand identity setup and guidelines, 1 platform organic social management, a high-converting 5-page web platform, and a monthly performance analytics report.' },
      { text: 'Growth — full brand identity design system, 3-platform organic social management, web platform plus dedicated landing pages, Reels and video content production, daily community management and engagement, and a comprehensive monthly growth report.' },
      { text: 'Authority — premium enterprise brand system, full multi-platform social management, custom web application or platform, studio video production and creative direction, a dedicated senior account manager, and bi-weekly strategic executive sessions.' }
    ]
  },
  contact: {
    h1: 'Contact Prismbee',
    intro: [
      'Ready to turn attention into revenue? Contact Prismbee today to discuss your video production, social media content, and web design goals. Book a free call.',
      'Email: contact@prismbee.site. Prismbee works with brands in the United States, the United Kingdom, Canada, and Europe.'
    ],
    bullets: [
      {
        label: 'Instagram — @prismbee.co',
        href: 'https://www.instagram.com/prismbee.co/'
      },
      {
        label: 'LinkedIn — Prismbee',
        href: 'https://www.linkedin.com/company/prismbee/'
      },
      {
        label: 'View our services',
        href: '/services'
      },
      {
        label: 'View packages',
        href: '/packages'
      }
    ]
  }
};

/** Static content for the dedicated service pages, built from the shared data file. */
for (const page of servicePages) {
  staticContent[page.path.replace(/^\//, '')] = {
    h1: page.h1,
    intro: page.intro,
    bullets: page.included.map((text) => ({ text })),
    faqs: page.faqs,
    outro:
      'Packages are Starter, Growth, and Authority, all priced on custom scope. Book a free call on the Prismbee contact page to get started.'
  };
}
