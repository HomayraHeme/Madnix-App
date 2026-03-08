 import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaUserFriends, FaBrain, FaLeaf, FaStethoscope, FaMicroscope, FaSyringe } from 'react-icons/fa';

const services = [
    { 
        icon: <FaStethoscope />, 
        title: 'Orthopedic', 
        desc: 'Focuses on the diagnosis, treatment, and rehabilitation of conditions affecting the...', 
        color: '#00A7B5', 
        img: "https://mednix.themeht.com/wp-content/uploads/2025/09/01.jpg" 
    },
    { 
        icon: <FaMicroscope />, 
        title: 'Diagnostics', 
        desc: 'Accurate testing and screening services to detect, monitor, and manage a wide...', 
        color: '#00A7B5', 
        img: "https://mednix.themeht.com/wp-content/uploads/2025/09/04.jpg" 
    },
    { 
        icon: <FaSyringe />, 
        title: 'Diabetes Care', 
        desc: 'Comprehensive management of diabetes through medication, lifestyle...', 
        color: '#00A7B5', 
        img: "https://mednix.themeht.com/wp-content/uploads/2025/09/05-1.jpg" 
    },
    { 
        icon: <FaUserFriends />, 
        title: 'Family Medicine', 
        desc: 'Continuity of care—physicians build long-term relationships with patients.', 
        color: '#00A7B5', 
        img: "https://mednix.themeht.com/wp-content/uploads/2025/09/06.jpg" 
    },
    { 
        icon: <FaBrain />, 
        title: 'Neurology', 
        desc: 'Diagnosis, treatment, and management of disorders related to the nervous system.', 
        color: '#00A7B5', 
        img: "https://mednix.themeht.com/wp-content/uploads/2025/09/08.jpg" 
    },
    { 
        icon: <FaLeaf />, 
        title: 'Holistic Care', 
        desc: 'Health influenced by physical, emotional, mental, social, and spiritual factors.', 
        color: '#00A7B5', 
        img: "https://mednix.themeht.com/wp-content/uploads/2025/09/09.jpg" 
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            
            {/* Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-black text-slate-100/30 whitespace-nowrap pointer-events-none select-none uppercase z-0">
                HEALTHCARE
            </div>

            <div className="max-w-[1320px] mx-auto px-5 relative z-10">
                
                {/* Header Section from Image */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-[#f0f9fa] border border-[#d1eff2] rounded-full px-5 py-1.5 text-[15px] font-semibold text-[#17A2B8] mb-6">
                        <span className="w-2 h-2 bg-[#17A2B8] rounded-full animate-pulse" />
                        Our Department
                    </div>
                    <h2 className="text-[45px] md:text-[55px]  text-[#1a2b48] leading-tight">
                        Comprehensive Medical Services <br />
                        <span className="text-[#1a2b48]">for </span>
                        <span className="font-serif italic text-[#17A2B8] font-normal">Your Health</span>
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <div key={idx} className="group bg-[#f8fcfc] rounded-[5px] p-12 border border-1 border-slate-400 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-slate-100">
                            
                            {/* Image Reveal Section */}
                            <div className="reveal-container mb-10 flex">
                                <div 
                                    className="min-w-[80px] h-20 flex items-center justify-center text-3xl text-white rounded-[5px] z-10"
                                    style={{ backgroundColor: service.color }}
                                >
                                    {service.icon}
                                </div>
                                <img 
                                    src={service.img} 
                                    alt={service.title} 
                                    className="reveal-img"
                                />
                            </div>

                            <h3 className="text-2xl  text-secondary mb-5 hover:text-[#17A2B8] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-[15px] text-slate-500 leading-relaxed mb-4 h-[75px] overflow-hidden">
                                {service.desc}
                            </p>
                            
                            <div className="h-px bg-slate-400/50 mb-4" />
                            
                           <a href="#" className="inline-flex items-center cta">
  <span className="cta-text">Explore Service</span>
  <div className="w-10 h-10 flex items-center justify-center arrow-icon-wrap">
    <HiOutlineArrowRight size={18} />
  </div>
</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;