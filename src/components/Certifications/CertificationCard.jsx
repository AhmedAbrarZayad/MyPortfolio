import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CertificationCard = ({ certification, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className="relative h-[280px] cursor-pointer perspective-1000"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onHoverStart={() => setIsFlipped(true)}
            onHoverEnd={() => setIsFlipped(false)}
        >
            <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Side */}
                <motion.div
                    className="absolute inset-0 rounded-2xl p-6 bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* Animated Corner Elements */}
                    <motion.div
                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.7, 0.5]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full"
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.5, 0.7, 0.5]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                        {/* Icon and Badge */}
                        <div className="flex items-start justify-between mb-4">
                            <motion.div
                                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <i className="ph ph-seal-check text-3xl"></i>
                            </motion.div>
                            
                            <motion.span
                                className="px-3 py-1 text-xs font-bold bg-primary/20 text-primary rounded-full"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Verified
                            </motion.span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <motion.h5
                                    className="text-lg font-bold text-black dark:text-white mb-2 leading-tight"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {certification.title}
                                </motion.h5>
                                <motion.p
                                    className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {certification.issuer}
                                </motion.p>
                            </div>

                            <div className="flex items-center justify-between">
                                <motion.span
                                    className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <i className="ph ph-calendar-blank"></i>
                                    {certification.issueDate}
                                </motion.span>
                                <motion.div
                                    className="text-primary"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <i className="ph ph-arrow-right text-lg"></i>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Back Side */}
                <motion.div
                    className="absolute inset-0 rounded-2xl p-6 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 dark:border-primary/20 backdrop-blur-sm overflow-hidden"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    {/* Animated Background Pattern */}
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                        animate={{
                            backgroundPosition: ['0px 0px', '20px 20px', '0px 0px']
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <motion.div
                                className="flex items-center gap-2 mb-4"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <i className="ph ph-link-simple text-primary text-xl"></i>
                                <h6 className="text-sm font-bold text-primary">Credential Details</h6>
                            </motion.div>

                            {certification.credentialId && (
                                <motion.div
                                    className="mb-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                                        Credential ID
                                    </p>
                                    <p className="text-sm font-mono text-black dark:text-white break-all">
                                        {certification.credentialId}
                                    </p>
                                </motion.div>
                            )}

                            <motion.div
                                className="mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                    View Credential
                                </p>
                                <motion.a
                                    href={certification.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="break-all line-clamp-2">{certification.credentialUrl}</span>
                                    <i className="ph ph-arrow-square-out"></i>
                                </motion.a>
                            </motion.div>

                            {/* View Certificate PDF Button */}
                            <motion.a
                                href={certification.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold transition-all hover:bg-primary/90 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <i className="ph ph-file-pdf text-lg"></i>
                                View Certificate
                            </motion.a>
                        </div>

                        <motion.div
                            className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <i className="ph ph-info"></i>
                            <span>Hover to flip back</span>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CertificationCard;
