import "./styles.css";
import React, { Component } from "react";
// import WebDev from "./WebDev";
import Particles from "react-particles-js";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";

const particlesOptions = {
  particles: {
    color: {
      value: "black"
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

// const [currentView, setCurrentView] = useState("view1");

const textArray = ["a React Developer", "an Engineer", "a Problem Solver"];

// let textThatChanges = textArray[this.state.textIdx % textArray.length];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIdx: 0
    };
  }

  handleClick() {
    console.log("click");
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

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Main />
        <div>
          {/* {currentView === "Main" ? ( */}
          <About />
          ) : (
          <Projects />
          )}
        </div>
      </div>
    );
  }
}

export default App;
