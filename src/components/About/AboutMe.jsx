import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
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
            description: 'Exploring virtual worlds and game mechanics inspires creative problem-solving.'
        },
        {
            icon: 'ph-book-open',
            title: 'Reading',
            description: 'Constantly learning through tech blogs, research papers, and sci-fi novels.'
        },
        {
            icon: 'ph-mountains',
            title: 'Hiking',
            description: 'Finding balance and mental clarity in nature, away from screens.'
        },
        {
            icon: 'ph-coffee',
            title: 'Coffee Culture',
            description: 'Appreciating the art of a good brew while ideating new projects.'
        }
    ];

    return (
        <section id="about" className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-white/5 overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div 
                className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
                        className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-2"
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
                                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent origin-top"
                                variants={lineVariants}
                            />
                            <div className="pl-8">
                                <motion.h3 
                                    className="text-2xl font-display font-bold text-black dark:text-white mb-4 flex items-center gap-3"
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.i 
                                        className="ph ph-rocket-launch text-emerald-500 text-3xl"
                                        animate={{ rotate: [0, -15, 15, -15, 0], y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
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
                                    It all started in 2020 with Harvard’s CS50. That initial spark of curiosity quickly evolved into a deep dive into Competitive Programming. I spent years honing my algorithmic thinking, eventually reaching <span className="text-emerald-500 font-semibold">Specialist rank (1410)</span> on Codeforces and securing top placements in university-level contests, including 2nd in my batch at CUET, and competing in the AUST and IIUC Inter-University contests.
                                </motion.p>
                                <motion.p 
                                    className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    However, I realized I didn't just want to solve isolated puzzles; I wanted to build solutions that impact people. This drove my transition into software development and hackathons. My teams and I earned spots in the offline rounds of major events, including the CUET Inter-University Hackathon (partnered with BongoDev) and the CUET Intra-University Hackathon (with Poridhi).
                                </motion.p>
                                <motion.p 
                                    className="text-gray-600 dark:text-gray-400 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    Parallel to development, I spent two years sharpening my security mindset through Capture The Flag (CTF) competitions, culminating in an offline selection at UAP Cyber Siege. Most recently, I bridged my development skills with data science by publishing an <span className="text-emerald-500 font-semibold">IEEE conference paper</span> on predicting student dropout using Machine Learning, and I’m currently diving deeper into applied AI research.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - What I Love */}
                    <motion.div variants={itemVariantsRight} className="space-y-6">
                        <div className="relative">
                            <motion.div 
                                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent origin-top"
                                variants={lineVariants}
                            />
                            <div className="pl-8">
                                <motion.h3 
                                    className="text-2xl font-display font-bold text-black dark:text-white mb-4 flex items-center gap-3"
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.i 
                                        className="ph ph-heart text-emerald-500 text-3xl"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                    />
                                    What I Love
                                </motion.h3>
                                <motion.p 
                                    className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    I thrive at the intersection of logic and creativity. Whether I'm untangling a complex algorithm, architecting a scalable backend, or training a new ML model, I love work that pushes my boundaries and makes a tangible impact.
                                </motion.p>
                                <div className="space-y-4">
                                    {[
                                        { 
                                            icon: 'ph-brain',
                                            title: 'Deep Problem Solving:', 
                                            desc: 'From CP algorithms to production system bottlenecks, I love the thrill of untangling complex logic.' 
                                        },
                                        { 
                                            icon: 'ph-rocket',
                                            title: 'Building Interesting Projects:', 
                                            desc: 'Turning abstract, challenging ideas into tangible, user-friendly applications.' 
                                        },
                                        { 
                                            icon: 'ph-trophy',
                                            title: 'Embracing Good Challenges:', 
                                            desc: 'Whether it\'s a tough CTF flag or a new AI research topic, I thrive on the friction that leads to growth.' 
                                        },
                                        { 
                                            icon: 'ph-users',
                                            title: 'Collaborative Innovation:', 
                                            desc: 'Working with driven teams in hackathons and research to bring ambitious ideas to life.' 
                                        }
                                    ].map((item, index) => (
                                        <motion.div 
                                            key={index}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 transition-colors"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <motion.i 
                                                className={`ph ${item.icon} text-emerald-500 text-xl mt-1`}
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
                                className="ph ph-palette text-emerald-500 text-3xl"
                                animate={{ rotate: [0, 10, -10, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
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
                            When I'm not immersed in code or research, I believe in maintaining a balanced life. These hobbies keep me inspired, creative, and grounded.
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
                                whileHover={{ y: -12, rotateY: 5, scale: 1.05, transition: { duration: 0.3 } }}
                                className="group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 p-6 hover:border-emerald-500/30 transition-all duration-300"
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ scale: 0, rotate: 45 }}
                                    whileHover={{ scale: 1.5, rotate: 0 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <div className="relative z-10">
                                    <motion.div 
                                        className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors"
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <motion.i 
                                            className={`ph ${hobby.icon} text-3xl text-emerald-500`}
                                            animate={{ y: [0, -3, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                        />
                                    </motion.div>
                                    <motion.h4 
                                        className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-emerald-500 transition-colors"
                                    >
                                        {hobby.title}
                                    </motion.h4>
                                    <motion.p 
                                        className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
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
                        className="relative bg-white/50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.i 
                            className="ph ph-quotes text-6xl text-emerald-500/20 absolute top-6 left-6"
                            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                        />
                        <motion.p 
                            className="text-xl md:text-2xl font-display font-medium text-black dark:text-white leading-relaxed relative z-10 italic"
                        >
                            "If it runs, don't ask why. If it doesn't, there is AI"
                        </motion.p>
                        <motion.div 
                            className="mt-6 flex items-center justify-center gap-2"
                        >
                            <motion.div 
                                className="h-[2px] bg-emerald-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            />
                            <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wider">Ahmed Abrar Zayad</span>
                            <motion.div 
                                className="h-[2px] bg-emerald-500"
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