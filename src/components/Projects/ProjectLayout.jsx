import React from 'react';
import ProjectCard from './ProjectCard';
import ChefPic1 from '../../assets/ChefProject/1.png';
import ChefPic2 from '../../assets/ChefProject/2.png';
import ChefPic3 from '../../assets/ChefProject/3.png';
import ChefPic4 from '../../assets/ChefProject/4.png';
import ChefPic5 from '../../assets/ChefProject/5.png';
import DeliveryPic1 from '../../assets/DeliveryProject/1 (1).png';
import DeliveryPic2 from '../../assets/DeliveryProject/1 (2).png';
import DeliveryPic3 from '../../assets/DeliveryProject/1 (3).png';
import DeliveryPic4 from '../../assets/DeliveryProject/1 (4).png';
import DeliveryPic5 from '../../assets/DeliveryProject/1 (5).png';
import DeliveryPic6 from '../../assets/DeliveryProject/1 (6).png';
import RealEstate1 from '../../assets/RealEstateProject/1 (1).png';
import RealEstate2 from '../../assets/RealEstateProject/1 (2).png';
import RealEstate3 from '../../assets/RealEstateProject/1 (3).png';
import RealEstate4 from '../../assets/RealEstateProject/1 (4).png';
import RealEstate5 from '../../assets/RealEstateProject/1 (5).png';
import RealEstate6 from '../../assets/RealEstateProject/1 (6).png';
const ProjectLayout = () => {
    const projects = [
        {
            image: ChefPic2,
            images: [ChefPic1, ChefPic2, ChefPic3, ChefPic4, ChefPic5],
            title: 'ChefMarket',
            description: 'A comprehensive dashboard for monitoring financial transactions and portfolio performance in real-time, built with high-performance charting libraries.',
            technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
            link: '#',
            linkType: 'repo'
        },
        {
            image: DeliveryPic1,
            images: [DeliveryPic1, DeliveryPic2, DeliveryPic3, DeliveryPic4, DeliveryPic5, DeliveryPic6],
            title: 'Delivery Management System',
            description: 'Scalable backend API serving a high-traffic e-commerce platform, featuring advanced inventory management and order processing.',
            technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
            link: '#',
            linkType: 'demo'
        },
        {
            image: RealEstate2,
            images: [RealEstate1, RealEstate2, RealEstate3, RealEstate4, RealEstate5, RealEstate6],
            title: 'Real Estate Listing Platform',
            description: 'Custom data processing pipeline designed to ingest and analyze large datasets for business intelligence reporting.',
            technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
            link: '#',
            linkType: 'repo'
        }
    ];

    return (
        <section id="projects" className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-[#080808] border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Selected Works</h3>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">Recent Projects</h2>
                    </div>
                    <a 
                        className="mt-6 md:mt-0 inline-flex items-center gap-2 text-black dark:text-white hover:text-primary transition-colors border-b border-gray-300 dark:border-gray-700 pb-1 hover:border-primary" 
                        href="#"
                    >
                        View All Projects <i className="ph ph-arrow-right"></i>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                            linkType={project.linkType}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectLayout;