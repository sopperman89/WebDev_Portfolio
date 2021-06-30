import React from "react";
import img from "../images/SmartBrain.PNG";
// import "./Card.css";

const SmartBrain = () => {
  return (
    <div className="Card">
      <img src={img} alt="preview" />
      <div className="title">
        <h3>SmartBrain App</h3>
      </div>
      <div className="desc">
        <p>
          An intuitive app that can be used to search images for faces. Built
          using React, node.js, express.
        </p>
      </div>
      <div className="linkCon">
        <div className="link">
          <div>
            <a
              href="https://www.w3schools.com"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className="link">
            <a
              href="https://www.w3schools.com"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartBrain;
