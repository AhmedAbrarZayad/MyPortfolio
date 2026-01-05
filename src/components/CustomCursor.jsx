import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Multiple follower cursors with different delays
    const followers = [
        { delay: 30, scale: 0.8, opacity: 0.6 },
        { delay: 60, scale: 0.6, opacity: 0.4 },
        { delay: 90, scale: 0.4, opacity: 0.3 },
    ];

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Check for hoverable elements
        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
            {/* Main Cursor */}
            <motion.div
                className="absolute top-0 left-0 w-6 h-6 rounded-full border-2 border-primary bg-primary/20 mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    borderWidth: isHovering ? 3 : 2,
                }}
                transition={{ duration: 0.2 }}
            />

            {/* Follower Cursors */}
            {followers.map((follower, index) => (
                <motion.div
                    key={index}
                    className="absolute top-0 left-0 w-6 h-6 rounded-full bg-primary/30 mix-blend-difference"
                    style={{
                        x: cursorXSpring,
                        y: cursorYSpring,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                    animate={{
                        scale: isHovering ? follower.scale * 2 : follower.scale,
                        opacity: follower.opacity,
                    }}
                    transition={{
                        x: { delay: follower.delay / 1000, type: 'spring', damping: 30, stiffness: 150 },
                        y: { delay: follower.delay / 1000, type: 'spring', damping: 30, stiffness: 150 },
                        scale: { duration: 0.2 },
                    }}
                />
            ))}

            {/* Center Dot */}
            <motion.div
                className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
            />
        </div>
    );
};

export default CustomCursor;
