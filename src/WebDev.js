import React from "react";
import "./WebDev.css";
import Tilt from 'react-parallax-tilt';

const WebDev = () => (
  <div className="flex-container">
    <h1 id="intro">My name is Steven Opperman</h1>
    <h3>I am a React developer.</h3>
    <Tilt>
      <button id="me" type="button">
        Learn more about me
      </button>
    </Tilt>
    <Tilt>
      <button id="projects" type="button">
        View my projects
      </button>
    </Tilt>
  </div>
);

export default WebDev;
