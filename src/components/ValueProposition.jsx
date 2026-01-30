import React from 'react';
import { Smartphone } from 'lucide-react';

const ValueProposition = () => {
    return (
        <section className="py-24 bg-brand-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-orange p-10 md:p-16 rounded-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Where German Engineering Meets Kenyan Expertise.
                        </h2>
                        <p className="text-orange-100 text-lg mb-0">
                            Stop settling for guesswork. Experience the precision your German machine deserves.
                            Book your diagnostic session today via WhatsApp.
                        </p>
                    </div>

                    <div className="relative z-10">
                        <a
                            href="https://wa.me/254722785494"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-white text-brand-orange px-8 py-4 rounded-sm font-bold text-lg hover:bg-orange-50 transition-all shadow-xl whitespace-nowrap inline-flex"
                        >
                            <Smartphone className="w-6 h-6" />
                            BOOK ON WHATSAPP
                        </a>
                    </div>

                    {/* Decorative pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-20 -mt-20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 -ml-20 -mb-20 rounded-full blur-3xl" />
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div>
                        <span className="text-4xl font-bold text-white block mb-2">100%</span>
                        <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Genuine Parts Policy</span>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-white block mb-2">15+</span>
                        <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Years Experience</span>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-white block mb-2">5000+</span>
                        <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">German Cars Serviced</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
