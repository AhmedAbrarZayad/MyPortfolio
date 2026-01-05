import React from 'react';

const Experience = () => {
    const experiences = [
        {
            period: '2025 - Present',
            title: 'Full Stack AI Engineer',
            company: 'PaleonApp • Remote, Netherlands',
            description: 'Lead the development of Paleon App, utilizing Flutter, FastAPI and RAG to create an AI-powered paleontology learning platform. Improved the app performance by 50% through optimized code and architecture.',
            isActive: true
        },
    ];

    return (
        <div>
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <i className="ph ph-briefcase text-xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-black dark:text-white">Experience</h4>
            </div>
            <div className="relative border-l border-gray-200 dark:border-white/10 ml-3 md:ml-5 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8">
                        <span className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${
                            exp.isActive 
                                ? 'bg-primary ring-4 ring-white dark:ring-[#080808]' 
                                : 'bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-[#080808]'
                        }`}></span>
                        <span className={`text-xs font-bold tracking-wide uppercase mb-2 block ${
                            exp.isActive ? 'text-primary' : 'text-gray-500'
                        }`}>
                            {exp.period}
                        </span>
                        <h5 className="text-xl font-bold text-black dark:text-white mb-1">{exp.title}</h5>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;