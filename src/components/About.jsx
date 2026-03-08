 import { useEffect, useRef, useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import team from "../assets/doctor-team.png";
import { motion } from 'framer-motion';

const About = () => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const counted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !counted.current) {
                    counted.current = true;
                    let start = 0;
                    const end = 25;
                    const duration = 2000;
                    const step = duration / end;
                    const timer = setInterval(() => {
                        start++;
                        setCount(start);
                        if (start >= end) clearInterval(timer);
                    }, step);
                }
            },
            { threshold: 0.5 }
        );
        if (counterRef.current) observer.observe(counterRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="pt-16 md:pt-24 mb-3 pb-3 bg-white overflow-hidden px-4">
            <div className="max-w-[1320px] mx-auto px-4 md:px-5">
                {/* Header Section */}
                 <div className="mb-8 md:mb-12 text-center md:text-left">
    <motion.div 
        className="inline-flex items-center gap-2 bg-[#F1F7F3] rounded-full px-4 md:px-5 py-2 text-[14px] md:text-[15px] font-medium text-[#07112F] mb-4 md:mb-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
    >
        <span className="w-2 h-2 bg-[#17A2B8] rounded-full animate-pulse" />
        About Mednix
    </motion.div>
    
    <motion.h2 
        className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-[#07112F] leading-[1.1] tracking-tight"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
    >
        Caring for You <br className="hidden sm:block" />
        Like <span className="font-serif italic text-[#17A2B8] font-normal">Family Health</span>
    </motion.h2>
</div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

                    {/* Left & Middle: Image and Hours Overlap */}
                    <div className="lg:col-span-8 relative">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-[30px] md:rounded-[40px] overflow-hidden w-full lg:w-[90%] aspect-[4/3] md:aspect-[5/3] relative z-0">
                                <img
                                    src={team}
                                    alt="Medical Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlapping Hours Box - Responsive Positioning */}
                            <div className="relative lg:absolute z-10 
                                mt-4 lg:mt-0
                                lg:top-[-200px] lg:left-[65%] lg:translate-x-0
                                xl:left-[60%]
                                w-full lg:w-[80%] max-w-[340px] mx-auto lg:mx-0">
                                <div className="bg-[#17A2B8] rounded-[30px] p-6 md:p-8 text-white border-15 border-white">
                                    <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Opening Hours:</h3>
                                    <div className="space-y-4 md:space-y-6">
                                        <div className="flex justify-between items-center border-b border-white/20 pb-3 md:pb-4">
                                            <span className="opacity-80 text-sm md:text-base">Mon - Fri</span>
                                            <span className="font-bold text-sm md:text-base">9:00 - 18:00</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-white/20 pb-3 md:pb-4">
                                            <span className="opacity-80 text-sm md:text-base">Sat - Sun</span>
                                            <span className="font-bold text-sm md:text-base">8:00 - 16:00</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="opacity-80 text-sm md:text-base">Emergency</span>
                                            <span className="font-bold text-sm md:text-base">24/7 Hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Counter and Experts */}
                     <div className="lg:col-span-4 flex flex-col pt-6 lg:pt-0 relative lg:top-[-100px]">
    {/* 25+ Text with background image */}
    <motion.div 
        className="relative mb-3 md:mb-3 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
    >
        <h2
            className="text-[120px] sm:text-[150px] md:text-[180px] lg:text-[200px] font-black leading-none tracking-tighter select-none"
            style={{
                backgroundImage: "url('https://mednix.themeht.com/wp-content/uploads/2025/10/34.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}
        >
            25+
        </h2>
    </motion.div>

    {/* Experts Section */}
    <motion.div 
        className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-4 mb-6 md:mb-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
    >
        <motion.div 
            className="flex -space-x-3 md:-space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
        >
            {[
                "https://i.pravatar.cc/150?u=1",
                "https://i.pravatar.cc/150?u=2",
                "https://i.pravatar.cc/150?u=3"
            ].map((img, i) => (
                <motion.div 
                    key={i} 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white overflow-hidden shadow-md"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                    viewport={{ once: true }}
                >
                    <img src={img} alt="Expert" className="w-full h-full object-cover" />
                </motion.div>
            ))}
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
        >
            <p className="text-[#07112F] font-bold text-xs md:text-sm leading-tight uppercase text-center sm:text-left">
                Trusted Experts in Medical <br /> Health and Wellness
            </p>
        </motion.div>
    </motion.div>

    {/* Description Text */}
    <motion.p 
        className="text-[#555] text-slate-600 leading-relaxed max-w-[400px] text-center lg:text-left mx-auto lg:mx-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
    >
        We're committed to offering compassionate and comprehensive healthcare tailored to your needs. At Mednix, your health is our priority every step of the way.
    </motion.p>
    
    {/* Button */}
    <motion.div 
        className="flex justify-center lg:justify-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
    >
        <a
            href="#appointment"
            className="group cursor-pointer relative bg-[#159fba] text-white mt-6 px-2 py-3 rounded-[5px] transition-all duration-300 ease-in-out shadow hover:shadow-lg w-40 md:w-45 h-12 flex items-center gap-3"
        >
            <div className="relative pl-3 flex items-center justify-center gap-2 overflow-hidden">
                <span className="relative inline-block overflow-hidden">
                    <span className="block transition-transform duration-500 group-hover:-translate-y-full text-sm md:text-base">
                        Discover More
                    </span>
                    <span className="absolute inset-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-sm md:text-base">
                        Discover More
                    </span>
                </span>

                <div className="relative w-7 h-7 md:w-8 md:h-8 bg-white group-hover:bg-[#0a1d2e] rounded-[5px] flex items-center justify-center overflow-hidden transition-all duration-300">
                    <HiOutlineArrowRight 
                        size={12} 
                        className="absolute text-[#0a1d2e] group-hover:text-white transition-all duration-500 transform group-hover:translate-x-8 group-hover:opacity-0"
                    />
                    
                    <HiOutlineArrowRight 
                        size={12} 
                        className="absolute text-[#159fba] group-hover:text-white transition-all duration-500 transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                </div>
            </div>
        </a>
    </motion.div>
</div>
                </div>
            </div>
        </section>
    );
};

export default About;