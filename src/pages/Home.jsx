import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import HomeServices from '../components/HomeServices';
import WorkGrid from '../components/WorkGrid';
import StatsBar from '../components/StatsBar';
import FooterCTA from '../components/FooterCTA';

export default function Home() {
  return (
    <>
      <SEO
        title="Digital Growth Agency | Video, Content & Web | Prismbee"
        description="Prismbee is a digital growth agency delivering viral content, video production and high-converting websites to scale your brand. Book a free call."
        canonical="https://www.prismbee.site/"
      />
      <Hero
        eyebrow="Digital Growth Agency"
        headline="Attention."
        subtitle="Prismbee is an elite digital growth agency combining viral organic social media content, cinematic video production, and high-converting web design to scale modern brands."
      />
      <SocialProof />
      <HomeServices />
      <WorkGrid limit={4} showHeader={true} title="Selected Video & Motion Work" />
      <StatsBar />
      <FooterCTA />
    </>
  );
}

