import React from 'react';
import Experience from './Experience';
import Education from './Education';

const ExperienceAndEducationLayout = () => {
    return (
        <section className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-[#080808] border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Resume</h3>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">Experience & Education</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <Experience />
                    <Education />
                </div>
            </div>
        </section>
    );
};

export default ExperienceAndEducationLayout;