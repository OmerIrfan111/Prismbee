import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import WorkGrid from '../components/WorkGrid';
import FooterCTA from '../components/FooterCTA';

export default function Work() {
  return (
    <>
      <SEO
        title="Video Production & Web Design Portfolio | Prismbee"
        description="Explore client case studies and selected work by Prismbee, featuring viral organic video production, 3D motion design, and high-converting web engineering."
        canonical="https://www.prismbee.site/work"
      />
      <Hero
        eyebrow="Selected Portfolio"
        headline="Produced."
        subtitle="High-converting web platforms, viral video edits, and multi-channel marketing campaigns engineered to scale modern brands."
      />
      <SocialProof />
      <WorkGrid limit={6} showHeader={true} title="Selected Client Work" />
      <FooterCTA />
    </>
  );
}

