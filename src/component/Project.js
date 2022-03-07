import React, { useState, useEffect }from "react";
import './Project.css';
import ProjectDemo from "./ProjectDemo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FormattedMessage } from "react-intl";
import Footer from "./Footer";

function Project() {  
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      setIsLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API}api/projects`);
      setIsLoading(false);
      const data = await response.json();
      setProjects(data.projects);
    };
    fetchProjects();
  }, []);  

  const getProjects = () => {
    if (isLoading) {
      return (
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      )
    }
    return (
      <React.Fragment>
        <p>
          <FormattedMessage id="app.projectIntro" defaultMessage="Swipe/ Click arrows/ Use arrows key to see projects!" />
        </p>
        <div className="project-gallery">
          <Carousel useKeyboardArrows={true} centerMode={true} showStatus={false} showThumbs={false} showIndicators={false}>
            {projects.map(project =>
              <ProjectDemo {...project} key={project.name}/>)}
          </Carousel>
        </div>
      </React.Fragment>
    )
  };

  return (
    <React.Fragment>
      <div className="project">
        <h2>
          <FormattedMessage id="app.project" defaultMessage="Projects"/>
        </h2>        
        {getProjects()}
      </div>
      <Footer />
    </React.Fragment>
  )
};

export default Project;