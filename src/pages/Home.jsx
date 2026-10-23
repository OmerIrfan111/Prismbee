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
        title="Web & Creative Agency for Video, Content and Growth | Prismbee"
        description="Prismbee is a web agency and creative agency for brands in the US, UK, Canada and Europe: video editing, social media management and web design that converts."
        canonical="https://www.prismbee.site/"
      />
      <Hero
        eyebrow="Digital Growth Agency"
        headline="Attention."
        subtitle="Prismbee is an elite digital growth agency combining viral organic social media content, cinematic video production, and high-converting web design to scale modern brands. A web agency and creative agency in one team."
        trustStrip={true}
      />
      <SocialProof />
      <HomeServices />
      <WorkGrid limit={4} showHeader={true} title="Selected Video & Motion Work" />
      <StatsBar />
      <FooterCTA />
    </>
  );
}

