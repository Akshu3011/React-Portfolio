import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      
      <Footer />
    </div>
  );
}

export default App;
