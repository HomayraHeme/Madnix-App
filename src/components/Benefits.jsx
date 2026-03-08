 import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { TbStethoscope, TbBuildingHospital, TbUserHeart } from 'react-icons/tb';
import { motion } from 'framer-motion';
import image from '../assets/doctor+.png';

const Benefits = () => {
    const benefitsList = [
        {
            title: "Health Treatments",
            desc: "Tailored treatment plans focused on your recovery.",
            icon: <TbStethoscope />
        },
        {
            title: "Advanced Facilities",
            desc: "Equipped with the latest technology for accurate diagnoses.",
            icon: <TbBuildingHospital />
        },
        {
            title: "Expert Physicians",
            desc: "Highly trained specialists providing personalized care.",
            icon: <TbUserHeart />
        }
    ];

    const stats = [
        { label: "Expert Doctor", value: 82 },
        { label: "Patient Satisfaction", value: 74 },   
        { label: "Success Case", value: 98 }
    ];

    return (
        <section className="bg-[#0a122a] text-white overflow-hidden rounded-[20px] relative top-[25px]">  
            <div className="max-w-full">
                <div className="flex flex-col lg:flex-row items-stretch">  
                    
                    {/* Left: Image */}
                    <div className="w-full lg:w-2/8 relative min-h-[350px] md:min-h-[500px] lg:min-h-full">
                        <div className="absolute inset-0"> 
                            <img 
                                src={image}
                                alt="Doctor" 
                                className="w-full h-full object-cover object-top lg:object-cover"  
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0a122a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0a122a]/20" />
                        </div>
                    </div>

                    {/* Right: Content Section */}
                    <div className="w-full lg:w-4/5 pt-12 lg:pt-24 px-6 md:px-12 lg:px-6">  
                        {/* Container for Heading and Benefits - Stack on mobile, side-by-side on LG */}
                        <div className="w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-12"> 
                            
                            {/* Heading & Text Area - Animate from right */}
                            <motion.div 
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >  
                                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-[14px] font-semibold text-cyan-400 mb-6 lg:mb-8 animate-pulse">  
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22D3EE]" />   
                                    Our Benefits
                                </div>

                                <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] mb-6">
                                    Reliable Care <br />
                                    with <span className="font-serif italic text-cyan-400 font-normal">Mednix Healthcare</span>   
                                </h2>

                                <p className="text-slate-400 text-base md:text-lg mb-8 lg:mb-10 max-w-xl">
                                    Our expert team combines state-of-the-art technology with personalized care to provide treatments designed around your unique health needs.
                                </p>
                                
                                <a
                                    href="#appointment"
                                    className="group cursor-pointer relative bg-[#159fba] text-white mt-6 px-4 py-3 rounded-[5px] transition-all duration-300 ease-in-out shadow hover:shadow-lg w-fit h-12 flex items-center gap-3"
                                >
                                    <div className="relative flex items-center justify-center gap-2 overflow-hidden">
                                        <span className="relative inline-block overflow-hidden font-bold text-sm">
                                            <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                                                Discover More
                                            </span>
                                            <span className="absolute inset-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                                                Discover More
                                            </span>
                                        </span>
                                        <div className="relative w-8 h-8 bg-white group-hover:bg-[#0a1d2e] rounded-[5px] flex items-center justify-center overflow-hidden transition-all duration-300">
                                            <HiOutlineArrowRight size={14} className="absolute text-[#0a1d2e] group-hover:text-white transition-all duration-500 transform group-hover:translate-x-8 group-hover:opacity-0" />
                                            <HiOutlineArrowRight size={14} className="absolute text-[#159fba] group-hover:text-white transition-all duration-500 transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                                        </div>
                                    </div>
                                </a>
                            </motion.div>

                            {/* Benefits List - Full width on mobile - Animate from right with delay */}
                            <motion.div 
                                className="w-full lg:w-1/2 space-y-6 lg:space-y-8 mb-12 mt-8 lg:mt-0"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                            >  
                                {benefitsList.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 lg:gap-6 group">
                                        <div className="w-14 h-14 lg:w-16 lg:h-16 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl lg:text-3xl text-cyan-400 transition-all duration-300">  
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl lg:text-2xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-sm lg:text-base text-slate-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Stats Section - Progress bars fill from left to right */}
                        <motion.div 
                            className="mt-8 lg:mt-12 pt-8 pb-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <span className="w-16 h-12 flex-shrink-0 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {stat.value}%
                                        </span>
                                        <div className="flex-1"> 
                                            <div className="mb-1">
                                                <span className="text-sm font-medium uppercase tracking-wider">{stat.label}</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                                                <motion.div 
                                                    className="h-full bg-cyan-400 rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${stat.value}%` }}
                                                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 + (idx * 0.2) }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;