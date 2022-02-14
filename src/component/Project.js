import React from "react";
import './Project.css';
import ProjectDemo from "./ProjectDemo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import projects from '../asset/index';
import { FormattedMessage } from "react-intl";
import Footer from "./Footer";

function Project() {  
  return (
    <React.Fragment>
      <div className="project">
        <h2>
          <FormattedMessage id="app.project" defaultMessage="Projects"/>
        </h2>
        <p>
          <FormattedMessage id="app.projectIntro" defaultMessage="Swipe/ Click arrows/ Use arrows key to see projects!" />
        </p>
        <div className="project-gallery">
          <Carousel useKeyboardArrows={true} centerMode={true} showStatus={false} showThumbs={false} showIndicators={false}>
            {projects.map(project =>
              <ProjectDemo {...project} key={project.name}/>)}
          </Carousel>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
};

export default Project;