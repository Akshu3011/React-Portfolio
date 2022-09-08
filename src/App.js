import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Home from './pages/Home'
import Navbar from "./components/Navbar";

function App() {
return (
<div>
  <Navbar />
  <Home />
  <Experience />
  <AboutMe />
  <Contact />
</div>
)}


export default App;

