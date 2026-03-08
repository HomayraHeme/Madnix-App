 import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaFacebookF, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { PiShareNetworkLight } from 'react-icons/pi';

// Swiper styles
import 'swiper/css';

const TeamSlider = () => {
    const doctors = [
        {
            name: 'Dr. Hailey Marie',
            specialty: 'Cardiologist',
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor01.jpg',
        },
        {
            name: 'Dr. Jayne Adams',
            specialty: 'Gynecologist',
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor02.jpg',
        },
        {
            name: 'Dr. Aviana Lexa',
            specialty: 'Physician',
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor06.jpg',
        },
        {
            name: 'Dr. Eddie Shock',
            specialty: 'Osteopaths',
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor03.jpg',
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1320px] mx-auto px-4">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-1.5 text-[14px] font-medium text-[#0a1d2e] mb-6 shadow-sm animate-pulse">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                        Medical Professionals
                    </div>
                    <h2 className="text-[40px] md:text-[56px] font-bold text-[#0a1d2e] leading-[1.1]">
                        Meet the Health Experts Behind <br />
                        <span className="font-serif italic text-cyan-500 font-normal">Your Care</span>
                    </h2>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {doctors.map((doc, index) => (
                        <SwiperSlide key={index}>
    
                            <div className="group mb-10 cursor-pointer">
                                
                                {/* Image Container */}
                                <div className="relative overflow-hidden rounded-[30px] bg-[#f3f4f6] mb-6 aspect-[4/5]">
                                    <img 
                                        src={doc.image} 
                                        alt={doc.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    
                                    {/* Share Interaction*/}
                                    <div className="absolute bottom-6 right-6 flex flex-col items-center">
                                        
                                        {/* Social Links Container - Connected to Button */}
                                        <div className="flex flex-col gap-3 pb-5 opacity-0 translate-y-10 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 ease-in-out z-20">
                                            <a href="#" className="w-10 h-10 bg-white text-cyan-500 rounded-full flex items-center justify-center hover:bg-[#0a1d2e] hover:text-white shadow-sm transition-all">
                                                <FaFacebookF size={14} />
                                            </a>
                                            <a href="#" className="w-10 h-10 bg-white text-cyan-500 rounded-full flex items-center justify-center hover:bg-[#0a1d2e] hover:text-white shadow-sm transition-all">
                                                <FaXTwitter size={14} />
                                            </a>
                                            <a href="#" className="w-10 h-10 bg-white text-cyan-500 rounded-full flex items-center justify-center hover:bg-[#0a1d2e] hover:text-white shadow-sm transition-all">
                                                <FaWhatsapp size={16} />
                                            </a>
                                        </div>

                                        {/* Main Share Button */}
                                        <div className="w-20 h-20 bg-[#0a1d2e] group-hover:bg-cyan-500 text-white rounded-full border border-15 border-white flex items-center justify-center transition-all duration-300 z-30 shadow-lg relative top-[37px]">
                                            <PiShareNetworkLight size={24} />
                                        </div>

                                        {/* Cyan Pill Background  */}
                                        <div className="absolute bottom-[5px] w-14 bg-cyan-500 rounded-[5px] transition-all duration-500 scale-y-0 origin-bottom group-hover:scale-y-[4.2] mb-15 z-10" 
                                             style={{ height: '48px' }}>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="text-left">
                                    <h4 className="text-[26px] font-bold text-[#0a1d2e] group-hover:text-cyan-500 transition-colors leading-tight">
                                        {doc.name}
                                    </h4>
                                    <p className="text-slate-500 text-lg mt-1 font-medium">
                                        {doc.specialty}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TeamSlider; 