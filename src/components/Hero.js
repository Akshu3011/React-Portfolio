import { Link } from 'react-scroll'
import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <p>Hello,</p>
                <p>My name is</p>
                <p>Akshata Kumbhar</p>
                <p>I am a Full stack Developer</p>
                <Link to='about' spy={true} smooth={true} offset={0} duration={500}>
                <button  className='button'>View Portfolio</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero
