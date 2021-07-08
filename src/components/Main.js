import React from "react";
import "./Main.css";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Main = ({ textThatChanges, onRouteChange }) => (
  <Section>
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
          I am a Front-end Web Developer fueled by determination and purpose. I
          am ready to bring your ideas and vision to life! We will work together
          to charge ahead and create something beautiful.
        </p>
      </div>
      <div className="">
        <p className="white pmain">Lets take your project to the next level!</p>
      </div>
    </div>
  </Section>
);

export default Main;
