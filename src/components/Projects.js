import React from "react";
import SmartBrain from "./SmartBrain";
import ToDo from "./ToDo";
import MacCal from "./MacCal";

const Projects = () => {
  return (
    <div>
      <header>
        <p>Back to Home</p>
      </header>
      <SmartBrain />
      <ToDo />
      <MacCal />
      <footer>Links go Here</footer>
    </div>
  );
};

export default Projects;
