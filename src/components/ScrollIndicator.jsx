import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollIndicator = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.i 
                            className="ph ph-arrow-up text-xl"
                            animate={{ y: [0, -3, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Scroll Down Indicator (Only visible on Hero section) */}
            <motion.div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2"
                initial={{ opacity: 1 }}
                animate={{ 
                    opacity: showScrollTop ? 0 : 1,
                    y: showScrollTop ? 20 : 0 
                }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: showScrollTop ? 'none' : 'auto' }}
            >
                <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
                <motion.div
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
                    whileHover={{ borderColor: '#8B5CF6' }}
                >
                    <motion.div
                        className="w-1 h-2 bg-primary rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </motion.div>
        </>
    );
};

export default ScrollIndicator;
