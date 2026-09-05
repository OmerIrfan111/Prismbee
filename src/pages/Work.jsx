import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import WorkGrid from '../components/WorkGrid';
import FooterCTA from '../components/FooterCTA';

export default function Work() {
  return (
    <>
      <Hero
        headline="Shipped."
        subtitle="Work that reimagines experiences, drives outcomes and leaves things better than we found them."
      />
      <SocialProof />
      <WorkGrid limit={6} />
      <FooterCTA />
    </>
  );
}
