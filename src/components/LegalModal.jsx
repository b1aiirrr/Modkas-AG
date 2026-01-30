import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, title, content }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-brand-black/90 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full max-w-2xl bg-brand-dark border border-white/10 rounded-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold text-white uppercase tracking-tight">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-brand-orange transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-8 overflow-y-auto max-h-[70vh] text-gray-400 prose prose-invert prose-sm max-w-none">
                    {content}
                </div>

                <div className="p-6 border-t border-white/10 bg-brand-black/50 text-right">
                    <button
                        onClick={onClose}
                        className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-sm text-sm font-bold transition-all"
                    >
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
