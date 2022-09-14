import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import DescriptionIcon from '@mui/icons-material/Description';
import { saveAs } from "file-saver";

export const openInNewTab = (url) => {

    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

const Footer = () => {
    const saveFile = () => {
        saveAs(
          "https://drive.google.com/file/d/1mJEaszq3-nD2KY6_6Jmf5yt8YyeNdaVJ/view?usp=sharing",
          "Akshata Kumbhar_Resume.pdf"
        );
      };


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
                <Stack  direction="row" spacing={2} justifyContent="center"
  alignItems="center">
    
                 <Link href="#" onClick = {() => openInNewTab("https://github.com/Akshu3011")}>
                <h1><GitHubIcon/></h1>
                </Link>
                <Link href="#" onClick = {() => openInNewTab("https://www.linkedin.com/in/akshata-kumbhar/")}>
                <h1><LinkedInIcon/></h1>
                </Link>
                <Link href="" onClick={saveFile}>
                <h1><DescriptionIcon/></h1>
                </Link>
                </Stack>
                    <span className='line'></span>
                  
                    <h5>&copy;2022 by Akshata Kumbhar</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer
