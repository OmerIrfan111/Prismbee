# Prismbee Agency Homepage — Antigravity Build Prompt

## Project Overview

Build a **single-page marketing homepage** for **Prismbee**, a digital growth agency. The site must feel like a high-ticket, premium agency — not a template. It combines the precision of a prism (multi-faceted strategy) with the energy of a honeybee (speed, collaboration, execution). The visual language should feel modern, sophisticated, and conversion-optimized.

---

## Tech Stack

- **React** (functional components + hooks)
- **Tailwind CSS v4** (utility-first, no custom CSS files unless necessary)
- **Framer Motion** (animations — use sparingly and intentionally)
- **React Scroll** or native smooth scroll for navigation
- **Lucide React** for icons
- **Google Fonts** — load via `<link>` in `index.html`:
  - `Plus Jakarta Sans` (weights: 400, 500, 600, 700, 800)
  - `Inter` (weights: 400, 500)
  - `Instrument Serif` (for editorial headline accents only)

---

## Brand Token System

Apply these exact values everywhere. Do not improvise colors.

### Colors
```
--color-obsidian:   #064E3B   /* Primary dark — backgrounds, logos, headings */
--color-emerald:    #10B981   /* CTA buttons, active states, H3 subheadings */
--color-mint:       #A7F3D0   /* Glow accents, hover states, badges, borders */
--color-mist:       #F0FDF4   /* Section backgrounds, alternating fills */
--color-white:      #FFFFFF   /* Cards, modals, form inputs */
--color-body-text:  #334155   /* Body paragraphs */
```

### Typography Scale
| Level | Font | Weight | Size | Tracking | Color |
|---|---|---|---|---|---|
| H1 / Display | Plus Jakarta Sans | 800 | 48–64px | -0.02em | #064E3B or #FFFFFF |
| H2 / Section | Plus Jakarta Sans | 600 | 28–36px | -0.01em | #064E3B |
| H3 / Subhead | Plus Jakarta Sans | 500 | 16–20px | normal | #10B981 |
| Body | Inter | 400 | 15–16px | normal | #334155 |
| CTA Labels | Plus Jakarta Sans | 700 | 13–14px | +0.05em UPPERCASE | #FFFFFF on #10B981 |
| Editorial Accent | Instrument Serif | 400 italic | Used in hero headline only | — | — |

### UI Components
- **Primary CTA Button:** Background `#10B981`, white uppercase text, `border-radius: 6px`, subtle `box-shadow: 0 0 20px rgba(16,185,129,0.3)` glow on hover
- **Secondary CTA Button:** `border: 1.5px solid #064E3B`, transparent background, obsidian text
- **Cards:** White background, `border: 1px solid #A7F3D0`, `box-shadow: 0 4px 24px rgba(6,78,59,0.05)`
- **Section alternation:** Odd sections on `#FFFFFF`, even sections on `#F0FDF4`

---

## Page Structure & Section Specs

Build the following sections **in this exact order**:

---

### 1. Sticky Navigation Bar

- **Background:** `#064E3B` (Deep Obsidian Emerald), full width
- **Left:** Prismbee wordmark — text logo in white using Plus Jakarta Sans 700. Add a small geometric hexagon/prism SVG icon to the left of the text in `#10B981`.
- **Center (desktop):** Nav links — `Services`, `How It Works`, `Why Prismbee`, `Packages`, `Contact` — in white, 14px Inter. On hover: underline in `#10B981`.
- **Right:** Single CTA button — `"Get a Free Strategy Call"` — Primary button style (emerald background, white text).
- **Mobile:** Hamburger menu that opens a full-screen drawer with the same links.
- **Behavior:** Transparent on page load, transitions to obsidian background after 60px scroll (using `useEffect` scroll listener). Smooth transition.

---

### 2. Hero Section

- **Background:** Deep obsidian `#064E3B` with a very subtle geometric mesh/grid SVG pattern overlay at low opacity (~5%) — hexagonal or diamond grid to evoke the prism/hive concept.
- **Layout:** Two-column on desktop (left: text, right: visual), single column stacked on mobile.

**Left column — Copy:**
```
[H3 — Electric Emerald #10B981]
Digital Growth Agency

[H1 — White, 56–64px, Plus Jakarta Sans 800]
We Turn Attention
Into Revenue.
(wrap "Revenue." with Instrument Serif italic for editorial contrast on this word only)

[Body — Slate #94A3B8, max-width 480px]
Prismbee is your end-to-end growth partner — combining organic social media dominance, high-converting web platforms, and precision brand identity design to scale modern brands.

[Two buttons side by side]
[Primary CTA] "Start Growing"
[Secondary CTA — white border, white text] "View Our Services"
```

**Right column — Visual:**
- Animated floating "metrics dashboard" card built in pure HTML/CSS:
  - Dark card (`#0a3d2e`) with mint border, showing fake metrics:
    - "Organic Reach" `+284%` (in emerald, large font)
    - "Conversion Rate" `+67%`
    - "Monthly Revenue" `$124K`
  - Small sparkline SVG charts next to each metric (static but styled)
  - Subtle `transform: translateY()` float animation on a loop (Framer Motion, 6s ease-in-out)
- Behind the card: geometric prism/diamond SVG shape glowing in mint `#A7F3D0` at low opacity — purely decorative, blurred

**Animation:** On page load, left column fades in from left (x: -30 → 0), right card fades in from right (x: +30 → 0). One single orchestrated entrance. No per-element staggered scrolling.

---

### 3. Social Proof Strip (Marquee)

- **Background:** `#F0FDF4` (Mint Mist)
- **Content:** Infinite horizontal auto-scroll marquee of trust indicators:
  - `★★★★★  "Prismbee tripled our Instagram reach in 60 days."`
  - `★★★★★  "The website they built converts at 3x our old one."`
  - `★★★★★  "Best agency investment we've made."`
  - `★★★★★  "Our brand finally looks as premium as our product."`
  - Repeat the set seamlessly
- **Style:** Inter 14px, `#334155` body, stars in `#10B981`. Separated by `|` dividers in `#A7F3D0`.
- **Implementation:** CSS `@keyframes marquee` scroll, no JS library needed. Pause on hover.

---

### 4. Services Section — "Three Pillars of Growth"

- **Background:** White `#FFFFFF`
- **Section Header (centered):**
  ```
  [H3 Emerald] What We Do
  [H2 Obsidian] Three Pillars of Growth
  [Body text] One partner. Every channel. Total growth system.
  ```
- **Layout:** Three equal cards in a row (grid, desktop). Stack on mobile.

**Card 1 — Social Media & Organic Growth**
- Icon: a stylized flame or graph SVG in emerald
- Title (H3): "Organic Social Growth"
- Body: "Full multi-platform management across Instagram, TikTok, LinkedIn, and more — with Reels, content calendars, community engagement, and monthly analytics."
- Footer tag list: `Instagram` · `TikTok` · `LinkedIn` · `Facebook` · `X`

**Card 2 — Web Engineering & Design** *(visually highlighted — add mint border glow to make this feel "featured")*
- Icon: code brackets or window SVG in emerald
- Title (H3): "Web Design & Development"
- Body: "Bespoke, high-speed websites and landing pages built on Framer or Webflow — designed to convert incoming traffic into leads and paying clients."
- Footer tag list: `Framer` · `Webflow` · `Landing Pages` · `Hosting` · `UX/UI`

**Card 3 — Brand Identity**
- Icon: palette or diamond SVG in emerald
- Title (H3): "Brand Identity & Visual Systems"
- Body: "Logo suites, color palettes, typography systems, and brand guidelines that build instant trust and separate you from every competitor."
- Footer tag list: `Logo Design` · `Brand Guidelines` · `Typography` · `Color Systems`

---

### 5. How It Works — "4-Phase Delivery"

- **Background:** `#F0FDF4` (Mint Mist)
- **Section Header (centered):**
  ```
  [H3 Emerald] Our Process
  [H2 Obsidian] From Strategy to Scale
  ```
