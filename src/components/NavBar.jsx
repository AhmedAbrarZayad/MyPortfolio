import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Offset for fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-black/90 backdrop-blur-md">
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary origin-left"
                style={{ scaleX }}
            />
            <div className="flex items-center gap-1 group cursor-pointer z-50" onClick={(e) => scrollToSection(e, '#hero')}>
                <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                    Ahmed Abrar Zayad
                </span>
                <span className="w-1.5 h-1.5 bg-primary rounded-sm mt-2"></span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Right Side: Download CV + Mobile Menu Button */}
            <div className="flex items-center gap-4 z-50">
                <a 
                    className="hidden sm:inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold tracking-wide uppercase border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 glass-panel" 
                    href="#"
                >
                    <span>Download CV</span>
                    <i className="ph ph-download-simple text-lg"></i>
                </a>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg glass-panel hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <i className="ph ph-x text-2xl text-gray-700 dark:text-gray-300"></i>
                    ) : (
                        <i className="ph ph-list text-2xl text-gray-700 dark:text-gray-300"></i>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`lg:hidden fixed top-[88px] left-0 w-full bg-black/95 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
            >
                <div className="flex flex-col px-6 py-4 gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 py-2"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        className="sm:hidden inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 glass-panel mt-2" 
                        href="#"
                    >
                        <span>Download CV</span>
                        <i className="ph ph-download-simple text-lg"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
