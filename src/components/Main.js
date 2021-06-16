import React from "react";
import "./Main.css";

const Main = ({ textThatChanges, onRouteChange }) => {
  return (
    <section className="Main">
      <h1>Hello, my name is Steven Opperman</h1>
      <h3>
        I am <span>{textThatChanges}</span>
      </h3>
      <h5>
        For the past six years I have been working as an Engineer and it has
        been an adventure, however, something has been missing.. I have always
        wanted to learn programming and build Websites and Applications. I have
        always had an interest in working for myself and on my own time.
      </h5>
      <h5>
        WELL HERE I AM! Finally taking the leap and branching out on my own.
      </h5>
      <div id="buttons">
        <button
          onClick={() => onRouteChange("Information")}
          className="projects"
          type="submit"
        >
          View my work!
        </button>
      </div>
    </section>
  );
};

export default Main;
