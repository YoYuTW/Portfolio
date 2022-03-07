import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import './Skill.css'

function Skill(props) {
  const nodeRef = useRef(null);
  return(
    <CSSTransition 
      in={props.scrollHeight === 1}
      classNames="fadein"
      nodeRef={nodeRef}
      timeout={2000} 
    >
      <div className="skill" ref={nodeRef} id={props.id}>
        <i className={props.link} />
        <h4>{props.name}</h4>
      </div>
    </CSSTransition>
  )
};

export default Skill;