import React from "react";
import "./Main.css";

const Main = ({ textThatChanges, onRouteChange }) => {
  return (
    <div className="Main">
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
      <div className="flex-container">
        <div className="about">
          <p className="white pmain">
            I am a Front-end Web Developer fueled by determination and purpose.
            I am ready to bring your ideas and vision to life! We will work
            together to charge ahead and create something beautiful.
          </p>
        </div>
        <div className="">
          <p className="white pmain">
            Lets take your project to the next level!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
