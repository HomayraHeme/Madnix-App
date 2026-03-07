 import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Doctors = () => {
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
        },
        {
            name: 'Dr. Whitney Kyle',
            specialty: 'Dentist',
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor05.jpg',
        },
        {
            name: 'Dr. Lawson Bourne',
            specialty: 'Surgeon',
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor07.jpg',
        },
    ];

    return (
        <section id="doctors" className="py-20 bg-light-bg">
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 text-[14px] text-primary font-medium mb-6">
                        <span className="bg-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase text-white">Medical Professionals</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
                        Meet the Health Experts Behind <span className="text-primary">Your Care</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
                            <div className="relative mb-6">
                                <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20" />
                                <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex gap-2">
                                        <FiFacebook className="text-primary cursor-pointer hover:text-secondary" />
                                        <FiTwitter className="text-primary cursor-pointer hover:text-secondary" />
                                        <FiInstagram className="text-primary cursor-pointer hover:text-secondary" />
                                        <FiLinkedin className="text-primary cursor-pointer hover:text-secondary" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-2">{doctor.name}</h3>
                            <p className="text-primary font-medium">{doctor.specialty}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
 