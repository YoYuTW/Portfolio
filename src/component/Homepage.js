import React from "react";
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">   
      <div>
        <h1>Chen YoYu</h1>
        <h3>Taipei, Taiwan</h3>
      </div>
      <div className="language">
        <button>中</button>/
        <button className="language-select">En</button>
      </div>
    </div>
  )
};

export default Homepage;