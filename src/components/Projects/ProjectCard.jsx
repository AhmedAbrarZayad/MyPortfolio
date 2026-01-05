import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        // Magnetic pull strength
        const strength = 0.15;
        
        setPosition({
            x: distanceX * strength,
            y: distanceY * strength
        });

        // 3D tilt effect
        const tiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
        const tiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        
        setTilt({
            rotateX: tiltX,
            rotateY: tiltY
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setTilt({ rotateX: 0, rotateY: 0 });
    };

    const handleViewMore = () => {
        navigate(`/project/${project.id}`);
    };

    return (
        <motion.div 
            ref={ref}
            className="bg-gray-50 dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group hover:border-primary transition-all duration-300 cursor-pointer"
            style={{
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleViewMore}
            animate={{
                x: position.x,
                y: position.y,
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                x: { type: "spring", stiffness: 150, damping: 15 },
                y: { type: "spring", stiffness: 150, damping: 15 },
                rotateX: { type: "spring", stiffness: 200, damping: 20 },
                rotateY: { type: "spring", stiffness: 200, damping: 20 },
                opacity: { duration: 0.5, delay: index * 0.1 },
            }}
        >
            <div className="relative h-60 overflow-hidden">
                <motion.img 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                    src={project.image}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div 
                    className="absolute inset-0 bg-primary/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-white">
                        {project.category}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                    >
                        View Details <i className="ph ph-arrow-right"></i>
                    </motion.button>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-black dark:text-white">{project.title}</h3>
                    <motion.div 
                        className="text-gray-400 dark:text-gray-500"
                        whileHover={{ x: 5 }}
                    >
                        <i className="ph ph-arrow-up-right text-xl"></i>
                    </motion.div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span 
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-white/10">
                    <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                    >
                        <i className="ph ph-globe"></i> Live Demo
                    </a>
                    <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                    >
                        <i className="ph ph-github-logo"></i> Source
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;