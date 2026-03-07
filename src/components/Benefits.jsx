import React from 'react';
import { FiCheck } from 'react-icons/fi';

const Benefits = () => {
    const benefits = [
        {
            icon: '🏥',
            title: 'Health Treatments',
            desc: 'Tailored treatment plans focused on your recovery.',
        },
        {
            icon: '🔬',
            title: 'Advanced Facilities',
            desc: 'Equipped with the latest technology for accurate diagnoses.',
        },
        {
            icon: '👨‍⚕️',
            title: 'Expert Physicians',
            desc: 'Highly trained specialists providing personalized care.',
        },
    ];

    const stats = [
        { label: 'Expert Doctor', value: '82%', color: 'text-primary' },
        { label: 'Patient Satisfaction', value: '74%', color: 'text-secondary' },
        { label: 'Success Case', value: '98%', color: 'text-primary' },
    ];

    return (
        <section id="benefits" className="py-20 bg-secondary">
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-[14px] text-white font-medium mb-6">
                        <span className="bg-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase text-white">Our Benefits</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Reliable Care with <span className="text-primary">Mednix Healthcare</span>
                    </h2>
                    <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
                        Our expert team combines state-of-the-art technology with personalized care to provide treatments designed around your unique health needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/20 transition-all duration-300">
                            <div className="text-6xl mb-4">{benefit.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                            <p className="text-white/80 leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className={`text-5xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                            <div className="text-white/60 uppercase text-sm tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
