import React from 'react';
import { Cpu, Wrench, Shield, Paintbrush } from 'lucide-react';

const services = [
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Computerized Diagnostics",
        description: "State-of-the-art scanning tools to pinpoint exact issues in your vehicle's electronic systems."
    },
    {
        icon: <Wrench className="w-8 h-8" />,
        title: "Genuine Parts Replacement",
        description: "We use only authentic VW, Audi, and Skoda components to ensure longevity and performance."
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Body Work & Restoration",
        description: "Expert structural repairs and restoration to return your vehicle to its showroom condition."
    },
    {
        icon: <Paintbrush className="w-8 h-8" />,
        title: "Professional Paint & Finish",
        description: "High-quality automotive painting with precision color matching and premium clear coats."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-brand-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-mono text-brand-orange uppercase tracking-[0.3em] mb-4">Core Services</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white">Precision Repair Solutions</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 bg-brand-dark border border-white/10 hover:border-brand-orange transition-all duration-300 relative overflow-hidden">
                            <div className="text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-4xl font-mono font-bold">0{index + 1}</span>
                            </div>
                            <div className="h-1 w-0 bg-brand-orange absolute bottom-0 left-0 group-hover:w-full transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
