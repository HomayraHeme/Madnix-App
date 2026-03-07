import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Services = () => {
    const services = [
        {
            title: 'Orthopedic',
            desc: 'Focuses on the diagnosis, treatment, and rehabilitation of conditions affecting the bones, joints, muscles, and ligaments—helping restore mobility and improve quality of life.',
        },
        {
            title: 'Diagnostics',
            desc: 'Accurate testing and screening services to detect, monitor, and manage a wide range of health conditions.',
        },
        {
            title: 'Diabetes Care',
            desc: 'Comprehensive management of diabetes through medication, lifestyle changes, and regular monitoring to prevent complications.',
        },
        {
            title: 'Family Medicine',
            desc: 'One of the defining features of family medicine is the continuity of care—physicians often build long-term relationships with patients and their families.',
        },
        {
            title: 'Neurology',
            desc: 'Neurology is the branch of medicine that focuses on the diagnosis, treatment, and management of disorders related to the nervous system.',
        },
        {
            title: 'Holistic Care',
            desc: 'It recognizes that health is influenced by a combination of physical, emotional, mental, social, and spiritual factors.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 text-[14px] text-primary font-medium mb-6">
                        <span className="bg-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase text-white">Our Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
                        Comprehensive Medical Services for <span className="text-primary">Your Health</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="group bg-light-bg rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                            <p className="text-text-body leading-relaxed mb-6">{service.desc}</p>
                            <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                                Explore Service <HiOutlineArrowRight />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
