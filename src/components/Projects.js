import React from "react";
import "./Projects.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import curate from "./images/curate2.JPG";
import sarapp from "./images/Sarapp2.JPG";
import garden from "./images/garden2.JPG";

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
                <Button size="small">Visit</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="card" sx={{ maxWidth: 350 }}>
              <CardMedia
                component="img"
                alt="green iguana"
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
                <Button size="small">Visit</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="card" sx={{ maxWidth: 350 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={garden}
                className='card-img'
                
              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="div" align="center">
                  Peas By Spring
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
                <Button size="small">Visit Site</Button>
                <Button size="small">GitHub Repo</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
