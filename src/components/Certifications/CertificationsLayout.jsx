import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CertificationCard from './CertificationCard';
import DataCampPDF from '../../assets/Certifications/DataCamp.pdf';
import AdvancedAlgorithmsPDF from '../../assets/Certifications/AdvancedAlgorithms.pdf';
import SupervisedMLPDF from '../../assets/Certifications/SupervisedMachineLearning.pdf';

const CertificationsLayout = () => {
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
        <section
            id="certifications"
            className="min-h-screen py-20 px-6 relative overflow-hidden"
        >
            {/* Optimized Background Elements - Static */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-2xl opacity-60" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-2xl opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header - Simplified */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <i className="ph ph-certificate text-2xl"></i>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                            Certifications
                        </h2>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Professional certifications and achievements in{' '}
                        <span className="text-primary font-semibold">machine learning</span> and{' '}
                        <span className="text-primary font-semibold">data science</span>
                    </p>

                    {/* Decorative Line */}
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
                </div>

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

                {/* Stats Section - Simplified */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">
                                {certificationsData.length}
                            </div>
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                Certifications Earned
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">
                                2
                            </div>
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                Leading Platforms
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-1">
                                <i className="ph ph-trend-up text-3xl"></i>
                                100%
                            </div>
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                Verified & Active
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationsLayout;
