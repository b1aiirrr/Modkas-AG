import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import LegalModal from './LegalModal';

const Footer = () => {
    const logo = "/logo.png";
    const [modalData, setModalData] = useState({ isOpen: false, title: '', content: null });

    const openModal = (title, content) => {
        setModalData({ isOpen: true, title, content });
    };

    const closeModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    const privacyContent = (
        <div className="space-y-4">
            <h5 className="text-white font-bold">1. Information We Collect</h5>
            <p>At Modkas Auto Garage, we collect minimal information necessary to service your vehicle. This includes your name, contact details (phone number, WhatsApp), and vehicle information (VIN, model, mechanical history).</p>
            <h5 className="text-white font-bold">2. How We Use Information</h5>
            <p>Your information is used solely for booking appointments, tracking service history, providing diagnostics, and communicating repair statuses.</p>
            <h5 className="text-white font-bold">3. Data Sharing</h5>
            <p>We do not sell or share your personal data with third parties for marketing purposes. Data may only be shared with authorized genuine part suppliers when necessary for your specific repair.</p>
            <h5 className="text-white font-bold">4. Data Security</h5>
            <p>We implement strict security measures to protect your digital and physical records in accordance with Kenya's Data Protection Act.</p>
        </div>
    );

    const termsContent = (
        <div className="space-y-4">
            <h5 className="text-white font-bold">1. Service & Diagnostics</h5>
            <p>Modkas Auto Garage specializes in VW, Audi, and Skoda repairs. A standard diagnostic fee applies to all visual and computerized inspections, regardless of whether a repair is commissioned.</p>
            <h5 className="text-white font-bold">2. Warranty</h5>
            <p>We provide a 6-month or 10,000km warranty (whichever comes first) on labor and genuine parts installed by our technicians. This warranty is void if parts are tampered with by external parties.</p>
            <h5 className="text-white font-bold">3. Liability</h5>
            <p>While we take maximum care of every German machine, Modkas is not liable for personal valuables left in the vehicle or pre-existing mechanical issues triggered during high-performance testing.</p>
            <h5 className="text-white font-bold">4. Payment</h5>
            <p>Full payment is due upon completion of repairs and before the collection of the vehicle.</p>
        </div>
    );

    return (
        <footer id="location" className="bg-brand-black pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="Modkas Logo" className="w-12 h-12 object-contain" />
                            <div className="flex flex-col">
                                <span className="text-xl font-extrabold tracking-tighter text-white leading-none">MODKAS</span>
                                <span className="text-[9px] tracking-[0.3em] text-brand-orange font-mono uppercase font-bold">Auto Garage</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Premium automotive repair specializing in VW, Audi, and Skoda. Precision diagnostics and expert craftsmanship in the heart of Nairobi.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#services" className="hover:text-brand-orange transition-colors">Computerized Diagnostics</a></li>
                            <li><a href="#services" className="hover:text-brand-orange transition-colors">Engine Repair & Overhaul</a></li>
                            <li><a href="#services" className="hover:text-brand-orange transition-colors">Body Work & Painting</a></li>
                            <li><a href="#services" className="hover:text-brand-orange transition-colors">Genuine Spare Parts</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-brand-orange" />
                                <a href="tel:+254722785494" className="hover:text-brand-orange transition-colors">+254 722 785 494</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageSquare className="w-4 h-4 text-brand-orange" />
                                <div className="flex flex-col gap-2">
                                    <a href="https://wa.me/254722785494" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">WhatsApp: 0722 785 494</a>
                                    <div className="group relative">
                                        <img
                                            src="/whatsapp_qr.png"
                                            alt="WhatsApp QR Code"
                                            className="w-20 h-20 rounded-sm border border-white/10 p-1 bg-white/5 cursor-zoom-in hover:scale-110 transition-transform"
                                        />
                                        <div className="absolute left-24 top-0 hidden group-hover:block w-48 bg-brand-dark p-3 rounded-md border border-brand-orange/30 shadow-2xl z-20">
                                            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-tighter">Scan to chat on WhatsApp</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-brand-orange" />
                                <a href="mailto:info@modkas.co.ke" className="hover:text-brand-orange transition-colors">info@modkas.co.ke</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Location</h4>
                        <ul className="space-y-6 text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                                <div>
                                    <span className="block mb-2">Bandari Rd, Off Dunga Rd, Industrial Area, Nairobi, Kenya</span>
                                    <a
                                        href="https://www.google.com/maps/dir/?api=1&destination=Modkas+Auto+Garage+Nairobi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-brand-orange text-xs font-mono uppercase tracking-widest hover:underline mb-4"
                                    >
                                        Get Directions →
                                    </a>
                                    <div className="w-full h-48 rounded-sm overflow-hidden border border-white/10 grayscale contrast-125 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7891361521975!2d36.8373351!3d-1.2982449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f114620580749%3A0xe526d1163e8a4a21!2sBandari%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1737753600000!5m2!1sen!2ske"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">
                        © 2026 Modkas Auto Garage. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest text-gray-600">
                        <button onClick={() => openModal('Privacy Policy', privacyContent)} className="hover:text-white transition-colors uppercase">Privacy Policy</button>
                        <button onClick={() => openModal('Terms of Service', termsContent)} className="hover:text-white transition-colors uppercase">Terms of Service</button>
                    </div>
                </div>
            </div>

            <LegalModal
                isOpen={modalData.isOpen}
                onClose={closeModal}
                title={modalData.title}
                content={modalData.content}
            />
        </footer>
    );
};

export default Footer;
