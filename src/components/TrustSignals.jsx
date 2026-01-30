import React from 'react';
import { Award, ShieldCheck, Gauge, Zap } from 'lucide-react';

const TrustSignals = () => {
    return (
        <section className="py-20 bg-brand-black border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="flex flex-col items-center text-center">
                        <Award className="w-12 h-12 text-brand-orange mb-4" />
                        <h4 className="text-white font-bold mb-2">Authorized Diagnostics</h4>
                        <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Official OEM Software</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <ShieldCheck className="w-12 h-12 text-brand-orange mb-4" />
                        <h4 className="text-white font-bold mb-2">German Trained</h4>
                        <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Expert Technicians</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Gauge className="w-12 h-12 text-brand-orange mb-4" />
                        <h4 className="text-white font-bold mb-2">Precision First</h4>
                        <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">No Guesswork</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Zap className="w-12 h-12 text-brand-orange mb-4" />
                        <h4 className="text-white font-bold mb-2">Genuine Parts</h4>
                        <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">VW / Audi / Skoda</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