- **Layout:** Horizontal stepper on desktop (4 phases connected by a dashed line in `#A7F3D0`). Vertical on mobile.

**Four phases — use the actual Prismbee workflow:**

| Phase | Label | Description |
|---|---|---|
| 01 | Discovery & Onboarding | Brand questionnaire, competitor analysis, audience persona mapping, and technical access setup. |
| 02 | Design & Strategy | Moodboards, logo suite creation, site wireframes, and a full 30-day content calendar. |
| 03 | Build & Launch | Web development, hosting, Reels editing, caption writing, and initial publishing. |
| 04 | Management & Scaling | Daily engagement, publishing, platform optimization, and monthly performance reporting. |

- Number labels (`01`, `02` etc.) in Plus Jakarta Sans 800, `#10B981`
- Phase title in Plus Jakarta Sans 600, `#064E3B`
- Description in Inter 400, `#334155`
- Note: number markers are justified here because this IS a genuine sequence

---

### 6. Why Prismbee — USP Section

- **Background:** `#064E3B` (Deep Obsidian) — full dark section
- **Section Header (centered, white text):**
  ```
  [H3 Mint #A7F3D0] Why We're Different
  [H2 White] Built for Brands That
  Refuse to Be Generic.
  ```
- **Layout:** 3-column feature grid, or asymmetric 2+1 layout.

**Feature blocks (white text on dark background):**

1. **End-to-End Integration** — "We connect audience attention (social content) directly to conversion infrastructure (websites, landing pages). No handoff gaps."
2. **Data-Backed Everything** — "Every strategy is continuously refined against real analytics. No guesswork, no vanity metrics — only decisions that move revenue."
3. **Consistent Quality Control** — "All design, copy, and code ships through strict QA checklists. You get polished deliverables, every single time."

- Icon for each: a simple geometric SVG (target, chart, checkmark) in `#10B981`
- Subtle `#A7F3D0` mint horizontal rule to separate this visually

---

### 7. Packages / Pricing Teaser

- **Background:** White `#FFFFFF`
- **Section Header (centered):**
  ```
  [H3 Emerald] Investment
  [H2 Obsidian] Flexible Packages, Clear Results
  [Body] Every Prismbee engagement is scoped to your brand's exact growth stage.
  ```
- **Layout:** Three cards side by side (Starter / Growth / Authority)

**Card 1 — Starter**
- Label: "Starter"
- Price: "Custom Quote"
- Bullet list (4 items): Brand identity setup · 1 platform social management · Basic website (5 pages) · Monthly analytics report
- CTA: "Get Started" (secondary button)

**Card 2 — Growth** *(featured — obsidian background, white text, mint accent border)*
- Label: "Growth" with a badge: "Most Popular"
- Price: "Custom Quote"
- Bullet list (6 items): Full brand system · 3-platform social management · Website + 2 landing pages · Reels & Shorts production · Community management · Monthly growth report
- CTA: "Book a Call" (primary emerald button)

**Card 3 — Authority**
- Label: "Authority"
- Price: "Custom Quote"
- Bullet list (6 items): Premium brand identity · Full multi-platform management · Custom web platform · Video production · Dedicated account manager · Bi-weekly strategy sessions
- CTA: "Get Started" (secondary button)

---

### 8. Results / Stats Bar

- **Background:** `#10B981` (Electric Emerald) — bold full-width strip
- **Layout:** 4 stats in a row, centered, white text

| Stat | Label |
|---|---|
| 50+ | Brands Scaled |
| 284% | Avg. Organic Reach Increase |
| 3× | Average Conversion Rate Lift |
| 60 Days | Avg. Time to First Results |

- Stat number: Plus Jakarta Sans 800, 48px, white
- Label: Inter 400, 14px, white at 80% opacity
- Add a `useEffect` counter animation that counts up from 0 when the section enters the viewport (IntersectionObserver)

---

### 9. Contact / CTA Section

