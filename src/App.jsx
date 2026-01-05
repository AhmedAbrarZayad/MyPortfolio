import './App.css'
import ExperienceAndEducationLayout from './components/ExperienceAndEducation/ExperienceAndEducationLayout'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import SocialSidebar from './components/SocialSidebar'
import SkillsLayout from './components/Skills/SkillsLayout'
import ProjectLayout from './components/Projects/ProjectLayout'
import ContactLayout from './components/Contact/ContactLayout'

function App() {

  return (
    <>
      <NavBar />
      <SocialSidebar />
      <Hero />
      <ExperienceAndEducationLayout />
      <SkillsLayout />
      <ProjectLayout />
      <ContactLayout />
    </>
  )
}

export default App
