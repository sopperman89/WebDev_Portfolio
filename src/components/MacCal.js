import React from "react";
import "./Card.css";
import img from "../images/SmartBrain.PNG";

const MacCal = () => {
  return (
    <div className="Card">
      <img src={img} alt="" />
      <div>
        <h4>SmartBrain App</h4>
      </div>
    </div>
  );
};

export default MacCal;
