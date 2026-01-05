import React from 'react';

const SkillsCard = ({ title, icon, skills }) => {
    return (
        <div>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <i className={`ph ${icon} text-xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-black dark:text-white">{title}</h4>
            </div>
            <div className="space-y-6">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                            <span className="text-xs font-medium text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-primary rounded-full" 
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;