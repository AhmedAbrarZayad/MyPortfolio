import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projectsData';

const ProjectLayout = () => {
    return (
        <section id="projects" className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-[#080808] border-t border-gray-200 dark:border-white/5 overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-end mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <motion.h3 
                            className="text-primary font-bold uppercase tracking-widest text-sm mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Selected Works
                        </motion.h3>
                        <motion.h2 
                            className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Recent Projects
                        </motion.h2>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectLayout;