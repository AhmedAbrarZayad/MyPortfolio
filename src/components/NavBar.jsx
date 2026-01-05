import React from 'react';

const NavBar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center">
            <div className="flex items-center gap-1 group cursor-pointer z-50">
                <span className="text-2xl font-display font-bold tracking-tight text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                    Ahmed Abrar Zayad
                </span>
                <span className="w-1.5 h-1.5 bg-primary rounded-sm mt-2"></span>
            </div>
            <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl glass-panel hover:bg-white/10 hover:border-white/20 transition-all duration-300 group z-50">
                <div className="grid grid-cols-2 gap-1 p-1">
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-primary transition-colors"></span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-primary transition-colors delay-75"></span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-primary transition-colors delay-100"></span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-primary transition-colors delay-150"></span>
                </div>
            </button>
            <a 
                className="hidden sm:inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 glass-panel z-50" 
                href="#"
            >
                <span>Download CV</span>
                <i className="ph ph-download-simple text-lg"></i>
            </a>
        </nav>
    );
};

export default NavBar;
