 // Marquee2.jsx
import React from 'react';

const departments = [
    'Neurology', 'Dermatology', 'Cardiology', 'Orthopedic', 'Pediatrics',
    'Ophthalmology', 'Dental Care', 'General Surgery', 'Radiology', 'Nutrition',
];

const Marquee2 = () => {
     const items = [...departments, ...departments, ...departments];
    return (
        <section className="bg-cyan-600 rounded-b-3xl pt-20 pb-15  py-7 overflow-hidden">
            
            <div className="custom-marquee-scroll">
                {items.map((d, i) => (
                    <span key={i} className="text-white text-[22px] font-black uppercase whitespace-nowrap px-10 tracking-[1px] flex items-center gap-10">
                        <span className="text-[20px] opacity-40">*</span> {d}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Marquee2;