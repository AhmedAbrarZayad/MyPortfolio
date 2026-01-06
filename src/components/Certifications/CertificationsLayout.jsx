import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CertificationCard from './CertificationCard';
import DataCampPDF from '../../assets/Certifications/DataCamp.pdf';
import AdvancedAlgorithmsPDF from '../../assets/Certifications/AdvancedAlgorithms.pdf';
import SupervisedMLPDF from '../../assets/Certifications/SupervisedMachineLearning.pdf';

const CertificationsLayout = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    const certificationsData = [
        {
            title: 'Supervised Learning with scikit-learn',
            issuer: 'DataCamp',
            issueDate: 'May 2025',
            credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/3af379af6971234af5eef33261db20ed1950299b',
            credentialId: null,
            pdfUrl: DataCampPDF
        },
        {
            title: 'Advanced Learning Algorithms',
            issuer: 'DeepLearning.AI, Stanford University',
            issueDate: 'March 2025',
            credentialUrl: 'https://www.coursera.org/account/accomplishments/records/ELRI2K510BY0',
            credentialId: 'ELRI2K510BY0',
            pdfUrl: AdvancedAlgorithmsPDF
        },
        {
            title: 'Supervised Machine Learning: Regression and Classification',
            issuer: 'DeepLearning.AI, Stanford University',
            issueDate: 'February 2025',
            credentialUrl: 'https://www.coursera.org/account/accomplishments/records/37FY2QPBLYTS',
            credentialId: '37FY2QPBLYTS',
            pdfUrl: SupervisedMLPDF
        }
    ];

    return (
        <motion.section
            ref={sectionRef}
            id="certifications"
            className="min-h-screen py-20 px-6 relative overflow-hidden"
            style={{ opacity, scale }}
        >
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -50, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 10 }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 mb-4"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                    >
                        <motion.div
                            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
                            animate={{
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <i className="ph ph-certificate text-2xl"></i>
                        </motion.div>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Certifications
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Professional certifications and achievements in{' '}
                        <span className="text-primary font-semibold">machine learning</span> and{' '}
                        <span className="text-primary font-semibold">data science</span>
                    </motion.p>

                    {/* Decorative Line */}
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {certificationsData.map((certification, index) => (
                        <CertificationCard
                            key={index}
                            certification={certification}
                            index={index}
                        />
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="text-4xl font-bold text-primary mb-2"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                {certificationsData.length}
                            </motion.div>
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                Certifications Earned
                            </div>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="text-4xl font-bold text-primary mb-2"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                2
                            </motion.div>
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                Leading Platforms
                            </div>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-1"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <i className="ph ph-trend-up text-3xl"></i>
                                100%
                            </motion.div>
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                Verified & Active
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CertificationsLayout;
