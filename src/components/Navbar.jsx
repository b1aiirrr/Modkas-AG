import React from 'react';

const Navbar = () => {
    const logo = "/logo.png";
    return (
        <nav className="fixed top-0 w-full z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Modkas Logo" className="w-12 h-12 object-contain" />
                        <div className="flex flex-col">
                            <span className="text-xl font-extrabold tracking-tighter text-white leading-none">MODKAS</span>
                            <span className="text-[9px] tracking-[0.3em] text-brand-orange font-mono uppercase font-bold">Auto Garage</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</a>
                        <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Why Us</a>
                        <a href="#location" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Location</a>
                        <a
                            href="https://wa.me/254722785494?text=Hello%20Modkas%20Auto%20Garage%2C%0A%0AI%20would%20like%20to%20book%20a%20computerized%20diagnostic%20service%20for%20my%20vehicle.%0A%0AVehicle%20Make%2FModel%3A%20%0AYear%3A%20%0ACurrent%20Issues%2FConcerns%3A%20%0A%0APlease%20let%20me%20know%20your%20availability.%20Thank%20you!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-sm text-sm font-bold transition-all inline-block"
                        >
                            BOOK DIAGNOSTIC
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
