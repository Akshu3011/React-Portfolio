import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'
import {Link} from 'react-scroll'
import { saveAs } from "file-saver";


import './Navbar.css'

const Navbar = () => {


   
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    const saveFile = () => {
        saveAs(
          "https://drive.google.com/file/d/1ebqH9u4qvzbSmYZByCaoroDD8bOIuv-e/view?usp=sharing",
          "Akshata Kumbhar_Resume.pdf"
        );
      };
    return (
        <div className='header'>
            <nav className='navbar'>
                
            <Link to='hero' spy={true} smooth={true} offset={-100} duration={500}className="logo">    <img src={logo} alt='logo' />
                    </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link  to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="about" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="projects" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="experience" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Experience</Link>
                    </li>
                    <li className='nav-item'>
                    <Link href="" onClick={saveFile}>Resume</Link>
                </li>
                    <li className='nav-item'>
                    <Link  to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                 
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
