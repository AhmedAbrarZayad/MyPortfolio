import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            period: 'Feb 2026 - Present',
            title: 'Full-Stack AI Engineer',
            company: 'AI Solutions BD • Remote, Bangladesh',
            description: 'Promoted from intern to core engineer, delivering scalable, AI-integrated web solutions for internal products and diverse client needs.',
            techStack: ['FastAPI', 'Django', 'Next.js', 'React', 'TypeScript', 'Redis', 'Docker', 'Nginx'],
            highlights: [
                { label: 'Dynamic Architecture', text: 'Designed a metadata-driven form builder for an immigration service, allowing frontend UI to render dynamically from versioned backend states.' },
                { label: 'AI & OCR Automation', text: 'Built OCR pipelines for PDF/image extraction and currently developing a RAG-based system to automate complex sam.gov proposal reports.' },
                { label: 'System Integration', text: 'Engineered secure webhook endpoints for third-party payment routing and refactored auth flows to eliminate redundant API calls, drastically accelerating sign-in.' }
            ],
            isActive: true
        },
        {
            period: 'Aug 2025 - Present',
            title: 'Founding Tech Lead',
            company: 'Paleon • Remote, Netherlands',
            description: 'Led end-to-end development of an AI-powered paleontology learning platform, successfully converting a 1M+ social media following into 11,000+ active app users.',
            techStack: ['Flutter', 'FastAPI', 'Redis', 'Celery', 'Supabase', 'Docker', 'Railway'],
            highlights: [
                { label: 'AI Optimization', text: 'Pivoted from a RAG pipeline to a constrained, rule-based prompt engineering approach for fossil identification, reducing AI latency by 50% while ensuring hallucination-free outputs.' },
                { label: 'Performance Tuning', text: 'Audited and optimized the Flutter app’s initialization sequence, slashing cold start loading time from 6–10s down to 3–4s.' },
                { label: 'DevOps & Architecture', text: 'Upgraded backend to a robust SQLAlchemy/Alembic ORM structure, Dockerized services, and established reliable staging/production deployment pipelines via Railway.' }
            ],
            isActive: true
        },
    ];

    return (
        <div className="w-full">
            <motion.div 
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <motion.div 
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    <i className="ph ph-briefcase text-xl"></i>
                </motion.div>
                <h4 className="text-2xl font-bold text-black dark:text-white">Experience (2)</h4>
            </motion.div>

            <div className="relative border-l border-gray-200 dark:border-white/10 ml-3 md:ml-5 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        className="relative pl-8 md:pl-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ x: 5 }}
                    >
                        {/* Timeline Dot */}
                        <motion.span 
                            className={`absolute -left-[5px] md:-left-[9px] top-2 h-2.5 w-2.5 md:h-4 md:w-4 rounded-full ${
                                exp.isActive 
                                    ? 'bg-primary ring-4 ring-white dark:ring-[#080808]' 
                                    : 'bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-[#080808]'
                            }`}
                            animate={exp.isActive ? {
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.8, 1]
                            } : {}}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        
                        {/* Period */}
                        <span className={`text-xs font-bold tracking-wide uppercase mb-2 block ${
                            exp.isActive ? 'text-primary' : 'text-gray-500'
                        }`}>
                            {exp.period}
                        </span>
                        
                        {/* Title & Company */}
                        <h5 className="text-xl font-bold text-black dark:text-white mb-1">{exp.title}</h5>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{exp.company}</p>
                        
                        {/* Main Description */}
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4">
                            {exp.description}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {exp.techStack.map((tech, i) => (
                                <span 
                                    key={i} 
                                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Key Highlights */}
                        <ul className="space-y-3">
                            {exp.highlights.map((highlight, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                    <span>
                                        <strong className="text-gray-800 dark:text-gray-200">{highlight.label}:</strong> {highlight.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;