- **Background:** `#064E3B` (Deep Obsidian)
- **Layout:** Centered, two-column (text left, form right) on desktop

**Left — Copy:**
```
[H3 Mint] Ready to Scale?
[H2 White] Let's Build Your
Growth Engine.
[Body Slate-300]
Tell us where your brand is today and where you want it to go. We'll map out exactly how Prismbee gets you there.
```

**Right — Contact Form:**
Fields: Name · Email · Brand/Company · Service Interest (dropdown: Social Media / Web Design / Brand Identity / Full Package) · Brief message
- Form background: white card, card border `#A7F3D0`
- CTA button: Primary (emerald) — `"Send Message"`
- Form is UI-only (no backend). On submit, show a success state: replace form with a checkmark icon and `"We'll be in touch within 24 hours."`

---

### 10. Footer

- **Background:** `#064E3B`
- **Layout:** 4-column grid

**Columns:**
1. **Brand** — Prismbee logo (white wordmark), tagline "Scale Smarter. Grow Faster.", social icons (Instagram, LinkedIn, TikTok, X) in `#A7F3D0` on hover
2. **Services** — Social Media Management · Web Design & Development · Brand Identity
3. **Company** — About · Process · Packages · Contact
4. **Contact** — `hello@prismbee.com` · "Get a Free Strategy Call" (primary button)

- Divider line in `#A7F3D0` at 20% opacity
- Bottom bar: copyright `© 2026 Prismbee. All rights reserved.` in white 50% opacity, 13px Inter

---

## Responsive Behavior

- **Breakpoints:** Mobile-first. `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- Nav collapses to hamburger below `md`
- Hero goes single-column below `lg`
- Service cards stack below `md`
- Process stepper goes vertical below `md`
- Pricing cards stack below `lg`
- Stats bar wraps to 2×2 grid below `md`
- Contact section stacks below `lg`

---

## Animation Rules — Strict

- **One page-load entrance** in the hero only (fade in from sides). Nothing else auto-animates on load.
- **Scroll reveals:** Use Framer Motion `whileInView` with `once: true` on the section headers only — a single `opacity: 0 → 1, y: 20 → 0` transition per section. Do NOT add this to every card individually.
- **Counter animation** on the stats section (IntersectionObserver + `useEffect`).
- **Marquee scroll** on the social proof strip.
- **Button hover states:** Scale `1.02`, glow intensify. No other hover motion.
- `prefers-reduced-motion` media query: disable all animations when set.

---

## Code Quality Requirements

- All components in separate files under `/src/components/`
- No inline styles — Tailwind classes only (with occasional `style` prop for dynamic values like counter numbers)
- No placeholder lorem ipsum — use the actual Prismbee copy provided above
- All images are SVG-based or CSS-generated — no external image dependencies
- Mobile keyboard accessible (focus rings visible, `aria-label` on icon buttons)
- Smooth scroll behavior on `<html>` element
- Clean component naming: `Navbar`, `Hero`, `SocialProof`, `Services`, `HowItWorks`, `WhyPrismbee`, `Pricing`, `StatsBar`, `Contact`, `Footer`

---

## File Structure

```
/src
  /components
    Navbar.jsx
    Hero.jsx
    SocialProof.jsx
    Services.jsx
    HowItWorks.jsx
    WhyPrismbee.jsx
    Pricing.jsx
    StatsBar.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  index.css   (Tailwind directives + font imports only)
  main.jsx
index.html    (Google Fonts link tags here)
```

---

## Do Not Do

- Do not use stock photo placeholders or Unsplash links
- Do not use rounded corners larger than `8px` on cards — the brand is precise and geometric, not bubbly
- Do not use gradient backgrounds as decoration — keep them purposeful
- Do not add numbered markers (`01`, `02`) anywhere except the process section (which is a genuine sequence)
- Do not use `ALL CAPS` eyebrow labels above every heading — only on CTA button text
- Do not center-align body paragraph text — left-align only
- Do not add drop shadows heavier than `rgba(6,78,59,0.08)` — keep it airy
