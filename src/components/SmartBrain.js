import React from "react";
import img from "../images/SmartBrain.PNG";
import "./Card.css";
import Tilt from "react-tilt";

const SmartBrain = () => {
  return (
    <div className="Card SB">
      <div className="image">
        <img src={img} alt="preview" />
      </div>
      <div className="info">
        <h3>SmartBrain App</h3>
        <a href="https://www.w3schools.com" target="_blank">
          <p>View code on Github</p>
        </a>
        <a href="https://www.w3schools.com" target="_blank">
          <p>Go to the live website</p>
        </a>
      </div>
    </div>
  );
};

export default SmartBrain;
