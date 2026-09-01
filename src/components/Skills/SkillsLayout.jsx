import React from 'react';
import { motion } from 'framer-motion';

const SkillsLayout = () => {
    // Clean, categorized skill tags. No fake percentages.
    const skillCategories = [
        {
            title: 'Languages',
            icon: 'ph-code',
            items: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'Java', 'C++', 'C#']
        },
        {
            title: 'Frontend & Mobile',
            icon: 'ph-device-mobile',
            items: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'HTML/CSS']
        },
        {
            title: 'Backend & AI',
            icon: 'ph-server',
            items: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'RAG']
        },
        {
            title: 'Databases',
            icon: 'ph-database',
            items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase']
        },
        {
            title: 'DevOps & Tools',
            icon: 'ph-cloud',
            items: ['Docker', 'Railway', 'Vercel', 'Nginx', 'PM2', 'Git', 'GitHub']
        }
    ];

    // Tech icons for the orbital display (Updated to match your actual stack)
    const techIcons = [
        { name: 'JS', icon: 'ph-file-js', color: '#F7DF1E' },
        { name: 'TS', icon: 'ph-file-ts', color: '#3178C6' },
        { name: 'React', icon: 'ph-atom', color: '#61DAFB' },
        { name: 'Node', icon: 'ph-leaf', color: '#339933' },
        { name: 'Python', icon: 'ph-file-py', color: '#3776AB' },
        { name: 'Docker', icon: 'ph-package', color: '#2496ED' },
        { name: 'PostgreSQL', icon: 'ph-database', color: '#336791' },
        { name: 'Next.js', icon: 'ph-triangle', color: '#ffffff' },
        { name: 'Flutter', icon: 'ph-app-window', color: '#02569B' },
        { name: 'FastAPI', icon: 'ph-lightning', color: '#009688' },
        { name: 'Tailwind', icon: 'ph-palette', color: '#06B6D4' },
        { name: 'Redis', icon: 'ph-circles-three-plus', color: '#DC382D' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };

    return (
        <section id="skills" className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-white/5 overflow-hidden">
            {/* Floating Background Element */}
            <motion.div
                className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
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
                    className="mb-16 text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h3 
                        className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-2"
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
                        Technical Arsenal
                    </motion.h2>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Side - Categorized Skill Tags (Takes up 3 columns) */}
                    <motion.div 
                        className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-emerald-500/30 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                        <i className={`ph ${category.icon} text-xl text-emerald-500`}></i>
                                    </div>
                                    <h3 className="text-lg font-bold text-black dark:text-white">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: skillIndex * 0.05 }}
                                            className="px-3 py-1.5 text-xs font-medium rounded-md bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:bg-emerald-500/10 hover:text-emerald-500 hover:border-emerald-500/30 transition-all duration-300 cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Side - Circular Tech Icons (Takes up 2 columns) */}
                    <motion.div 
                        className="lg:col-span-2 relative h-[400px] md:h-[500px] flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* Center Circle */}
                        <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-2xl z-10 border-4 border-[#050505]">
                            <i className="ph ph-code text-3xl md:text-4xl text-white"></i>
                        </div>

                        {/* Orbital Icons */}
                        {techIcons.map((tech, index) => {
                            const totalIcons = techIcons.length;
                            const angle = (index * 360) / totalIcons;
                            const radius = 160; // Adjusted for better fit
                            const angleInRadians = ((angle - 90) * Math.PI) / 180;
                            const x = Math.cos(angleInRadians) * radius;
                            const y = Math.sin(angleInRadians) * radius;

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute"
                                    style={{ left: '50%', top: '50%' }}
                                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                                    whileInView={{ x, y, opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15,
                                        delay: index * 0.05
                                    }}
                                    whileHover={{ scale: 1.2, zIndex: 20 }}
                                >
                                    <div
                                        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border shadow-lg flex flex-col items-center justify-center cursor-pointer backdrop-blur-sm"
                                        style={{
                                            background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
                                            borderColor: `${tech.color}40`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        <i className={`ph ${tech.icon} text-xl md:text-2xl mb-1`} style={{ color: tech.color }}></i>
                                        <span className="text-[9px] font-bold uppercase tracking-wide" style={{ color: tech.color }}>
                                            {tech.name}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Orbital Ring */}
                        <motion.div
                            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border-2 border-dashed border-emerald-500/20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsLayout;