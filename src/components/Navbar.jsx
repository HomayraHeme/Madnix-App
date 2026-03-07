 import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', hasDropdown: true },
        { name: 'Pages', href: '#pages', hasDropdown: true },
        { name: 'Services', href: '#services', hasDropdown: true },
        { name: 'Case Studies', href: '#cases', hasDropdown: true },
        { name: 'Blogs', href: '#blog', hasDropdown: true },
        { name: 'Contact', href: '#contact', hasDropdown: false },
    ];

    return (
        <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'top-0' : 'top-6'}`}>
            <div className={`w-full  transition-all duration-500`}>
                <div className={`flex items-center justify-between px-8 h-20 transition-all duration-500
                    ${scrolled ? 'bg-[#0a1d2e] rounded-b-2xl shadow-xl' : 'bg-transparent'}
                `}>
                    {/* Logo   */}
                    <a href="#home" className="flex items-center">
                        <img
                            src="https://mednix.themeht.com/wp-content/uploads/2025/09/logo.svg"
                            alt="Mednix"
                            className="h-15 w-auto"
                        />
                    </a>

                    {/* Navigation   */}
                    <nav className={`
                        lg:flex items-center justify-center gap-3 px-1 py-1
                        bg-white/10 backdrop-blur-md border border-white/20 rounded-lg
                        transition-all duration-500
                        ${mobileOpen 
                            ? 'translate-y-0 opacity-100 pointer-events-auto'
                            : '-translate-y-20 opacity-0 pointer-events-none lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto'}
                    `}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`
                                    group flex flex-col items-center justify-center rounded-[5px] text-[13px] lg:text-[13px]  uppercase  
                                    ${link.name === 'Home' 
                                        ? 'bg-white text-[#0a1d2e] px-4 py-2' 
                                        : 'text-white hover:bg-white hover:text-[#0a1d2e] px-3 py-2'}
                                `}
                                onClick={() => setMobileOpen(false)}
                            >
                                <span>{link.name}</span>
                                {link.hasDropdown && (
                                    <svg 
                                        className={`w-3 h-3 -mt-0.5 transition-transform duration-300 group-hover:rotate-180 ${link.name === 'Home' ? 'text-[#0a1d2e]' : 'text-white/60'}`} 
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Right Options - fixed padding */}
                    <div className="flex items-center justify-between gap-4">
                        {/* Appointment Button */}
                        <a
    href="#appointment"
    className="group cursor-pointer relative bg-[#159fba] text-white font-bold text-sm px-2 py-3 rounded-[5px] transition-all duration-300 ease-in-out shadow hover:shadow-lg w-42 h-12 flex items-center gap-3 max-sm:hidden"
>
    <div className="relative pl-3 flex items-center justify-center gap-2 overflow-hidden">
       
        <span className="relative inline-block overflow-hidden">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                Appointment
            </span>
            <span className="absolute inset-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                Appointment
            </span>
        </span>

        
        <div className="relative  w-10 h-10 bg-white group-hover:bg-[#0a1d2e] rounded-[5px] flex items-center justify-center overflow-hidden transition-all duration-300">
           
            <HiOutlineArrowRight 
                size={14} 
                className="absolute text-[#0a1d2e] group-hover:text-white transition-all duration-500 transform group-hover:translate-x-8 group-hover:opacity-0"
            />
            
            <HiOutlineArrowRight 
                size={14} 
                className="absolute text-[#159fba] group-hover:text-white transition-all duration-500 transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            />
        </div>
    </div>
</a>

                        {/* Grid Icon */}
                        <button className="w-11 h-11 rounded-lg bg-black/20 border border-white/10 flex items-center justify-center text-white transition-all duration-500   hover:rotate-360 max-lg:hidden">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                            </svg>
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden text-white text-2xl w-11 h-11 flex items-center justify-center rounded-lg bg-white/10"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;