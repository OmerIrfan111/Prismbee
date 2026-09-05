import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import WorkGrid from '../components/WorkGrid';
import FooterCTA from '../components/FooterCTA';

export default function Work() {
  return (
    <>
      <Hero
        headline="Produced."
        subtitle="High-converting web platforms, viral video edits, and multi-channel marketing campaigns engineered to scale modern brands."
      />
      <SocialProof />
      <WorkGrid limit={6} />
      <FooterCTA />
    </>
  );
}
