import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
    const text = "Welcome";
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const lineVariants = {
        hidden: { width: 0 },
        visible: { 
            width: "100%",
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 1.5
            }
        }
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                delay: 2
            }
        }
    };

    React.useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div 
            className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-50 flex items-center justify-center overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Animated Orbs */}
            <motion.div
                className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <div className="glass-panel rounded-3xl p-12 md:p-20 max-w-3xl mx-4 relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-10">
                    <motion.div 
                        className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative z-10 text-center">
                    {/* Welcome Text */}
                    <div className="flex justify-center mb-8">
                        {text.split('').map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className="font-display font-extrabold text-7xl md:text-9xl text-white uppercase"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>

                    {/* Animated Line */}
                    <motion.div 
                        className="h-[2px] bg-primary mx-auto mb-8"
                        variants={lineVariants}
                        style={{ maxWidth: '300px' }}
                    />

                    {/* Subtitle */}
                    <motion.div
                        variants={subtitleVariants}
                        className="space-y-3"
                    >
                        <p className="text-2xl md:text-3xl font-medium text-white">
                            to my portfolio
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>
                            <p className="text-sm md:text-base text-gray-400 tracking-wider uppercase">
                                Ahmed Abrar Zayad
                            </p>
                            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 tracking-wide">
                            Full-Stack Web Developer
                        </p>
                    </motion.div>

                    {/* Loading Indicator */}
                    <motion.div 
                        className="mt-12 flex justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                    >
                        <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default SplashScreen;
