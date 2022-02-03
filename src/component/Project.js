import React from "react";
import './Project.css';
import ProjectDemo from "./ProjectDemo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import projects from '../asset/index';

function Project() {  
  return (
    <div className="project">   
      <h2>Project</h2>
      <div className="project-gallery">        
        <Carousel useKeyboardArrows={true} centerMode={true} showStatus={false} showThumbs={false} showIndicators={false}>
          {projects.map(project => 
            <ProjectDemo {...project} key={project.name}/>)}          
        </Carousel>        
      </div>
    </div>
  )
};

export default Project;