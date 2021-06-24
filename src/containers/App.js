import React, { Component } from "react";
import "./styles.css";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Particles from "react-particles-js";
import NavBar from "../components/NavBar";

const textArray = ["React Developer", "Engineer", "Problem Solver"];

const particlesOptions = {
  particles: {
    color: {
      value: "#000000"
    },
    links: {
      color: "#000000",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

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
      <div className="App flex-container">
        <NavBar />
        <Particles className="particles" params={particlesOptions} />
        {this.state.route === "Main" ? (
          <Main
            textThatChanges={textThatChanges}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <Projects onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
