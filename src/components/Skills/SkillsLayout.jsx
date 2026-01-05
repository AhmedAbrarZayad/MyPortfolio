import React from 'react';
import SkillsCard from './SkillsCard';

const SkillsLayout = () => {
    const skillsData = [
        {
            title: 'Programming Languages',
            icon: 'ph-code',
            skills: [
                { name: 'JavaScript', level: 95 },
                { name: 'Python', level: 95 },
                { name: 'C#', level: 80 },
                { name: 'Dart', level: 95 },
                { name: 'C++', level: 85 },
                { name: 'Java', level: 90 }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            icon: 'ph-brackets-curly',
            skills: [
                { name: 'React', level: 95 },
                { name: 'Next.js', level: 95 },
                { name: 'Node.js', level: 90 },
                { name: 'Flutter', level: 90 },
                { name: 'FastAPI', level: 80 },
                { name: 'Tailwind CSS', level: 98 }
            ]
        },
        {
            title: 'Databases',
            icon: 'ph-database',
            skills: [
                { name: 'PostgreSQL', level: 85 },
                { name: 'MySQL', level: 85 },
                { name: 'MongoDB', level: 80 },
                { name: 'Redis', level: 70 }
            ]
        },
        {
            title: 'Cloud, DevOps & Platforms',
            icon: 'ph-cloud',
            skills: [
                { name: 'Docker', level: 85 },
                { name: 'Vercel', level: 90 },
                { name: 'Firebase', level: 80 }
            ]
        }
    ];


    return (
        <section className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Expertise</h3>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">Technical Skills</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {skillsData.map((category, index) => (
                        <SkillsCard 
                            key={index}
                            title={category.title}
                            icon={category.icon}
                            skills={category.skills}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsLayout;