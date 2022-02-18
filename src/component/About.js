import React, { useEffect, useState, useRef } from "react";
import { FormattedMessage } from "react-intl";
import "./About.css";
import Skill from "./Skill";
import { TransitionGroup } from "react-transition-group";

function About() {  
  const scrollHeight = useRef(0);
  const [wheelHeight, setWheelHeight] = useState(0);
  const [isMoible, setIsMobile] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    if (document.documentElement.clientWidth <= 1366) { 
      setIsMobile(true)
    }
  }, []);

  useEffect(() => {
    if (!isMoible) {
      window.addEventListener('wheel', listenToWheel);
      document.body.style.overflow = "hidden";
      console.log("is not mobile");
      return () => {
        window.removeEventListener('wheel', listenToWheel);
        document.body.style.overflow = "visible";
      }   
    } else {
      console.log("is mobile")
    }  
  }, [isMoible]);  

  const listenToWheel = (e) => {    
    scrollHeight.current += e.deltaY;
    if (scrollHeight.current > 300) {
      setWheelHeight(prev => {
        return prev >= 2 ? 2 : prev + 1
      });
      scrollHeight.current = 0;
    } else if (scrollHeight.current < -300) {
      setWheelHeight(prev => {
        return prev <= 0 ? 0 : prev - 1
      });      
      scrollHeight.current = 0;
    }    
  };
  
  useEffect(() => {    
    if (!isMoible) {
      const height = document.documentElement.clientHeight;
      window.scrollTo({
        top: wheelHeight * height,
        behavior: "smooth",
      });
    }
  }, [wheelHeight, isMoible]);

  const skillList = {
    HTML5: "devicon-html5-plain colored",
    CSS3: "devicon-css3-plain colored",
    JavaScript: "devicon-javascript-plain colored",
    ReactJS: "devicon-react-original colored",
    Nodejs: "devicon-nodejs-plain",
    express: "devicon-express-original colored",
    MongoDB: "devicon-mongodb-plain",
    vscode: "devicon-vscode-plain colored",
    git: "devicon-git-plain",
    jest: "devicon-jest-plain colored",
    webpack: "devicon-webpack-plain",
    sass: "devicon-sass-original colored",
  };

  return (
    <div className="about">    
      <h2 ref={skillRef}>
        <FormattedMessage id="app.skills" defaultMessage="Skills" />
      </h2>
      <TransitionGroup className="skill-list">
        {Object.entries(skillList).map(pair =>           
          <Skill key={pair[0]} name={pair[0]} link={pair[1]} scrollHeight={wheelHeight}/>)}
      </TransitionGroup>      
    </div>
  )
};

export default About;

