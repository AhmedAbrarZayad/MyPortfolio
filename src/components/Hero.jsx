import React from 'react';
import BackgroundPic from '../assets/BackgroundPic.png';
import { motion } from 'framer-motion';

const Hero = () => {
    const text = "Ahmed Abrar Zayad — Full-Stack Developer, I specialize in building scalable, high-performance web and mobile applications, crafting end-to-end solutions with modern frameworks, clean architecture, and AI-powered systems that turn complex ideas into reliable, user-friendly products.";
    
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02,
            }
        }
    };

    const child = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <>
            <div id="hero" style={{
                backgroundImage: `url(${BackgroundPic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} className='min-h-screen relative flex flex-col justify-between px-6 md:px-12 lg:px-24 py-24'>
                
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
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="font-display font-extrabold text-[20vw] md:text-[120px] lg:text-[140px] leading-[0.85] tracking-tighter text-white uppercase mb-4">
                        Zayad
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-16 bg-white"></div>
                        <h2 className="text-xl md:text-2xl font-medium tracking-wide text-gray-300">
                            Full Stack Developer
                        </h2>
                    </div>
                </div>

                {/* Bottom Section - Description and Rate */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    {/* Bottom Left - Description */}
                    <div className="max-w-xl">
                        <i className="ph ph-quotes text-5xl text-gray-700 mb-6 block"></i>
                        <motion.p 
                            className="text-sm md:text-base leading-relaxed text-gray-400 font-light uppercase tracking-wide"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            {text.split('').map((char, index) => (
                                <motion.span key={index} variants={child}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Hero;