import React from 'react';

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
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <i className="ph ph-graduation-cap text-xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-black dark:text-white">Education</h4>
            </div>
            <div className="space-y-6">
                {educationItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="group relative p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300"
                    >
                        <div className={`absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-all ${
                            item.isPrimary 
                                ? 'text-primary' 
                                : 'text-gray-400 group-hover:text-primary'
                        }`}>
                            <i className={`ph ${item.icon} text-2xl`}></i>
                        </div>
                        <span className={`text-xs font-bold tracking-wide uppercase mb-2 block ${
                            item.isPrimary ? 'text-primary' : 'text-gray-500'
                        }`}>
                            {item.period}
                        </span>
                        <h5 className="text-lg font-bold text-black dark:text-white mb-1">{item.title}</h5>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.institution}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;