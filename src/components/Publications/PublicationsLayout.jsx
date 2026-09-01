import React from 'react';
import { motion } from 'framer-motion';

const publicationUrl = 'https://ieeexplore.ieee.org/document/11525980';

const PublicationsLayout = () => {
    return (
        <section
            id="publications"
            className="relative z-10 w-full bg-[#050505] px-6 py-24 md:px-12 lg:px-24 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-2">
                        Research
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                        Publications
                    </h2>
                </motion.div>

                <motion.article
                    className="group max-w-5xl rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:p-8 hover:border-emerald-500/40 transition-colors duration-300"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                            <i className="ph ph-article text-2xl" aria-hidden="true" />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                                    IEEE Conference Paper
                                </span>
                                <span className="text-sm text-gray-500">December 2025</span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                                Towards a Data-Driven Approach for Early Identification of At-Risk Students in Higher Education
                            </h3>

                            <p className="text-gray-400 mb-2">
                                Ahmed Abrar Zayad, Ashim Dey, and Annesha Das
                            </p>
                            <p className="text-sm text-gray-500 mb-6">
                                2025 IEEE International Women in Engineering Conference on Electrical and Computer Engineering (WIECON-ECE)
                            </p>

                            <a
                                href={publicationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                            >
                                View on IEEE Xplore
                                <i className="ph ph-arrow-up-right text-lg" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
};

export default PublicationsLayout;
