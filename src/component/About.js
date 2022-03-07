import React, { useEffect, useState, useRef } from "react";
import { FormattedMessage } from "react-intl";
import "./About.css";
import Skill from "./Skill";
import { TransitionGroup } from "react-transition-group";

function About() {  
  const scrollHeight = useRef(0);
  const [wheelHeight, setWheelHeight] = useState(0);
  const [isMoible, setIsMobile] = useState(false);  
  const [skillList, setSkillList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      return () => {
        window.removeEventListener('wheel', listenToWheel);
        document.body.style.overflow = "visible";
      }   
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

  useEffect(() => {
    async function fetchSkills() {
      setIsLoading(true)
      const response = await fetch(`${process.env.REACT_APP_API}api/skills`);
      setIsLoading(false)
      const data = await response.json();
      setSkillList(data.skills);
    };
    fetchSkills();
  }, []);  

  const getSkills = () => {
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
      <TransitionGroup className="skill-list">
        {skillList.map(skill =>           
          <Skill id={skill._id} key={skill._id} name={skill.name} link={skill.link} scrollHeight={wheelHeight}/>)}
      </TransitionGroup> 
    )
  }

  return (
    <div className="about">    
      <h2 ref={skillRef}>
        <FormattedMessage id="app.skills" defaultMessage="Skills" />
      </h2>
      {getSkills()}     
    </div>
  )
};

export default About;

