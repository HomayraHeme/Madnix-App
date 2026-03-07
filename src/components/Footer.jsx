import React from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-16">
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-white/80 hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#doctors" className="text-white/80 hover:text-primary transition-colors">Our Doctors</a></li>
                            <li><a href="#contact" className="text-white/80 hover:text-primary transition-colors">Contact</a></li>
                            <li><a href="#blog" className="text-white/80 hover:text-primary transition-colors">Blog Classic</a></li>
                        </ul>
                    </div>

                    {/* Department */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Department</h3>
                        <ul className="space-y-3">
                            <li><a href="#services" className="text-white/80 hover:text-primary transition-colors">Eye Care</a></li>
                            <li><a href="#services" className="text-white/80 hover:text-primary transition-colors">Cardiology</a></li>
                            <li><a href="#services" className="text-white/80 hover:text-primary transition-colors">Dentist</a></li>
                            <li><a href="#services" className="text-white/80 hover:text-primary transition-colors">Pregnancy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold mb-6">Newsletter</h3>
                        <p className="text-white/80 mb-6">
                            Join the Community and Receive Our Monthly Newsletter Straight to Your Inbox
                        </p>
                        <div className="flex gap-2 mb-6">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 rounded-lg text-secondary"
                            />
                            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            <FiMapPin className="text-primary" />
                            <span className="text-white/80">5th Street, 21st Floor, New York, USA</span>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                            <FiMail className="text-primary" />
                        </div>
                        <div>
                            <p className="text-white/60 text-sm">General Inquiries</p>
                            <p className="text-white font-semibold">info@example.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                            <FiPhone className="text-primary" />
                        </div>
                        <div>
                            <p className="text-white/60 text-sm">Emergency Cases</p>
                            <p className="text-white font-semibold">(888) 4567890</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                            <FiMapPin className="text-primary" />
                        </div>
                        <div>
                            <p className="text-white/60 text-sm">Visit Our Clinic</p>
                            <p className="text-white font-semibold">5th Street, 21st Floor, New York, USA</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/60">© 2026, Mednix. Made with passion by ThemeHt.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/60 hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
