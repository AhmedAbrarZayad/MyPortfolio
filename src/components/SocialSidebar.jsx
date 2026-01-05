import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
    const socialLinks = [
        { icon: 'ph-instagram-logo', href: 'https://www.instagram.com/ahmedabrarzayad/', label: 'Instagram' },
        { icon: 'ph-github-logo', href: 'https://github.com/AhmedAbrarZayad', label: 'GitHub' },
        { icon: 'ph-linkedin-logo', href: 'https://www.linkedin.com/in/ahmedabrarzayad/', label: 'LinkedIn' }
    ];

    return (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 pr-6">
            <div className="glass-panel rounded-full p-2 flex flex-col gap-4 items-center border-r-0 rounded-r-none pr-3">
                {socialLinks.map((social, index) => (
                    <MagneticIcon key={index} social={social} />
                ))}
            </div>
        </div>
    );
};

const MagneticIcon = ({ social }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        // Magnetic pull strength (reduced for subtlety)
        const strength = 0.3;
        
        setPosition({
            x: distanceX * strength,
            y: distanceY * strength
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.a
            ref={ref}
            aria-label={social.label}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
            href={social.href}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                x: position.x,
                y: position.y
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
            whileHover={{ scale: 1.2 }}
        >
            <i className={`ph ${social.icon} text-xl`}></i>
        </motion.a>
    );
};

export default SocialSidebar;
