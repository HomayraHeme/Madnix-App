 import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { TbStethoscope, TbBuildingHospital, TbUserHeart } from 'react-icons/tb';
import image from '../assets/doctor+.png'

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
        <section className="bg-[#0a122a] text-white overflow-hidden rounded-[20px]   relative top-[25px] ">  
            <div className="max-w-full">
              
                <div className="flex flex-col lg:flex-row items-stretch">  
                    
                    {/* Left: Image Section */}
                    
                    <div className="lg:w-2/8 relative min-h-[400px] lg:min-h-full">
                        <div className="absolute inset-0"> 
                            <img 
                                src={image}
                                alt="Doctor" 
                                className="w-full h-full object-cover"  
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a122a]/20 lg:to-transparent" />
                        </div>
                    </div>

                    {/* Right: Content Section */}
                    <div className="lg:w-4/5 pt-24 px-6">  
                     <div className="w-full flex justify-between gap-8"> 
                       <div className="w-1/2">  
                         <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5  p text-[14px] font-semibold text-cyan-400 mb-8 animate-pulse">  
                            <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22D3EE ]" />   
                            Our Benefits
                        </div>

                        <h2 className="text-[48px] md:text-[56px] font-bold leading-[1.1] mb-6">
                            Reliable Care <br />
                            with <span className="font-serif italic text-cyan-400 font-normal">Mednix Healthcare</span>   
                        </h2>

                        <p className="text-slate-400 text-lg mb-10 max-w-xl">
                            Our expert team combines state-of-the-art technology with personalized care to provide treatments designed around your unique health needs.
                        </p>
                          <a
    href="#appointment"
    className="group cursor-pointer relative bg-[#159fba] text-white mt-6 px-2 py-3 rounded-[5px] transition-all duration-300 ease-in-out shadow hover:shadow-lg w-45 h-12 flex items-center gap-3 max-sm:hidden"
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


                        {/* Benefits List */}
                        <div className="w-1/2 space-y-8 mb-12">  
                            {benefitsList.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-6 group">
                                    <div className="w-16 h-16 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl text-cyan-400 transition-all duration-300">  
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* stat */}
                    <div className="mt-12 pt-8 pb-13.5 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
  {stats.map((stat, idx) => (
    <div key={idx} className="flex flex-col gap-4">
      <div className="flex items-center gap-4">

        {/* Custom Circular Percentage Badge */}
        <span className="w-16 h-12 flex-shrink-0 bg-cyan-600  rounded-full flex items-center justify-center text-white font-bold text-sm">
          {stat.value}%
        </span>

       <div> 
        {/* Label */}
       <div>
         <span className="">{stat.label}</span>
      </div>
      
      {/* Custom Horizontal Progress Bar */}
      <div className="w-full h-1 bg-white rounded-[5px]  ">
        <div 
          className="h-full bg-cyan-400 rounded-full transition-all duration-1000"  
          style={{ width: `${stat.value}%` }}
        />
      </div></div>
       </div>
    </div>
  ))}
</div>
                    
                   </div>
                </div>
      
            </div>
        </section>
    );
};

export default Benefits;