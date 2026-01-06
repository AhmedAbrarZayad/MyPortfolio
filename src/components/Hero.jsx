import React, { useState, useEffect } from 'react';
import BackgroundPic from '../assets/BackgroundPic.png';
import ProfilePic from '../assets/ProfilePic/ProfilePic.jpeg';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    
    const text = "Ahmed Abrar Zayad — Full-Stack Developer, I specialize in building scalable, high-performance web and mobile applications, crafting end-to-end solutions with modern frameworks, clean architecture, and AI-powered systems that turn complex ideas into reliable, user-friendly products.";
    
    // Optimized typewriter effect - only updates text content, not individual elements
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 20); // Adjust speed here (lower = faster)
            
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <>
            <div id="hero" className='min-h-screen relative flex flex-col justify-between px-6 md:px-12 lg:px-24 py-24 overflow-hidden bg-black'>
                
                {/* Floating Animated Elements - Optimized */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl opacity-70" style={{ willChange: 'transform' }} />
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl opacity-60" style={{ willChange: 'transform' }} />
                
                {/* Available for work - Top Left */}
                <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-sm font-medium tracking-wider text-gray-400 uppercase">
                        Available For Work
                    </span>
                </div>

                {/* Main Content - Middle */}
                <motion.div className="flex-1 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20" style={{ y: y2, opacity }}>
                    {/* Left Side - Text */}
                    <div className="flex-1">
                        <motion.h1 
                            className="font-display font-extrabold text-[20vw] md:text-[120px] lg:text-[140px] leading-[0.85] tracking-tighter text-white uppercase mb-4"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Zayad
                        </motion.h1>
                        <motion.div 
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        >
                            <motion.div 
                                className="h-[2px] bg-white"
                                initial={{ width: 0 }}
                                animate={{ width: 64 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                            <h2 className="text-xl md:text-2xl font-medium tracking-wide text-gray-300">
                                Full Stack Developer
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Side - Profile Picture */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        {/* Animated Border - Optimized */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary via-blue-500 to-primary rounded-full opacity-60 blur-md animate-spin-slow" style={{ animationDuration: '8s' }} />
                        
                        {/* Profile Image Container */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <motion.div
                                className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img 
                                    src={ProfilePic} 
                                    alt="Ahmed Abrar Zayad"
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            </motion.div>
                            
                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-4 -right-4 bg-primary px-6 py-3 rounded-full shadow-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <span className="text-white font-bold text-sm">Full Stack Dev</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Section - Description and Rate */}
                <motion.div className="grid grid-cols-1 gap-12 items-end" style={{ y: y1 }}>
                    {/* Bottom Left - Description */}
                    <div className="max-w-xl">
                        <i className="ph ph-quotes text-5xl text-gray-700 mb-3 block"></i>
                        <motion.p 
                            className="text-sm md:text-base leading-relaxed text-gray-400 font-light uppercase tracking-wide"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            {displayedText}
                            {currentIndex < text.length && (
                                <span className="inline-block w-1 h-4 bg-primary ml-1 animate-pulse" />
                            )}
                        </motion.p>
                    </div>

                </motion.div>

            </div>
        </>
    );
};

export default Hero;