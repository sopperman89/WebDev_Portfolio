import React from "react";
import "./Main.css";
import Tilt from "react-parallax-tilt";

const Main = ({ textThatChanges }) => (
  <section className="flex-container">
    <h1>Hello, my name is Steven Opperman</h1>
    <h3>
      I am <span>{textThatChanges}</span>
    </h3>
    <div id="buttons">
      <Tilt>
        <button
          onClick={() => this.props.handleClick("About")}
          className="me"
          type="button"
        >
          Learn more about me!
        </button>
      </Tilt>
      <Tilt>
        <button
          onClick={() => this.props.handleClick("Projects")}
          className="projects"
          type="button"
        >
          View my projects!
        </button>
      </Tilt>
    </div>
  </section>
);

export default Main;
