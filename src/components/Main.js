import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;

const Button = styled.div`
  background-color: #007ee7;
  color: black;
  padding: 15px 50px;
  font-size: 3em;
  font-family: "Archivo Black", sans-serif;
  margin: 20px;
  border-radius: 50%;
`;

const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-size: 2em;
  margin: 20px;
`;

const Tag = styled.div`
  color: #000000;
  font-size: 2em;
  margin: 20px;
`;

const Shuffle = styled.div`
  color: #000000;
  font-size: 3em;
  margin: 20px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-size: 5em;
  margin: 20px;
`;

const Main = ({ textThatChanges, onRouteChange }) => (
  <Section>
    <Intro>Hello, I am Steven Opperman</Intro>
    <Shuffle>{textThatChanges}</Shuffle>
    <Button
      onClick={() => onRouteChange("Information")}
      className="projects"
      type="submit"
    >
      View my work!
    </Button>
    <About>
      I am a Front-end Web Developer fueled by determination and purpose. I am
      ready to bring your ideas and vision to life! We will work together to
      charge ahead and create something beautiful.
    </About>
    <Tag>Lets take your project to the next level!</Tag>
  </Section>
);

export default Main;
