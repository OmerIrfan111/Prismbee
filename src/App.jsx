import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyPrismbee from './components/WhyPrismbee';
import Pricing from './components/Pricing';
import StatsBar from './components/StatsBar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body text-body-text bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <WhyPrismbee />
        <Pricing />
        <StatsBar />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
