 import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FiChevronUp, FiChevronDown,  } from 'react-icons/fi';
import heroImg from '../assets/hero-doctor.png';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-secondary">
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
                className="w-full h-screen [&_.swiper-button-next]:!hidden [&_.swiper-button-prev]:!hidden"
            >
                {[
                    {
                        badge: 'Mednix Specialized Treatments',
                        title: 'Empowering You with Proactive',
                        titleHighlight: 'Medical Care',
                        desc: 'Our experienced medical team combines the latest technology with personalized attention to provide you with exceptional healthcare tailored to your unique needs.',
                        cta: 'Schedule a Checkup',
                    },
                    {
                        badge: 'Your Trusted Partner',
                        title: 'Your Trusted Partner in',
                        titleHighlight: 'Health & Wellness',
                        desc: 'We are committed to offering compassionate and comprehensive healthcare tailored to your needs. At Mednix, your health is our priority every step of the way.',
                        cta: 'Meet Our Team',
                    },
                ].map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-screen">
                            {/* Background */}
                            <div className="absolute inset-0 z-0">
                                <img src={heroImg} alt="Doctor" className="w-full h-full object-cover animate-[heroZoom_10s_linear_infinite_alternate]" />
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-[2] max-w-[1320px] mx-auto px-5 flex flex-col lg:flex-row lg:items-center justify-between h-screen pt-32 pb-16 gap-10">
                                <div className="max-w-[750px] animate-[fadeInUp_0.8s_ease-out]">
                                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-[14px] text-white font-medium mb-8">
                                        <span className="bg-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase">Mednix</span>
                                        <span className="opacity-90">{slide.badge}</span>
                                    </div>
                                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-white leading-[1] mb-8 -tracking-[2px]">
                                        {slide.title}<br />
                                        <span className="font-serif italic font-normal text-primary">{slide.titleHighlight}</span>
                                    </h1>
                                    <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-[600px]">{slide.desc}</p>

                                    <a href="#appointment" className="group relative inline-flex items-center bg-primary text-white pl-8 pr-20 py-5 rounded-full text-[16px] font-bold transition-all duration-300 hover:bg-white hover:text-secondary">
                                        <span>{slide.cta}</span>
                                        <div className="absolute right-1.5 w-14 h-14 bg-white flex items-center justify-center rounded-full text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                            <HiOutlineArrowRight size={24} />
                                        </div>
                                    </a>
                                </div>

                                <div className="hidden lg:block bg-white/10 backdrop-blur-xl rounded-[30px] p-10 max-w-[380px] border border-white/10 shadow-2xl animate-[slideInRight_1s_ease-out_0.5s_both] shrink-0 self-end mb-20">
                                    <p className="text-white/90 text-[17px] leading-relaxed italic font-light font-serif">
                                        "{slide.desc.slice(0, 150)} Our dedicated professionals ensure your peace of mind with world-class medical services."
                                    </p>
                                    <div className="mt-8 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                                            

                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase font-bold tracking-widest">Call for Emergency</p>
                                            <p className="text-white font-bold text-lg">+01 123 456 789</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="absolute left-[50px] bottom-[50px] flex gap-3 z-10 max-md:hidden">
                <button className="hero-btn-prev w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-primary hover:border-primary">
                    <FiChevronUp className="-rotate-90" />
                </button>
                <button className="hero-btn-next w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-primary hover:border-primary">
                    <FiChevronDown className="-rotate-90" />
                </button>
            </div>
        </section>
    );
};

export default Hero;
