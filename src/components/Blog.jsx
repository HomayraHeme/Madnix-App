import React from 'react';
import { FiCalendar, FiUser } from 'react-icons/fi';

const Blog = () => {
    const posts = [
        {
            title: 'Doctor-Approved Ways To Stay Healthy',
            excerpt: 'Discover proven strategies from medical professionals to maintain optimal health and prevent common illnesses.',
            date: 'September 12, 2025',
            author: 'Admin',
            category: 'Health & Wellness',
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/blog1.jpg', // placeholder
        },
        {
            title: 'What To Expect During Your First Visit To Our Clinic',
            excerpt: 'Learn about the process of your initial consultation and what to prepare for a smooth healthcare experience.',
            date: 'September 12, 2025',
            author: 'Admin',
            category: 'Patient Care',
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/blog2.jpg', // placeholder
        },
        {
            title: 'Telemedicine Or In-Person Care: What\'s Best?',
            excerpt: 'Explore the benefits and considerations of virtual healthcare versus traditional in-person medical visits.',
            date: 'September 12, 2025',
            author: 'Admin',
            category: 'Virtual Care',
            image: 'https://mednix.themeht.com/wp-content/uploads/2025/09/blog3.jpg', // placeholder
        },
    ];

    return (
        <section id="blog" className="py-20 bg-light-bg">
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 text-[14px] text-primary font-medium mb-6">
                        <span className="bg-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase text-white">Latest News</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
                        Latest Health Insights <span className="text-primary">Your Wellness Journey</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">Blog Image {idx + 1}</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-text-muted mb-3">
                                    <div className="flex items-center gap-1">
                                        <FiCalendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FiUser size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3 hover:text-primary transition-colors cursor-pointer">
                                    {post.title}
                                </h3>
                                <p className="text-text-body leading-relaxed mb-4">{post.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-medium text-sm uppercase tracking-wider">{post.category}</span>
                                    <a href="#blog" className="text-primary hover:text-secondary font-semibold transition-colors">
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
