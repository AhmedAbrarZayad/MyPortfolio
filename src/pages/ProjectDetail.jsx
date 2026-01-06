import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#080808] pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                {/* Back Button */}
                <motion.button
                    onClick={() => navigate('/#projects')}
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: -5 }}
                >
                    <i className="ph ph-arrow-left text-xl"></i>
                    <span>Back to Projects</span>
                </motion.button>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-black dark:text-white mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
                        {project.fullDescription}
                    </p>
                </motion.div>

                {/* Project Images Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
                >
                    {project.images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="overflow-hidden rounded-xl"
                        >
                            <img 
                                src={img} 
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Project Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Technology Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-3">
                                <i className="ph ph-stack text-primary text-3xl"></i>
                                Technology Stack
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 + index * 0.05 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium text-sm"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Challenges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-3">
                                <i className="ph ph-warning-circle text-primary text-3xl"></i>
                                Challenges Faced
                            </h2>
                            <div className="space-y-3">
                                {project.challenges.map((challenge, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="flex items-start gap-3 glass-panel p-4 rounded-lg"
                                    >
                                        <i className="ph ph-check-circle text-primary text-xl mt-1"></i>
                                        <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Future Improvements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-3">
                                <i className="ph ph-rocket-launch text-primary text-3xl"></i>
                                Future Improvements
                            </h2>
                            <div className="space-y-3">
                                {project.futureImprovements.map((improvement, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="flex items-start gap-3 glass-panel p-4 rounded-lg"
                                    >
                                        <i className="ph ph-arrow-circle-up text-primary text-xl mt-1"></i>
                                        <p className="text-gray-700 dark:text-gray-300">{improvement}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Project Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="glass-panel p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-bold text-black dark:text-white mb-4">Project Links</h3>
                            <div className="space-y-3">
                                {project.liveLink && (
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        className="flex items-center gap-3 p-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                                    >
                                        <i className="ph ph-globe text-xl"></i>
                                        <span className="font-medium">Live Demo</span>
                                        <i className="ph ph-arrow-square-out ml-auto"></i>
                                    </motion.a>
                                )}
                                {project.githubLink && (
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary transition-colors"
                                    >
                                        <i className="ph ph-github-logo text-xl"></i>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">GitHub Repo</span>
                                        <i className="ph ph-arrow-square-out ml-auto text-gray-500"></i>
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>

                        {/* Project Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass-panel p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-bold text-black dark:text-white mb-4">Project Details</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <i className="ph ph-calendar text-primary text-lg mt-0.5"></i>
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400">Duration</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200">{project.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <i className="ph ph-tag text-primary text-lg mt-0.5"></i>
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400">Category</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
