import React from "react";
import "./Main.css";

const Main = ({ textThatChanges, onRouteChange }) => {
  return (
    <section className="Main">
      <div className="intro flex-container">
        <h1>Hello, I am Steven Opperman</h1>
        <h3>{textThatChanges}</h3>
        <div id="buttons">
          <button
            onClick={() => onRouteChange("Information")}
            className="projects"
            type="submit"
          >
            View my work!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
