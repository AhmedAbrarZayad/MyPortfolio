import React from 'react';
import SocialSidebar from '../components/SocialSidebar';
import Hero from '../components/Hero';
import AboutMe from '../components/About/AboutMe';
import ExperienceAndEducationLayout from '../components/ExperienceAndEducation/ExperienceAndEducationLayout';
import SkillsLayout from '../components/Skills/SkillsLayout';
import ProjectLayout from '../components/Projects/ProjectLayout';
import ContactLayout from '../components/Contact/ContactLayout';

const Home = () => {
    return (
        <div>
            <SocialSidebar />
            <Hero />
            <AboutMe />
            <ExperienceAndEducationLayout />
            <SkillsLayout />
            <ProjectLayout />
            <ContactLayout />
        </div>
    );
};

export default Home;