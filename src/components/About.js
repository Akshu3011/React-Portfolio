import React from "react";
import Akshata from "./images/Akshata.jpg";
import "./About.css";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <Avatar
          className="avatar"
          src={Akshata}
          alt="Akshata Kumbhar"
          sx={{ width: 456, height: 456 }}
        />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            Experienced software engineer with a passion for developing
            innovative programs that expedite the efficiency and effectiveness
            of organizational success. Well-versed in technology and writing
            code to create a system that is reliable and user-friendly. A
            skilled leader who has a proven ability to motivate, educate, and
            manage a team of professionals to build software programs and
            effectively track changes. Confident communicator, strategic
            thinker, and innovative creator to develop software that is
            customized to meet a company's organizational needs, highlight its
            core competencies, and further success. Recently I have completed
            the Full-Stack Developement Bootcamp from University of Washington.
          </p>
          <p>I am Akshata Kumbhar, residing in Seattle, WA</p>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <button className="button">Explore More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
