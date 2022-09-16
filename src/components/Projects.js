import React from "react";
import "./Projects.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Link} from 'react-scroll'

import curate from "./images/curate2.JPG";
import sarapp from "./images/Sarapp2.JPG";
import garden from "./images/garden2.JPG";


export const openInNewTab = (url) => {

  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};


const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <span className="line"></span>
        <div className="content">
          <div>
            <Card className="card" sx={{ maxWidth: 350 }}>
              <CardMedia
                component="img"
                alt="Curate"
                height="240"
                image={curate}
                className='card-img'
              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="div" align="center">
                  CurArte
                </Typography>
                <Typography variant="body2" color="text.secondary" className="card-text">
                  Built a high-performing website to research and store artworks
                  from the Art Institute of Chicago's collection to display on a
                  personal gallery wall. Used two server-side APIs - namely, the
                  Art Institute of Chicago and MediaWiki to initialize more
                  general searches to supplement targeted queries to generate
                  search responses
                </Typography>
              </CardContent>
              <CardActions>
              <Link href="#" onClick = {() => openInNewTab("https://kitanablade.github.io/curarte/")}>
              <Button size="small">Visit</Button>
                </Link>
                <Link href="#" onClick = {() => openInNewTab("https://github.com/kitanablade/curarte.git")}>
              <Button size="small">GitHub</Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="card" sx={{ maxWidth: 350 }}>
              <CardMedia
                component="img"
                alt="Sarapp"
                height="240"
                image={sarapp}
                className='card-img'

              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="div" align="center">
                  SarApp
                </Typography>
                <Typography variant="body2" color="text.secondary" className="card-text">
                  Created a Recipe sharing blog that allows users to add their
                  own recipes once they are logged in to the application. This
                  application is developed using express.js, mysql2, Javascript,
                  and handlebars. And the application is deployed on Heroku.
                  Improved the user experience by adding the profile section for
                  users' posts.
                </Typography>
              </CardContent>
              <CardActions>
              <Link href="#" onClick = {() => openInNewTab("https://sarapp-recipe-app.herokuapp.com/")}>
              <Button size="small">Visit</Button>
                </Link>
                <Link href="#" onClick = {() => openInNewTab("https://github.com/anniech1/sarApp.git")}>
              <Button size="small">GitHub</Button>
                </Link>
   </CardActions>
            </Card>
          </div>
          <div>
            <Card className="card" sx={{ maxWidth: 350 }}>
              <CardMedia
                component="img"
                alt="Peas By Spring"
                height="240"
                image={garden}
                className='card-img'
                
              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="div" align="center">
                  Peas By Spring
                </Typography>
                <Typography variant="body2" color="text.secondary" className="card-text">
                This application is a tool to plan out your garden using recommended or custom garden layouts, search functionality for plant specimens, & a plant library to import plants into your garden utilizing drag-and-drop features.This app is developed using react, mongoDB, nodejs, and material UI. And the application is deployed on Heroku.
                </Typography>
              </CardContent>
              <CardActions>
              <Link href="#" onClick = {() => openInNewTab("https://peas-by-spring.herokuapp.com/")}>
              <Button size="small">Visit</Button>
                </Link>
                <Link href="#" onClick = {() =>{ 
                  
                  var locs = ["https://github.com/Axeljk/garden-app-frontend.git ", "https://github.com/Axeljk/garden-app-backend.git"] 

			for (let i = 0; i < locs.length; i++) {
				openInNewTab(locs[i])}
      }}>
              <Button size="small">GitHub</Button>
                </Link>
        </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
