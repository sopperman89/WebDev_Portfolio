import React from "react";
import SmartBrain from "./SmartBrain";
import ToDo from "./ToDo";
import MacCal from "./MacCal";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="proj flex-container">
      <div className="cardCon">
        <SmartBrain />
        <SmartBrain />
        <SmartBrain />
        <SmartBrain />
        <SmartBrain />
      </div>
    </div>
  );
};

export default Projects;
