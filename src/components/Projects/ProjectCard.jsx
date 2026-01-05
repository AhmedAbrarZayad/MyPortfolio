import React from 'react';

const ProjectCard = ({ image, title, description, technologies, link, linkType }) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4 bg-gray-100 dark:bg-white/5">
                <img 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    src={image}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                        <i className="ph ph-arrow-up-right text-xl"></i>
                    </div>
                </div>
            </div>
            <h4 className="text-xl font-bold text-black dark:text-white mb-1 group-hover:text-primary transition-colors">
                {title}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
                {technologies.map((tech, index) => (
                    <span 
                        key={index}
                        className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <a 
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors" 
                href={link}
            >
                {linkType === 'demo' ? (
                    <>
                        Live Demo <i className="ph ph-arrow-square-out"></i>
                    </>
                ) : (
                    <>
                        View Repository <i className="ph ph-github-logo"></i>
                    </>
                )}
            </a>
        </div>
    );
};

export default ProjectCard;