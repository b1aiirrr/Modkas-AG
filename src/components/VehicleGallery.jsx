import React from 'react';

const vehicles = [
    {
        image: "/audi.png",
        brand: "Audi",
        model: "Performance & Luxury",
        description: "Expert diagnostics and mechanical repair for all Audi performance models."
    },
    {
        image: "/vw.png",
        brand: "Volkswagen",
        model: "Engineering Excellence",
        description: "Specialized care for VW Golf, Tiguan, Touareg, and more."
    },
    {
        image: "/skoda.png",
        brand: "Skoda",
        model: "Precision Maintenance",
        description: "Dedicated service and genuine parts for the entire Skoda range."
    }
];

const VehicleGallery = () => {
    return (
        <section id="gallery" className="py-24 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-mono text-brand-orange uppercase tracking-[0.3em] mb-4">The German Specialist</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Mastering Every Detail</h3>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        We specialize exclusively in the VAG group. Our facility is equipped with dedicated tools and software tailored specifically for these precision machines.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {vehicles.map((v, i) => (
                        <div key={i} className="group relative overflow-hidden bg-brand-charcoal border border-white/5 rounded-sm">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={v.image}
                                    alt={v.brand}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-8 relative z-10 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="h-px w-8 bg-brand-orange" />
                                    <span className="text-xs font-mono text-brand-orange uppercase tracking-widest">{v.brand}</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{v.model}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {v.description}
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                                <span className="text-6xl font-bold text-white">{v.brand[0]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VehicleGallery;
