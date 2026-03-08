 import React from 'react';
import { Mail, Phone, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import doctorimg from '../assets/Apointment.png';
import dotmap from '../assets/dotmap.png';

const AppointmentSection = () => {
  return (
    <section id="Schedule" className="relative py-20 px-6 md:px-4 lg:px-8 bg-white overflow-hidden">
      
      

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">
        
        {/* LEFT SIDE: Image and Contact Info */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative mb-12">
            <div 
              className="overflow-hidden"
              style={{
                borderRadius: '20px',
                
              }}
            >
              <img 
                src={doctorimg} 
                alt="Medical Professionals" 
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-8 pr-4">
            <p className="text-gray-500  pt-25 leading-relaxed max-w-md">
              If you have general questions about our services, doctors, or clinic policies, feel free to reach out via email and Call us directly.
            </p>

            <div className=" gap-10 ">
              <div className="flex items-start gap-4 pb-10">
                <div className="mt-1 text-[#159fba]">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm font-medium">Need Assistance?</h4>
                  <p className="text-[#0a1d2e] text-xl font-medium mt-1">info@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#159fba]">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm font-medium">Patient & Appointment Enquiries</h4>
                  <p className="text-[#0a1d2e] text-xl font-medium mt-1">+4800 45 678 900</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: */}
        <motion.div 
          className="w-full lg:w-1/2 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-10">
             <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-lg">
                Take the first step toward better health by scheduling your appointment today. 
                Whether you're a new patient or returning, our quick and secure booking form 
                makes it easy to find a time that works for you.
             </p>
             <div>
                <img src={dotmap} alt="" />
             </div>
            
               <div className='rounded-3xl  lg:relative right-[120px] top-[-20px] bg-white  p-9'>
                  <h2 className="text-[40px] md:text-[40px] pb-2  text-[#0a1d2e] leading-tight">
                Book An Appointment
             </h2>
          

          <form className="space-y-5 " onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#159fba] bg-transparent transition-all placeholder:text-gray-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#159fba] bg-transparent transition-all placeholder:text-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-6 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#159fba] bg-transparent transition-all placeholder:text-gray-500"
              />
              <div className="relative">
                <select className="w-full px-6 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#159fba] bg-transparent text-gray-500 appearance-none cursor-pointer">
                  <option>Select Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <select className="w-full px-6 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#159fba] bg-transparent text-gray-500 appearance-none cursor-pointer">
                  <option>Select Doctor</option>
                  <option>Dr. Sarah Smith</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
              <input
                type="date"
                className="w-full px-6 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#159fba] bg-transparent text-gray-500"
              />
            </div>

            <textarea
              placeholder="Type Your Message"
              rows="5"
              className="w-full px-6 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#159fba] bg-transparent placeholder:text-gray-500 resize-none"
            ></textarea>

            <button className="bg-[#159fba] hover:bg-[#0a1d2e] text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 shadow-lg active:scale-95 w-full md:w-auto">
              Book Appointment
            </button>
          </form>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentSection;