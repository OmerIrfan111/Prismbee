import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const pages = [
  {
    path: 'work',
    title: 'Video Production & Web Design Portfolio | Prismbee',
    description:
      'Explore client case studies and selected work by Prismbee, featuring viral organic video production, 3D motion design, and high-converting web engineering.',
    canonical: 'https://www.prismbee.site/work',
    h1: 'Selected Portfolio — Produced.',
    content: `
      <header>
        <nav aria-label="Primary navigation"><a href="/">Prismbee</a></nav>
      </header>
      <main>
        <h1>Selected Portfolio — Produced.</h1>
        <p>High-converting web platforms, viral video edits, and multi-channel marketing campaigns engineered to scale modern brands.</p>
        <h2>Selected Client Work</h2>
        <ul>
          <li>CGI Environments — 3D Motion Design</li>
          <li>Kinetic Geometry — 3D Visual Effects</li>
          <li>Procedural Realms — 3D Motion Graphics</li>
          <li>Volumetric Dynamics — 3D Character & Motion</li>
        </ul>
      </main>
      <footer><p>&copy; 2026 Prismbee.</p></footer>
    `
  },
  {
    path: 'services',
    title: 'Digital Growth Services | Video & Social Media | Prismbee',
    description:
      'Explore our growth services: viral organic social media content, cinematic video production, conversion web design, and brand scaling. Partner with Prismbee.',
    canonical: 'https://www.prismbee.site/services',
    h1: 'Digital Growth Agency Capabilities — Solutions.',
    content: `
      <header>
        <nav aria-label="Primary navigation"><a href="/">Prismbee</a></nav>
      </header>
      <main>
        <h1>Digital Growth Agency Capabilities — Solutions.</h1>
        <p>One unified growth agency. Every channel. Total digital growth system from attention to revenue.</p>
        <h2>Our Core Growth Services</h2>
        <article>
          <h3>Viral Organic Social Media Content</h3>
          <p>Full multi-platform organic management across TikTok, Instagram, and LinkedIn.</p>
        </article>
        <article>
          <h3>Cinematic Video Production</h3>
          <p>High-retention commercial video editing, 3D motion design, and visual storytelling.</p>
        </article>
        <article>
          <h3>Conversion-Focused Web Design</h3>
          <p>Bespoke, high-speed websites and landing pages built on modern architectures.</p>
        </article>
        <article>
          <h3>Brand Scaling & Identity Systems</h3>
          <p>Comprehensive logo suites, color palettes, typography systems, and brand guidelines.</p>
        </article>
      </main>
      <footer><p>&copy; 2026 Prismbee.</p></footer>
    `
  },
  {
    path: 'how-it-works',
    title: 'Our Approach & Growth Process | How It Works | Prismbee',
    description:
      'Discover our disciplined 4-stage digital growth methodology from discovery and strategy to build and scaling. See how Prismbee turns attention into revenue.',
    canonical: 'https://www.prismbee.site/how-it-works',
    h1: 'Methodology & Delivery — Approach.',
    content: `
      <header>
        <nav aria-label="Primary navigation"><a href="/">Prismbee</a></nav>
      </header>
      <main>
        <h1>Methodology & Delivery — Approach.</h1>
        <p>From strategy to scale. A disciplined four-phase delivery methodology.</p>
        <ol>
          <li><h2>01. Discovery & Onboarding</h2><p>Brand questionnaire, competitor analysis, and audience persona mapping.</p></li>
          <li><h2>02. Design & Strategy</h2><p>Moodboards, logo suite creation, and 30-day content calendar.</p></li>
          <li><h2>03. Build & Launch</h2><p>High-speed web engineering and Reels & media production.</p></li>
          <li><h2>04. Management & Scaling</h2><p>Continuous engagement and rigorous monthly performance reporting.</p></li>
        </ol>
      </main>
      <footer><p>&copy; 2026 Prismbee.</p></footer>
    `
  },
  {
    path: 'why-prismbee',
    title: 'Why Prismbee | Digital Growth Agency & Brand Scaling',
    description:
      'Learn why ambitious brands choose Prismbee for organic social dominance, cinematic video editing, and conversion-focused web engineering. Meet the agency.',
    canonical: 'https://www.prismbee.site/why-prismbee',
    h1: 'About Prismbee — Company.',
    content: `
      <header>
        <nav aria-label="Primary navigation"><a href="/">Prismbee</a></nav>
      </header>
      <main>
        <h1>About Prismbee — Company.</h1>
        <p>Prismbee is an elite digital growth agency combining full-stack web engineering, cinematic video editing, and organic social dominance.</p>
        <h2>Our Three Integrated Engines</h2>
        <ul>
          <li>Organic Social Marketing — Reach & Authority</li>
          <li>Full-Stack Web Engineering — Performance Infrastructure</li>
          <li>Cinematic Video Editing — Retention & Creative</li>
          <li>Brand Systems & Visuals — Long-Term Equity</li>
        </ul>
      </main>
      <footer><p>&copy; 2026 Prismbee.</p></footer>
    `
  },
  {
    path: 'packages',
    title: 'Digital Growth Packages & Pricing Scopes | Prismbee',
    description:
      'Explore flexible growth packages tailored to your brand stage. From foundational social & web to enterprise video and brand scaling, see Prismbee pricing.',
    canonical: 'https://www.prismbee.site/packages',
    h1: 'Investment & Scopes — Pricing.',
    content: `
      <header>
        <nav aria-label="Primary navigation"><a href="/">Prismbee</a></nav>
      </header>
      <main>
        <h1>Investment & Scopes — Pricing.</h1>
        <p>Flexible packages, clear results. Every engagement is scoped to your brand's exact growth stage.</p>
        <section>
          <h2>Starter</h2>
          <p>Foundational brand identity and single-channel organic engine.</p>
        </section>
        <section>
          <h2>Growth (Most Popular)</h2>
          <p>Complete multi-platform growth engine and conversion infrastructure.</p>
        </section>
        <section>
          <h2>Authority</h2>
          <p>Full-service enterprise scale for industry category leaders.</p>
        </section>
      </main>
      <footer><p>&copy; 2026 Prismbee.</p></footer>
    `
  },
  {
    path: 'contact',
    title: 'Contact Prismbee | Book a Digital Growth Strategy Call',
    description:
      'Ready to turn attention into revenue? Contact Prismbee today to discuss your video production, social media content, and web design goals. Book a free call.',
    canonical: 'https://www.prismbee.site/contact',
    h1: 'Get in Touch — Contact.',
    content: `
      <header>
        <nav aria-label="Primary navigation"><a href="/">Prismbee</a></nav>
      </header>
      <main>
        <h1>Get in Touch — Contact.</h1>
        <p>Ready to talk? Tell us where your brand is today and where you want it to go.</p>
        <h2>New Business Inquiries</h2>
        <p>Email: <a href="mailto:contact@prismbee.site">contact@prismbee.site</a></p>
        <p>Expected response time: within 24 business hours.</p>
      </main>
      <footer><p>&copy; 2026 Prismbee.</p></footer>
    `
  }
];

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

    // Update #root innerHTML
    pageHtml = pageHtml.replace(
      /<div id="root">[\s\S]*?<\/div>/,
      `<div id="root">${page.content}\n    </div>`
    );

    fs.writeFileSync(path.join(pageDir, 'index.html'), pageHtml, 'utf8');
    console.log(`Prerendered: dist/${page.path}/index.html`);
  }

  console.log('All static pages prerendered successfully.');
}

prerender();
