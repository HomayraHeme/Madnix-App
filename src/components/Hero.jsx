 import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { HiOutlineArrowRight } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
    // Card component  
    const InfoCard = ({ description }) => (
    <div className="relative right-[50px] top-[90px] lg:mt-24 group animate-fadeInLeft">  
        <div 
            className="bg-white p-8 md:p-10 shadow-2xl w-full max-w-[380px] relative overflow-hidden"
            style={{ 
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",  
                borderRadius: "20px 20px 20px 20px" 
            }}
        >
            <div className="relative z-10">
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-medium mb-8">
                    {description}
                </p>
                
                <a
                    href="#Schedule"
                    className="group cursor-pointer relative bg-[#159fba] text-white px-2 py-3 rounded-[5px] transition-all duration-300 ease-in-out shadow hover:shadow-lg w-55 h-12 flex items-center gap-3 max-sm:hidden"
                >
                    <div className="relative pl-3 flex items-center justify-center gap-2 overflow-hidden">
                        <span className="relative inline-block overflow-hidden">
                            <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                                Schedule a Checkup
                            </span>
                            <span className="absolute inset-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                                Schedule a Checkup
                            </span>
                        </span>

                        <div className="relative w-8 h-8 bg-white group-hover:bg-[#0a1d2e] rounded-[5px] flex items-center justify-center overflow-hidden transition-all duration-300">
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
);

    return (
        <section id="home" className="relative overflow-hidden bg-secondary rounded-b-4xl">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                navigation={{
                    nextEl: '.hero-btn-next',
                    prevEl: '.hero-btn-prev',
                }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                speed={1000}
                className="w-full h-[1200px] lg:h-[900px]"  
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full h-[1200px] lg:h-[900px]">  
                        <div className="absolute inset-0 z-0">
                            <img src="https://mednix.themeht.com/wp-content/uploads/2025/10/34.jpg" alt="Medical 1" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 z-[1]" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-[1]" />
                        </div>
                        
                        <div className="relative z-[2] max-w-[1320px] mx-auto px-30 flex flex-col lg:flex-row items-center justify-between h-full pt-32 pb-20">  
                            <div className="max-w-[750px] animate-[fadeInUp_0.8s_ease-out]">
                                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-[5px] px-3 py-2.5 text-[14px] text-white font-medium mb-8">
                                    <span className="bg-primary bg-[#159fba] px-3 py-1 rounded-[5px] text-[11px] font-bold">MENDIX</span>
                                    <span className="opacity-90">Specialized Treatments</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl text-white leading-tight mb-8">
                                    Empowering <br/> You with <br/> Proactive<br />
                                     Medical Care 
                                </h1>
                            </div>

                            <InfoCard description="Our experienced medical team combines the latest technology with personalized attention to provide you with exceptional healthcare tailored to your unique needs." />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative w-full h-[1200px] lg:h-[900px]">  
                        <div className="absolute inset-0 z-0">
                            <img src="https://mednix.themeht.com/wp-content/uploads/2025/10/33.jpg" alt="Medical 2" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 z-[1]" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-[1]" />
                        </div>
                        <div className="relative z-[2] max-w-[1320px] mx-auto px-30 flex flex-col lg:flex-row items-center justify-between h-full pt-32 pb-20"> 
                            <div className="max-w-[750px]">
                                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-[5px] px-3 py-2.5 text-[14px] text-white font-medium mb-8">
                                    <span className="bg-primary bg-[#159fba] px-3 py-1 rounded-[5px] text-[11px] font-bold uppercase">Mendix</span>
                                    <span className="opacity-90">Trusted Health Partner</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl text-white leading-tight mb-8">
                                    Your Trusted <br/> Partner Health<br />
                                     and Wellness 
                                </h1>
                            </div>

                            <InfoCard description="Our experienced medical team combines the latest technology with personalized attention to provide you with exceptional healthcare tailored to your unique needs." />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Custom Edge Navigation Pill */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 max-md:hidden">
                <div className="bg-white rounded-l-[20px] flex flex-col items-center py-3 px-1 shadow-2xl border-y border-l border-gray-100">
                    <button className="hero-btn-prev w-12 h-12 flex items-center justify-center text-slate-800 hover:text-primary transition-all duration-300 cursor-pointer">
                        <FiChevronUp size={32} />
                    </button>
                    <div className="w-8 h-[1px] bg-gray-200 my-2"></div>
                    <button className="hero-btn-next w-12 h-12 flex items-center justify-center text-slate-800 hover:text-primary transition-all duration-300 cursor-pointer">
                        <FiChevronDown size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;