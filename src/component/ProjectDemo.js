import React, { useState } from "react";
import './ProjectDemo.css'

function ProjectDemo(props) {   

  return (
    <div className={`project-card`}>
      <img src={props.img} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <div>
        <button>github</button>
        <button>live view</button>
      </div>
    </div>
  )
};

export default ProjectDemo;