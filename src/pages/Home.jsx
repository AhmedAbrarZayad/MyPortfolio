import React from 'react';
import SocialSidebar from '../components/SocialSidebar';
import Hero from '../components/Hero';
import AboutMe from '../components/About/AboutMe';
import ExperienceAndEducationLayout from '../components/ExperienceAndEducation/ExperienceAndEducationLayout';
import PublicationsLayout from '../components/Publications/PublicationsLayout';
import AchievementsLayout from '../components/Achievements/AchievementsLayout';
import SkillsLayout from '../components/Skills/SkillsLayout';
import CertificationsLayout from '../components/Certifications/CertificationsLayout';
import ProjectLayout from '../components/Projects/ProjectLayout';
import ContactLayout from '../components/Contact/ContactLayout';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
    return (
        <div>
            <AnimatedBackground />
            <SocialSidebar />
            <Hero />
            <AboutMe />
            <ExperienceAndEducationLayout />
            <PublicationsLayout />
            <ProjectLayout />
            <AchievementsLayout />
            <SkillsLayout />
            <CertificationsLayout />
            <ContactLayout />
        </div>
    );
};

export default Home;
