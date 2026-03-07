 import { useEffect, useRef, useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import team from "../assets/doctor-team.png";

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
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-5">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#F1F7F3] rounded-full px-5 py-2 text-[15px] font-medium text-[#07112F] mb-6">
                        <span className="w-2 h-2 bg-[#17A2B8] rounded-full animate-pulse" />
                        About Mednix
                    </div>
                    <h2 className="text-[60px] md:text-[60px] font-bold text-[#07112F] leading-[1.1] tracking-tight">
                        Caring for You <br />
                        Like <span className="font-serif italic text-[#17A2B8] font-normal">Family Health</span>
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left & Middle: Image and Hours Overlap */}
                    <div className="lg:col-span-8 relative">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-[40px] overflow-hidden w-full lg:w-[90%] aspect-[5/3] relative z-0">
                                <img
                                    src={team}
                                    alt="Medical Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlapping Hours Box */}
                             
<div className="absolute z-10 
    top-[90%] left-1/2 -translate-x-1/2 
    lg:top-[-200px] lg:left-[65%] lg:translate-x-0
    xl:left-[60%]
    w-[80%] max-w-[340px] bg-[#17A2B8] rounded-[30px] p-8 text-white  border border-20 border[#f8f9fa]">
    
    <h3 className="text-2xl font-bold mb-8">Opening Hours:</h3>
    <div className="space-y-6">
        <div className="flex justify-between items-center border-b border-white/20 pb-4">
            <span className="opacity-80">Mon - Fri</span>
            <span className="font-bold">9:00 - 18:00</span>
        </div>
        <div className="flex justify-between items-center border-b border-white/20 pb-4">
            <span className="opacity-80">Sat - Sun</span>
            <span className="font-bold">8:00 - 16:00</span>
        </div>
        <div className="flex justify-between items-center">
            <span className="opacity-80">Emergency</span>
            <span className="font-bold">24/7 Hours</span>
        </div>
    </div>
</div>
                        </div>
                    </div>

                    {/* Right: Counter and Experts */}
                    <div className="lg:col-span-4 flex flex-col pt-10 lg:pt-0 relative lg:top-[-100px]">
                         <div className="relative mb-10">
                            <h2
                                className="text-[180px] md:text-[220px] font-black leading-none tracking-tighter select-none"
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
                        </div>

                        {/* Experts Section */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex -space-x-4">
                                {[
                                    "https://i.pravatar.cc/150?u=1",
                                    "https://i.pravatar.cc/150?u=2",
                                    "https://i.pravatar.cc/150?u=3"
                                ].map((img, i) => (
                                    <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-md">
                                        <img src={img} alt="Expert" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-[#07112F] font-bold text-sm  leading-tight uppercase">
                                    Trusted Experts in Medical <br /> Health and Wellness
                                </p>
                            </div>
                        </div>

                        <p className="text-[#555] text-lg leading-relaxed max-w-[400px]">
                            We’re committed to offering compassionate and comprehensive healthcare tailored to your needs. At Mednix, your health is our priority every step of the way.
                        </p>
                          <a
    href="#appointment"
    className="group cursor-pointer relative bg-[#159fba] text-white mt-6  px-2 py-3 rounded-[5px] transition-all duration-300 ease-in-out shadow hover:shadow-lg w-45 h-12 flex items-center gap-3 max-sm:hidden"
>
    <div className="relative pl-3 flex items-center justify-center gap-2 overflow-hidden">
       
        <span className="relative inline-block overflow-hidden">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                Discover More
            </span>
            <span className="absolute inset-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                 Discover More
            </span>
        </span>

        
        <div className="relative   w-8 h-8 bg-white group-hover:bg-[#0a1d2e] rounded-[5px] flex items-center justify-center overflow-hidden transition-all duration-300">
           
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

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
