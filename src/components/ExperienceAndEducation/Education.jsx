import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const educationItems = [
        {
            period: '2023 - 2027',
            title: 'BSc. in Computer Science',
            institution: 'Chittagong University of Engineering & Technology',
            icon: 'ph-certificate',
            isPrimary: true
        },
        {
            period: '2020 - 2022',
            title: 'HSC',
            institution: 'Chattogram Cantonment Public College',
            icon: 'ph-student',
            isPrimary: false
        },
    ];

    return (
        <div>
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
                    <i className="ph ph-graduation-cap text-xl"></i>
                </motion.div>
                <h4 className="text-2xl font-bold text-black dark:text-white">Education</h4>
            </motion.div>
            <div className="space-y-6">
                {educationItems.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="group relative p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                        }}
                    >
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div 
                            className={`absolute top-6 right-6 transition-all ${
                            item.isPrimary 
                                ? 'text-primary' 
                                : 'text-gray-400 group-hover:text-primary'
                        }`}
                            initial={{ opacity: 0.2, rotate: 0 }}
                            whileHover={{ opacity: 1, rotate: 10, scale: 1.1 }}
                        >
                            <i className={`ph ${item.icon} text-2xl`}></i>
                        </motion.div>
                        <span className={`text-xs font-bold tracking-wide uppercase mb-2 block ${
                            item.isPrimary ? 'text-primary' : 'text-gray-500'
                        }`}>
                            {item.period}
                        </span>
                        <h5 className="text-lg font-bold text-black dark:text-white mb-1">{item.title}</h5>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.institution}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;