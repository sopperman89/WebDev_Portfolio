import React from "react";
import "./Main.css";

const Main = ({ textThatChanges, onRouteChange }) => {
  return (
    <section className="Main">
      <h1>Hello, my name is Steven Opperman</h1>
      <h3>
        I am <span>{textThatChanges}</span>
      </h3>
      <div id="buttons">
        <button
          onClick={() => onRouteChange("Information")}
          className="projects"
          type="submit"
        >
          View my work!
        </button>
        {/* <button onClick={() => onRouteChange('Projects')} className="projects" type="submit">
          View my projects!
        </button> */}
      </div>
    </section>
  );
};

export default Main;
