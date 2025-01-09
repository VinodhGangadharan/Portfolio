import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
    </>
  )
}

export default App
