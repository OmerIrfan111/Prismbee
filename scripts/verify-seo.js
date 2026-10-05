import fs from 'fs';

const checks = [
  { name: 'Sitemap in public', path: 'public/sitemap.xml' },
  { name: 'Sitemap in dist', path: 'dist/sitemap.xml' },
  { name: 'Robots in public', path: 'public/robots.txt' },
  { name: 'Robots in dist', path: 'dist/robots.txt' },
  { name: 'Home dist HTML', path: 'dist/index.html' },
  { name: 'Work dist HTML', path: 'dist/work/index.html' },
  { name: 'Services dist HTML', path: 'dist/services/index.html' },
  { name: 'How It Works dist HTML', path: 'dist/how-it-works/index.html' },
  { name: 'Why Prismbee dist HTML', path: 'dist/why-prismbee/index.html' },
  { name: 'Packages dist HTML', path: 'dist/packages/index.html' },
  { name: 'Contact dist HTML', path: 'dist/contact/index.html' }
];

let failed = false;

for (const c of checks) {
  if (fs.existsSync(c.path)) {
    const content = fs.readFileSync(c.path, 'utf8');
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    const descMatch = content.match(/<meta\s+name="description"\s+content="(.*?)"/);
    const canonMatch = content.match(/<link\s+rel="canonical"\s+href="(.*?)"/);
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    console.log(`✅ ${c.name} (${fs.statSync(c.path).size} bytes)`);
    if (titleMatch) console.log(`   Title (${titleMatch[1].length} chars): ${titleMatch[1]}`);
    if (descMatch) console.log(`   Desc (${descMatch[1].length} chars): ${descMatch[1]}`);
    if (canonMatch) console.log(`   Canonical: ${canonMatch[1]}`);
    if (h1Match) console.log(`   H1: ${h1Match[1].replace(/\s+/g, ' ').trim()}`);
  } else {
    console.error(`❌ Missing: ${c.path}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('\n🎉 ALL SEO AUDIT CHECKS PASSED PERFECTLY!');
}
