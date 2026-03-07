import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Arietta Preston',
            specialty: 'Cardiology',
            review: 'From the moment I walked in, I felt genuinely cared for. The doctors took the time to explain everything and answered all my questions.',
            rating: 4,
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor02.jpg',
        },
        {
            name: 'Woulfe Nick',
            specialty: 'Oncology',
            review: 'Everyone from the reception to the doctors was friendly and professional. The clinic is clean, modern, and welcoming. They treat you like a person.',
            rating: 5,
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor03.jpg',
        },
        {
            name: 'Sapphire Rose',
            specialty: 'Dental',
            review: 'The medical team is incredibly knowledgeable and thorough. I felt confident in their care every step of the way. I\'m so thankful for their expertise.',
            rating: 4,
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor05.jpg',
        },
        {
            name: 'Melissa Jewel',
            specialty: 'Therapy',
            review: 'The medical team is incredibly knowledgeable and thorough. I felt confident in their care every step of the way. I\'m so thankful for their expertise.',
            rating: 5,
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor07.jpg',
        },
        {
            name: 'Xeinna Chris',
            specialty: 'Psychology',
            review: 'The medical team is incredibly knowledgeable and thorough. I felt confident in their care every step of the way. I\'m so thankful for their expertise.',
            rating: 4,
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor01.jpg',
        },
        {
            name: 'Cathy Divine',
            specialty: 'Pediatrics',
            review: 'The medical team is incredibly knowledgeable and thorough. I felt confident in their care every step of the way. I\'m so thankful for their expertise.',
            rating: 4,
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/doctor06.jpg',
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 text-[14px] text-primary font-medium mb-6">
                        <span className="bg-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase text-white">Our Patient</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
                        Feedback from <span className="text-primary">Our Patients</span>
                    </h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-light-bg rounded-2xl p-8 border border-border h-full">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                                    ))}
                                </div>
                                <p className="text-text-body leading-relaxed mb-6 italic">"{testimonial.review}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                                        <p className="text-primary text-sm">{testimonial.specialty}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
