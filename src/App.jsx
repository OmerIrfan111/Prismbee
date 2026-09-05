import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyPrismbee from './components/WhyPrismbee';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="approach" element={<HowItWorks />} />
          <Route path="why-prismbee" element={<WhyPrismbee />} />
          <Route path="company" element={<WhyPrismbee />} />
          <Route path="packages" element={<Pricing />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
