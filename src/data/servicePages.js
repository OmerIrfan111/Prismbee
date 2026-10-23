/**
 * Dedicated service page content for Prismbee's three core search lines:
 * video editing, social media content & management, and web design & development.
 *
 * Consumed by:
 *  - src/components/ServicePage.jsx (renders the page in the React app)
 *  - scripts/prerender.js (injects the same copy as crawlable static HTML,
 *    including the full FAQ text, for non-JavaScript crawlers and AI bots)
 *
 * Truth rule: Prismbee publishes no prices, no turnaround times, and no
 * revision counts. Packages are Starter / Growth / Authority, all priced
 * "Custom Scope". FAQ answers on pricing, timelines, and revisions say
 * exactly that — terms are agreed in writing in the project scope first.
 */

export const servicePages = [
  {
    slug: 'video-editing',
    path: '/services/video-editing',
    eyebrow: 'Video Editing Services',
    title: 'Video Editing Services for Brands and Creators | Prismbee',
    description:
      'Professional video editing services from Prismbee: high-retention Reels, commercial video edits and 3D motion design for brands in the US, UK, Canada and Europe.',
    canonical: 'https://www.prismbee.site/services/video-editing',
    h1: 'Video Editing Services for Brands & Creators',
    intro: [
      'Prismbee provides video editing services for brands and creators who need every video to hold attention and drive action. Our editors turn your footage into high-retention commercial video, engineered with hooks that captivate audiences in the first 3 seconds and visual storytelling that converts attention into revenue.',
      'From short-form Reels and TikTok edits to cinematic brand films and 3D motion design, video production is one of Prismbee\'s core service lines — not an add-on. We work with brands and creators across the United States, the United Kingdom, Canada, and Europe, and your edits are produced inside the same growth system as our social media management and web design services, so every video supports a wider strategy.',
      'If you record content but lose hours editing it — or your videos are not retaining viewers — this is the service built for you.'
    ],
    included: [
      'High-retention commercial video editing',
      'Short-form Reels and social video production',
      'Hooks structured to land in the first 3 seconds',
      '3D motion design and visual effects',
      'Visual storytelling shaped around your brand identity',
      'Video content production included in Growth and Authority packages'
    ],
    faqs: [
      {
        question: 'What is included in your video editing services?',
        answer:
          'Every engagement covers high-retention commercial video editing of your footage, hooks structured to captivate viewers in the first 3 seconds, and visual storytelling shaped around your brand. Depending on your package, that includes short-form Reels and social video production, 3D motion design, and ongoing video content production (included in the Growth and Authority packages). The exact deliverables for your brand are listed in writing in your project scope before work starts.'
      },
      {
        question: 'How fast is the turnaround on video edits?',
        answer:
          'We do not publish a fixed turnaround time, because honest timelines depend on video length, volume, and complexity. Your delivery schedule is agreed in writing in the project scope before work starts, so you know exactly when to expect each edit. For ongoing content, edits are produced to an agreed recurring schedule alongside your content calendar.'
      },
      {
        question: 'How do revisions work?',
        answer:
          'Revision rounds are agreed in writing in your project scope before editing begins. You review each edit, give us your feedback, and we refine the video within the agreed rounds. If you later want changes that go beyond the agreed scope — a different concept, new footage, or a new format — we scope and quote that separately before doing the work.'
      },
      {
        question: 'How much do your video editing services cost?',
        answer:
          'Pricing is custom scope: we do not publish a public price list, because the right price depends on your video volume, formats, and production level. Video editing is available on its own or inside our Starter, Growth, and Authority packages. After a short discovery call we send you a written quote with the full scope, so you know exactly what is included before you commit.'
      },
      {
        question: 'Who are your video editing services for?',
        answer:
          'Brands and creators in the US, UK, Canada, and Europe who publish video regularly and want it edited to a professional, high-retention standard — including businesses already filming content in-house and creators whose editing is slowing down their publishing. It is also a strong fit if you want one team handling editing together with social media management and your website.'
      },
      {
        question: 'How do we get started?',
        answer:
          'Book a free call through our contact page. We start with discovery — understanding your brand, footage, and goals — then agree the scope, deliverables, revision rounds, and timeline in writing. Once the scope is signed off, production starts and your edits are delivered to the agreed schedule.'
      }
    ]
  },
  {
    slug: 'social-media-management',
    path: '/services/social-media-management',
    eyebrow: 'Social Media Management',
    title: 'Social Media Management and Content Services | Prismbee',
    description:
      'Social media management and content services from Prismbee: organic management for TikTok, Instagram and LinkedIn, Reels production, content calendars and monthly analytics.',
    canonical: 'https://www.prismbee.site/services/social-media-management',
    h1: 'Social Media Management & Content Services',
    intro: [
      'Prismbee\'s social media management services give your brand a full organic growth team: multi-platform management across TikTok, Instagram, and LinkedIn, viral Reels production, content calendars, community growth, and monthly ROI analytics — all run for you, month after month.',
      'Organic content is where Prismbee started, and it shows in the system. Content is planned on monthly calendars, produced by the same team behind our video editing services, and reviewed against monthly analytics so your channels keep improving instead of posting at random. We manage social media for brands across the United States, the United Kingdom, Canada, and Europe.',
      'Paid amplification is available too: Meta ads can be added as a supplementary service on top of your organic management when you are ready to scale what is already working.'
    ],
    included: [
      'Multi-platform organic management across TikTok, Instagram, and LinkedIn',
      'Reels and video content production',
      'Monthly content calendars planned in advance',
      'Community growth, plus daily community management and engagement on Growth and Authority',
      'Monthly ROI analytics and performance reporting',
      'Meta ads management available as a supplementary add-on',
      '1 platform on Starter, 3 platforms on Growth, full multi-platform management on Authority'
    ],
    faqs: [
      {
        question: 'What is included in your social media management services?',
        answer:
          'Management covers organic content across your chosen platforms — TikTok, Instagram, and LinkedIn — including Reels and video content production, monthly content calendars, community growth, and monthly ROI analytics reporting. Growth adds daily community management and engagement plus a comprehensive monthly growth report; Authority adds full multi-platform management and bi-weekly strategic sessions. Your exact deliverables are listed in writing in your scope before we start.'
      },
      {
        question: 'How far in advance is content planned, and how fast do we launch?',
        answer:
          'Social content runs on monthly calendars, planned and produced in advance so your channels publish consistently. We do not publish a fixed launch or turnaround time, because the schedule depends on your platforms, content volume, and approvals. Your start date and posting cadence are agreed in writing in the project scope before work starts.'
      },
      {
        question: 'How do revisions and approvals work for social content?',
        answer:
          'Content is produced against the monthly calendar so you can review and approve posts before they go live. The number of revision rounds is agreed in writing in your scope before the month starts. Feedback is applied within those agreed rounds, and anything beyond the agreed scope — additional formats or extra campaigns, for example — is scoped separately first.'
      },
      {
        question: 'How much does social media management cost?',
        answer:
          'Pricing is custom scope and we do not publish a public price list. Management is sold in three packages: Starter covers 1 platform, Growth covers 3 platforms with Reels and video content production, and Authority covers full multi-platform management with a dedicated senior account manager. After a short discovery call you receive a written quote showing exactly what your package includes.'
      },
      {
        question: 'Who are your social media management services for?',
        answer:
          'Brands and creators in the US, UK, Canada, and Europe that want a consistent, professional organic presence without hiring an in-house team — especially businesses whose content is inconsistent today, or whose team has no time for calendars, production, and community management. It pairs naturally with our video editing and web design services if you want one agency across channels.'
      },
      {
        question: 'How do we get started?',
        answer:
          'Book a free call through our contact page. We begin with discovery and strategy — your brand, audience, and platforms — then agree your package, platforms, posting cadence, and revision process in writing. From there we build your first monthly content calendar and management begins.'
      }
    ]
  },
  {
    slug: 'web-design',
    path: '/services/web-design',
    eyebrow: 'Web Design & Development',
    title: 'Web Design and Development Services | Prismbee',
    description:
      'Web design and development services from Prismbee: bespoke, high-speed websites and landing pages built to convert visitors into clients. Book a free call.',
    canonical: 'https://www.prismbee.site/services/web-design',
    h1: 'Web Design & Development Services',
    intro: [
      'Prismbee\'s web design and development services build the home your growth runs on: bespoke, high-speed websites and landing pages, built on modern architectures and engineered to convert incoming traffic into qualified leads and paying clients.',
      'Because Prismbee also runs your content, your website is designed from day one to receive organic social traffic and turn it into enquiries — with UX/UI shaped around how your visitors actually buy. We build websites for brands across the United States, the United Kingdom, Canada, and Europe, from focused 5-page platforms to dedicated landing pages and custom web applications.',
      'Every build runs through our four-stage process — discovery, strategy, build, and scaling — so you always know what phase your website is in and what comes next.'
    ],
    included: [
      'Bespoke website design and development',
      'High-converting landing pages',
      'UX/UI design shaped around your buyers',
      'High-speed builds on modern architectures',
      'A high-converting 5-page web platform on Starter',
      'Dedicated landing pages on Growth, custom web application or platform on Authority',
      'Built to convert social and organic traffic into qualified leads'
    ],
    faqs: [
      {
        question: 'What is included in your web design and development services?',
        answer:
          'A complete design and build service: bespoke website design, UX/UI, development on modern high-speed architectures, and landing pages engineered to convert. The Starter package includes a high-converting 5-page web platform; Growth adds dedicated landing pages; Authority covers a custom web application or platform. Your pages, features, and deliverables are listed in writing in your project scope before the build starts.'
      },
      {
        question: 'How long does a website take to build?',
        answer:
          'We do not publish a fixed build time, because timelines depend on the size of the site and the features you need. Websites run in phases — discovery, strategy, then build — and your timeline for each phase is agreed in writing in the project scope before work starts, so you always know what is happening and when to expect delivery.'
      },
      {
        question: 'How do revisions work during a website build?',
        answer:
          'Revision rounds for design and build are agreed in writing in your project scope before work starts. You review the work at each phase and give feedback, and we refine it within the agreed rounds. Requests that go beyond the agreed scope — extra pages, new functionality, or a change of direction — are scoped and quoted separately before we build them.'
      },
      {
        question: 'How much does a website cost?',
        answer:
          'Pricing is custom scope: we do not publish public prices, because the cost depends on your pages, features, and whether you need landing pages or a custom web application. Websites are available inside our Starter, Growth, and Authority packages. After a short discovery call you receive a written quote with the full scope and deliverables before you commit to anything.'
      },
      {
        question: 'Who are your web design services for?',
        answer:
          'Brands and businesses in the US, UK, Canada, and Europe that need a website which converts — a first professional site, a rebuild of an outdated one, or landing pages for campaigns and social traffic. It is a particularly strong fit if Prismbee already runs your content, because the site and the social channels are then designed as one growth system.'
      },
      {
        question: 'How do we get started?',
        answer:
          'Book a free call through our contact page. We start with discovery — your brand, goals, and the pages and features you need — then agree the scope, timeline, and revision rounds in writing. The build then moves through strategy and build phases, and we support the scaling phase once your site is live.'
      }
    ]
  }
];

export function getServicePage(slug) {
  return servicePages.find((page) => page.slug === slug);
}
