import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutMe = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -60, rotateY: -15 },
        visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const itemVariantsRight = {
        hidden: { opacity: 0, x: 60, rotateY: 15 },
        visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8, rotateX: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        })
    };

    const lineVariants = {
        hidden: { scaleY: 0, opacity: 0 },
        visible: {
            scaleY: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    const hobbies = [
        {
            icon: 'ph-game-controller',
            title: 'Gaming',
            description: 'Exploring virtual worlds and game mechanics inspires creative problem-solving'
        },
        {
            icon: 'ph-book-open',
            title: 'Reading',
            description: 'Constantly learning through tech blogs, documentation, and sci-fi novels'
        },
        {
            icon: 'ph-mountains',
            title: 'Hiking',
            description: 'Finding balance and clarity in nature, away from screens'
        },
        {
            icon: 'ph-coffee',
            title: 'Coffee Culture',
            description: 'Appreciating the art of coffee while ideating new projects'
        }
    ];

    return (
        <section id="about" className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-white/5 overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div 
                className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-7xl mx-auto relative">
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                    <motion.h3 
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Get to Know Me
                    </motion.h3>
                    <motion.h2 
                        className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        About Me
                    </motion.h2>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Left Column - Story */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="relative">
                            <motion.div 
                                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent origin-top"
                                variants={lineVariants}
                            />
                            <div className="pl-8">
                                <motion.h3 
                                    className="text-2xl font-display font-bold text-black dark:text-white mb-4 flex items-center gap-3"
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.i 
                                        className="ph ph-rocket-launch text-primary text-3xl"
                                        animate={{ 
                                            rotate: [0, -15, 15, -15, 0],
                                            y: [0, -5, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3
                                        }}
                                    />
                                    My Journey
                                </motion.h3>
                                <motion.p 
                                    className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    My programming journey began with curiosity and a passion for solving real-world problems through technology. What started as tinkering with simple scripts quickly evolved into building full-scale applications that serve thousands of users.
                                </motion.p>
                                <motion.p 
                                    className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    Over the years, I've transformed from writing my first "Hello World" to architecting complex, scalable systems. Each project taught me something new—not just about code, but about user experience, system design, and the power of well-crafted software.
                                </motion.p>
                                <motion.p 
                                    className="text-gray-600 dark:text-gray-400 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    Today, I specialize in full-stack development with expertise spanning modern web frameworks, mobile applications, and cloud infrastructure. I'm particularly passionate about creating seamless user experiences backed by robust, performant backend systems.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - What I Love */}
                    <motion.div variants={itemVariantsRight} className="space-y-6">
                        <div className="relative">
                            <motion.div 
                                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent origin-top"
                                variants={lineVariants}
                            />
                            <div className="pl-8">
                                <motion.h3 
                                    className="text-2xl font-display font-bold text-black dark:text-white mb-4 flex items-center gap-3"
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.i 
                                        className="ph ph-heart text-primary text-3xl"
                                        animate={{ 
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatDelay: 2
                                        }}
                                    />
                                    What I Love
                                </motion.h3>
                                <motion.p 
                                    className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    I thrive on projects that challenge me to think outside the box. Whether it's building AI-powered applications, optimizing performance bottlenecks, or crafting intuitive user interfaces—I love work that makes a tangible impact.
                                </motion.p>
                                <div className="space-y-3">
                                    {[
                                        { title: 'Full-Stack Development:', desc: 'Building end-to-end solutions where frontend elegance meets backend power' },
                                        { title: 'Problem Solving:', desc: 'Tackling complex challenges and transforming them into elegant, scalable solutions' },
                                        { title: 'Continuous Learning:', desc: 'Staying ahead with emerging technologies and best practices' },
                                        { title: 'Collaboration:', desc: 'Working with teams to bring innovative ideas to life' }
                                    ].map((item, index) => (
                                        <motion.div 
                                            key={index}
                                            className="flex items-start gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <motion.i 
                                                className="ph ph-check-circle text-primary text-xl mt-1"
                                                whileHover={{ rotate: 360, scale: 1.2 }}
                                                transition={{ duration: 0.5 }}
                                            />
                                            <p className="text-gray-600 dark:text-gray-400">
                                                <span className="font-semibold text-black dark:text-white">{item.title}</span> {item.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Hobbies & Interests Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-12">
                        <motion.h3 
                            className="text-2xl font-display font-bold text-black dark:text-white mb-3 flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.i 
                                className="ph ph-palette text-primary text-3xl"
                                animate={{ 
                                    rotate: [0, 10, -10, 10, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                }}
                            />
                            Beyond the Code
                        </motion.h3>
                        <motion.p 
                            className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            When I'm not immersed in code, I believe in maintaining a balanced life. These hobbies keep me inspired, creative, and grounded.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hobbies.map((hobby, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ 
                                    y: -12,
                                    rotateY: 5,
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative overflow-hidden rounded-2xl glass-panel p-6 hover:border-primary/50 transition-all duration-300 perspective-1000"
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ scale: 0, rotate: 45 }}
                                    whileHover={{ scale: 1.5, rotate: 0 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <div className="relative z-10">
                                    <motion.div 
                                        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <motion.i 
                                            className={`ph ${hobby.icon} text-3xl text-primary`}
                                            animate={{ 
                                                y: [0, -3, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: index * 0.2
                                            }}
                                        />
                                    </motion.div>
                                    <motion.h4 
                                        className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-primary transition-colors"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                    >
                                        {hobby.title}
                                    </motion.h4>
                                    <motion.p 
                                        className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                    >
                                        {hobby.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Personal Quote */}
                <motion.div
                    className="mt-20 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                    <motion.div 
                        className="relative glass-panel rounded-2xl p-8 md:p-12 overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
                            animate={{
                                backgroundPosition: ['0% 0%', '100% 100%'],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                        <motion.i 
                            className="ph ph-quotes text-6xl text-primary/20 absolute top-6 left-6"
                            animate={{ 
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                        />
                        <motion.p 
                            className="text-xl md:text-2xl font-display font-medium text-black dark:text-white leading-relaxed relative z-10 italic"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            "Code is not just about solving problems—it's about crafting experiences that make life easier, more efficient, and more enjoyable."
                        </motion.p>
                        <motion.div 
                            className="mt-6 flex items-center justify-center gap-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <motion.div 
                                className="h-[2px] bg-primary"
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Ahmed Abrar Zayad</span>
                            <motion.div 
                                className="h-[2px] bg-primary"
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
