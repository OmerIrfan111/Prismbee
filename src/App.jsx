import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
          <Route path="solutions" element={<Navigate to="/services" replace />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="approach" element={<Navigate to="/how-it-works" replace />} />
          <Route path="why-prismbee" element={<WhyPrismbee />} />
          <Route path="company" element={<Navigate to="/why-prismbee" replace />} />
          <Route path="packages" element={<Pricing />} />
          <Route path="pricing" element={<Navigate to="/packages" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
