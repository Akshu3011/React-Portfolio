import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
