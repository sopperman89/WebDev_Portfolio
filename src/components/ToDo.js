import React from "react";
import img from "../images/SmartBrain.PNG";
// import "./Card.css";

const ToDo = () => {
  return (
    <div className="Card">
      <img src={img} alt="" />
      <div>
        <h4>SmartBrain App</h4>
      </div>
    </div>
  );
};

export default ToDo;
