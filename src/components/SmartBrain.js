import React from "react";
import img from "../images/SmartBrain.PNG";
import "./Card.css";

const SmartBrain = () => {
  return (
    <div className="Card">
      <img src={img} alt="preview" />
      <h3>SmartBrain App</h3>
      <p>
        An intuitive app that can be used to search images for faces. Built
        using React, node.js, express.
      </p>
      <div className="link">
        <a href="https://www.w3schools.com" target="_blank" rel="noreferrer">
          Github
        </a>
        <a href="https://www.w3schools.com" target="_blank" rel="noreferrer">
          Live
        </a>
      </div>
    </div>
  );
};

export default SmartBrain;
