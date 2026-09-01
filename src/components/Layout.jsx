import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="font-body text-body-text bg-white min-h-screen flex flex-col overflow-x-hidden relative">
      <Navbar />
      <main className={`flex-grow ${isHomePage ? '' : 'pt-24'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
