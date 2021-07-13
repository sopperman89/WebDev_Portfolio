import React, { Component } from "react";
import "./styles.css";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Particles from "react-particles-js";
import styled from "styled-components";

const textArray = ["React Developer", "Engineer", "Problem Solver"];

const particlesOptions = {
  particles: {
    number: {
      value: 110,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 6,
        color: "#000000"
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.3,
      random: true
    },
    links: {
      color: "#000000",
      distance: 110,
      enable: true,
      opacity: 0.3,
      width: 3
    },
    move: {
      enable: true,
      speed: 3,
      direction: "bottom-right",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
};

const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow-x: auto;
  scroll-behavior: smooth;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      textIdx: 0,
      route: "Main"
    };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
      <Home>
        {/* <NavBar /> */}
        <Particles className="particles" params={particlesOptions} />
        {this.state.route === "Main" ? (
          <Main
            textThatChanges={textThatChanges}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <Projects onRouteChange={this.onRouteChange} />
        )}
      </Home>
    );
  }
}

export default App;
