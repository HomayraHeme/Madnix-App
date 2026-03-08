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
import Marquee2 from './components/Marquee2';

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
      { threshold: 0.1, rootMargin: '0px 0px 0px 0px' }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <Benefits />
      <Marquee2></Marquee2>
      <Doctors />
      <Testimonials />
      <Blog />
      <Footer />

       <button
  className="fixed bottom-[40px] right-[40px] w-14 h-14 bg-[#17A2B8] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(23,162,184,0.3)] transition-all duration-500 z-[999] cursor-pointer group overflow-visible"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  aria-label="Scroll to top"
>
  {/* Icon with hover movement */}
  <svg 
    width="24" height="24" viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
    className="transition-transform duration-500 group-hover:-translate-y-1 z-10"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>

   {/* Top line */}
  <span className="absolute top-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
  
  {/* Right line */}
  <span className="absolute top-0 right-0 w-[2px] h-0 bg-white transition-all duration-300 delay-100 group-hover:h-full"></span>
  
  {/* Bottom line */}
  <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-white transition-all duration-300 delay-200 group-hover:w-full"></span>
  
  {/* Left line */}
  <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-white transition-all duration-300 delay-300 group-hover:h-full"></span>

   <span className="absolute inset-[-4px] border border-[#17A2B8]/20 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"></span>
</button>
    </div>
  );
}

export default App;
