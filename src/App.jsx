import './App.css'
import ExperienceAndEducationLayout from './components/ExperienceAndEducation/ExperienceAndEducationLayout'
import PublicationsLayout from './components/Publications/PublicationsLayout'
import AchievementsLayout from './components/Achievements/AchievementsLayout'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import SocialSidebar from './components/SocialSidebar'
import CustomCursor from './components/CustomCursor'
import SkillsLayout from './components/Skills/SkillsLayout'
import ProjectLayout from './components/Projects/ProjectLayout'
import ContactLayout from './components/Contact/ContactLayout'

function App() {

  return (
    <>
      <CustomCursor />
      <NavBar />
      <SocialSidebar />
      <Hero />
      <ExperienceAndEducationLayout />
      <PublicationsLayout />
      <ProjectLayout />
      <AchievementsLayout />
      <SkillsLayout />
      <ContactLayout />
    </>
  )
}

export default App
