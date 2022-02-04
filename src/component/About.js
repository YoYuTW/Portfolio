import React, { useEffect, useState, useRef } from "react";
import { FormattedMessage } from "react-intl";
import "./About.css";
import Skill from "./Skill";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function About() {  
  const [scrollHeight, setScrollHeight] = useState(0);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => 
      (window.removeEventListener('scroll', listenToScroll))
  });

  const listenToScroll = () => {    
    const winScroll = document.documentElement.scrollTop;

    const height = document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setScrollHeight(scrolled);
  }

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
      <CSSTransition
        in={scrollHeight > 0.3}
        classNames="run-in"
        timeout={2000}
        nodeRef={aboutRef}      
      >
        <h2 ref={aboutRef}>
          <FormattedMessage id="app.aboutMe" defaultMessage="About me" />
        </h2>
      </CSSTransition>
      <CSSTransition
        in={scrollHeight > 0.33}
        classNames='contents'
        timeout={2000} 
        nodeRef={paraRef}
      >
        <p ref={paraRef}>
          <FormattedMessage id='app.aboutPara' defaultMessage="My first encounter with JavaScript happened one and half year ago, when I was a project manager intern,
          and the first time I tasted the power of coding.
          Currently I am a full-time self-taught coder followed with The Odin Project." 
          values={{ top: <a href="https://www.theodinproject.com/" target="_blank" rel="noreferrer">The Odin Project</a>}}/>
          
        </p>
      </CSSTransition>
      <CSSTransition
        in={scrollHeight > 0.45}
        classNames="run-in"
        timeout={2000}     
        nodeRef={skillRef} 
      >
        <h2 ref={skillRef}>
        <FormattedMessage id="app.skills" defaultMessage="Skills" />
        </h2>
      </CSSTransition>
      <TransitionGroup className="skill-list">
        {Object.entries(skillList).map(pair =>           
          <Skill key={pair[0]} name={pair[0]} link={pair[1]} scrollHeight={scrollHeight}/>)}
      </TransitionGroup>      
    </div>
  )
};

export default About;

//<h2 className={scrollHeight > 0.3 ? `showTitle` : ``}>About me</h2>