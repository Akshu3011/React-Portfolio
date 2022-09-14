import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                <li className='nav-item'>
                        <Link  to="hero" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="about" spy={true} smooth={true} offset={-100} duration={500} >About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="projects" spy={true} smooth={true} offset={-100} duration={500} >Projects</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="experience" spy={true} smooth={true} offset={-150} duration={500} >Experience</Link>
                    </li>
                   
                    <li className='nav-item'>
                        <a href='/' >Contact</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>&copy;2022 by Akshata Kumbhar</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
