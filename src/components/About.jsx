 import React from 'react';
import { FiClock, FiPhoneCall } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="py-20 bg-light-bg">
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 text-[14px] text-primary font-medium mb-8">
                            <span className="bg-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase text-white">About Mednix</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6">
                            Caring for You Like <span className="text-primary">Family Health</span>
                        </h2>
                        <p className="text-text-body text-lg leading-relaxed mb-8">
                            We're committed to offering compassionate and comprehensive healthcare tailored to your needs. At Mednix, your health is our priority every step of the way.
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">25+</div>
                                <div className="text-sm text-text-muted uppercase tracking-wider">Years Experience</div>
                            </div>
                            <div className="w-px h-12 bg-border"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">15K+</div>
                                <div className="text-sm text-text-muted uppercase tracking-wider">Successful Treatments</div>
                            </div>
                        </div>

                        {/* Departments */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-secondary mb-4">Our Departments</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Cardiology', 'Dental Care', 'Psychiatry', 'Ophthalmology', 'Physical Therapy', 'Oncology', 'Pediatrics', 'Orthopedics', 'Dermatology', 'General Surgery'].map((dept, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-white border border-border rounded-full text-sm text-text-body">
                                        {dept}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Opening Hours */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
                        <h3 className="text-2xl font-bold text-secondary mb-6">Opening Hours:</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-border">
                                <span className="text-text-body font-medium">Mon - Fri</span>
                                <span className="text-secondary font-semibold">9:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-border">
                                <span className="text-text-body font-medium">Sat - Sun</span>
                                <span className="text-secondary font-semibold">8:00 - 16:00</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-text-body font-medium">Emergency</span>
                                <span className="text-primary font-bold">24/7 Hours</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <FiPhoneCall size={20} />
                                </div>
                                <div>
                                    <p className="text-text-muted text-sm">Need Assistance?</p>
                                    <p className="text-secondary font-bold">+4800 45 678 900</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
 