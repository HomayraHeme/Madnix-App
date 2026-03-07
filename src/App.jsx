 import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Marquee from './components/Marquee';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Marquee />
      <Doctors />
      <Testimonials />
      <Blog />
      <Footer />

      <button
        className="fixed bottom-[40px] right-[40px] w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,163,196,0.3)] transition-all duration-500 z-[999] border-2 border-primary hover:bg-secondary hover:border-secondary hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(13,27,42,0.4)] cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:-translate-y-1">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}

export default App;
