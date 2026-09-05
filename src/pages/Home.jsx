import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import WorkGrid from '../components/WorkGrid';
import StatsBar from '../components/StatsBar';
import FooterCTA from '../components/FooterCTA';

export default function Home() {
  return (
    <>
      <Hero
        headline="Attention."
        subtitle="We fuse high-converting web engineering, cinematic video editing, and organic social dominance to turn attention into revenue."
      />
      <SocialProof />
      <WorkGrid limit={4} />
      <StatsBar />
      <FooterCTA />
    </>
  );
}
