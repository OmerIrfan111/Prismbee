import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { servicePages } from '../src/data/servicePages.js';
import { staticContent, renderStaticBlock } from './staticContent.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const pages = [
  {
    path: 'work',
    title: 'Video Production & Web Design Portfolio | Prismbee',
    description:
      'Explore client case studies and selected work by Prismbee, featuring viral organic video production, 3D motion design, and high-converting web engineering.',
    canonical: 'https://www.prismbee.site/work'
  },
  {
    path: 'services',
    title: 'Digital Growth Services | Video & Social Media | Prismbee',
    description:
      'Explore our growth services: viral organic social media content, cinematic video production, conversion web design, and brand scaling. Partner with Prismbee.',
    canonical: 'https://www.prismbee.site/services'
  },
  // Dedicated service pages — metadata pulled from the shared data file
  // so the prerendered head always matches the React page.
  ...servicePages.map((page) => ({
    path: page.path.replace(/^\//, ''),
    title: page.title,
    description: page.description,
    canonical: page.canonical
  })),
  {
    path: 'how-it-works',
    title: 'Our Approach & Growth Process | How It Works | Prismbee',
    description:
      'Discover our disciplined 4-stage digital growth methodology from discovery and strategy to build and scaling. See how Prismbee turns attention into revenue.',
    canonical: 'https://www.prismbee.site/how-it-works'
  },
  {
    path: 'why-prismbee',
    title: 'Why Prismbee | Digital Growth Agency & Brand Scaling',
    description:
      'Learn why ambitious brands choose Prismbee for organic social dominance, cinematic video editing, and conversion-focused web engineering. Meet the agency.',
    canonical: 'https://www.prismbee.site/why-prismbee'
  },
  {
    path: 'packages',
    title: 'Digital Growth Packages & Pricing | Prismbee',
    description:
      'Prismbee packages: Starter $490/month, Growth $990/month, Authority $1,990/month, with 40% off your first month. Video edits in 1–2 business days, standard website builds in 3–4 business days.',
    canonical: 'https://www.prismbee.site/packages'
  },
  {
    path: 'contact',
    title: 'Contact Prismbee | Book a Digital Growth Strategy Call',
    description:
      'Ready to turn attention into revenue? Contact Prismbee today to discuss your video production, social media content, and web design goals. Book a free call.',
    canonical: 'https://www.prismbee.site/contact'
  }
];

/**
 * Inject the crawlable static content block for a page inside #root.
 * React's createRoot replaces it on load; crawlers and AI bots that do
 * not run JavaScript read the real copy instead of an empty shell.
 */
function injectStaticContent(html, pagePath) {
  const content = staticContent[pagePath];
  if (!content) return html;

  const block = renderStaticBlock(content);

  if (html.includes('<div id="root"></div>')) {
    return html.replace('<div id="root"></div>', `<div id="root">\n${block}\n</div>`);
  }
  if (html.includes('<div id="root">')) {
    return html.replace('<div id="root">', `<div id="root">\n${block}`);
  }

  console.warn(`Could not find #root in template; static content skipped for "${pagePath}".`);
  return html;
}

function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html does not exist. Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf8');

  for (const page of pages) {
    const pageDir = path.join(distDir, page.path);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    let pageHtml = baseHtml;

    // Update <title>
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${page.title}</title>`
    );

    // Update meta description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${page.description}" />`
    );

    // Update canonical link
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${page.canonical}" />`
    );

    // Update Open Graph tags
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${page.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
      `<meta property="og:description" content="${page.description}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
      `<meta property="og:url" content="${page.canonical}" />`
    );

    // Update Twitter tags
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:title" content="${page.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:description" content="${page.description}" />`
    );

    // Inject crawlable static content inside #root
    pageHtml = injectStaticContent(pageHtml, page.path);

    fs.writeFileSync(path.join(pageDir, 'index.html'), pageHtml, 'utf8');
    console.log(`Prerendered metadata + static content: dist/${page.path}/index.html`);
  }

  // Home page: keep the template's own metadata, inject its static
  // content block into dist/index.html itself.
  const homeHtml = injectStaticContent(baseHtml, '');
  fs.writeFileSync(templatePath, homeHtml, 'utf8');
  console.log('Prerendered static content: dist/index.html (home)');

  console.log('All static page metadata generated cleanly.');
}

prerender();
