import React from 'react';
import { ArrowRight, CheckCircle2, Settings } from 'lucide-react';

const Hero = () => {
    const heroImage = "/hero.png";
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="German Auto Repair"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 rounded-full mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                        <span className="text-xs font-mono text-brand-orange uppercase tracking-wider font-bold">Expert German Car Specialists</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
                        Specialized Care for Your <span className="text-brand-orange">German Machine.</span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-medium">
                        Precision diagnostics and expert repair for <span className="text-white font-bold underline decoration-brand-orange/50 underline-offset-4">VW, Audi & Skoda</span>.
                        We combine German engineering standards with Kenyan expertise to keep your vehicle in peak condition.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/254722785494?text=Hello%20Modkas%20Auto%20Garage%2C%0A%0AI%20would%20like%20to%20book%20a%20computerized%20diagnostic%20service%20for%20my%20vehicle.%0A%0AVehicle%20Make%2FModel%3A%20%0AYear%3A%20%0ACurrent%20Issues%2FConcerns%3A%20%0A%0APlease%20let%20me%20know%20your%20availability.%20Thank%20you!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-sm font-bold text-base transition-all group"
                        >
                            BOOK DIAGNOSTIC
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#services"
                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-sm font-bold text-base transition-all"
                        >
                            OUR SERVICES
                        </a>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-orange mt-1" />
                            <div>
                                <h3 className="text-white font-bold text-sm">Certified Techs</h3>
                                <p className="text-xs text-gray-500 font-mono">German Trained Specialists</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-orange mt-1" />
                            <div>
                                <h3 className="text-white font-bold text-sm">Advanced Tools</h3>
                                <p className="text-xs text-gray-500 font-mono">OEM Grade Diagnostics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative mechanical element */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none hidden lg:block">
                <Settings className="w-96 h-96 animate-[spin_20s_linear_infinite]" />
            </div>
        </section>
    );
};

export default Hero;
