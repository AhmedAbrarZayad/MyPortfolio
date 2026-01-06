import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SkillsCard from './SkillsCard';

// Optimized Orbital Icon Component - Removed expensive magnetic effect
const OrbitalIcon = ({ tech, index, x, y }) => {
    return (
        <motion.div
            className="absolute"
            style={{
                left: '50%',
                top: '50%',
            }}
            initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0
            }}
            animate={{
                x: x,
                y: y,
                opacity: 1,
                scale: 1
            }}
            transition={{
                opacity: { delay: index * 0.1, duration: 0.8 },
                scale: { delay: index * 0.1, duration: 0.8 }
            }}
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 }
            }}
        >
            <div
                className="w-16 h-16 rounded-2xl border shadow-lg flex flex-col items-center justify-center cursor-pointer"
                style={{
                    background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
                    borderColor: `${tech.color}40`,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <i 
                    className={`ph ${tech.icon} text-2xl mb-1`}
                    style={{ color: tech.color }}
                ></i>
                <span 
                    className="text-[8px] font-bold uppercase tracking-wide"
                    style={{ color: tech.color }}
                >
                    {tech.name}
                </span>
            </div>
        </motion.div>
    );
};

const SkillsLayout = () => {
    const skillsData = [
        {
            title: 'Programming Languages',
            icon: 'ph-code',
            skills: [
                { name: 'JavaScript', level: 95 },
                { name: 'Python', level: 95 },
                { name: 'C#', level: 80 },
                { name: 'Dart', level: 95 },
                { name: 'C++', level: 85 },
                { name: 'Java', level: 90 }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            icon: 'ph-brackets-curly',
            skills: [
                { name: 'React', level: 95 },
                { name: 'Next.js', level: 95 },
                { name: 'Node.js', level: 90 },
                { name: 'Flutter', level: 90 },
                { name: 'FastAPI', level: 80 },
                { name: 'Tailwind CSS', level: 98 }
            ]
        },
        {
            title: 'Databases',
            icon: 'ph-database',
            skills: [
                { name: 'PostgreSQL', level: 85 },
                { name: 'MySQL', level: 85 },
                { name: 'MongoDB', level: 80 },
                { name: 'Redis', level: 70 }
            ]
        },
        {
            title: 'Cloud, DevOps & Platforms',
            icon: 'ph-cloud',
            skills: [
                { name: 'Docker', level: 85 },
                { name: 'Vercel', level: 90 },
                { name: 'Firebase', level: 80 }
            ]
        }
    ];

    // Tech icons for orbital display
    const techIcons = [
        { name: 'JS', icon: 'ph-file-js', color: '#F7DF1E' },
        { name: 'React', icon: 'ph-atom', color: '#61DAFB' },
        { name: 'Node', icon: 'ph-leaf', color: '#339933' },
        { name: 'Next.js', icon: 'ph-triangle', color: '#000000' },
        { name: 'Python', icon: 'ph-file-py', color: '#3776AB' },
        { name: 'MongoDB', icon: 'ph-plant', color: '#47A248' },
        { name: 'PostgreSQL', icon: 'ph-database', color: '#336791' },
        { name: 'Docker', icon: 'ph-package', color: '#2496ED' },
        { name: 'Firebase', icon: 'ph-flame', color: '#FFCA28' },
        { name: 'MySQL', icon: 'ph-cylinder', color: '#4479A1' },
        { name: 'Tailwind', icon: 'ph-palette', color: '#06B6D4' },
        { name: 'Flutter', icon: 'ph-app-window', color: '#02569B' }
    ];

    return (
        <section id="skills" className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-white/5 overflow-hidden">
            {/* Floating Background Element */}
            <motion.div
                className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h3 
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Expertise
                    </motion.h3>
                    <motion.h2 
                        className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Technical Skills
                    </motion.h2>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Skills Cards */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {skillsData.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <SkillsCard 
                                    title={category.title}
                                    icon={category.icon}
                                    skills={category.skills}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Side - Circular Tech Icons */}
                    <motion.div 
                        className="relative h-[500px] flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Center Circle */}
                        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-2xl z-10">
                            <i className="ph ph-code text-4xl text-white"></i>
                        </div>

                        {/* Orbital Icons */}
                        {techIcons.map((tech, index) => {
                            const totalIcons = techIcons.length;
                            const angle = (index * 360) / totalIcons;
                            const radius = 200;
                            const angleInRadians = ((angle - 90) * Math.PI) / 180; // Start from top
                            const x = Math.cos(angleInRadians) * radius;
                            const y = Math.sin(angleInRadians) * radius;

                            return (
                                <OrbitalIcon 
                                    key={index}
                                    tech={tech}
                                    index={index}
                                    x={x}
                                    y={y}
                                />
                            );
                        })}

                        {/* Orbital Ring */}
                        <motion.div
                            className="absolute w-[400px] h-[400px] rounded-full border-2 border-dashed border-primary/20"
                            animate={{
                                rotate: 360
                            }}
                            transition={{
                                duration: 60,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsLayout;