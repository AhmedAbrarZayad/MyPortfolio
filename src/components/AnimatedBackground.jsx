import React, { useMemo } from 'react';

const AnimatedBackground = () => {
    // Reduced particles for better performance
    const particles = useMemo(() => 
        [...Array(10)].map((_, i) => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 3 + Math.random() * 3,
            delay: Math.random() * 2
        }))
    , []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Optimized Gradient Orbs - Static with CSS */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-2xl opacity-70" />
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl opacity-60" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl opacity-50" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
    );
};

export default AnimatedBackground;
