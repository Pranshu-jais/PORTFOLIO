import React from 'react'
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Footer from './sections/Footer.jsx';
import WorkExperience from './sections/Experience.jsx';
export const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects />
      <WorkExperience/>
      <Footer/>

    </main>
  )
}

export default App