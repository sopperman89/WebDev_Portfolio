import React, { Component } from "react";
import "./Main.css";
import Tilt from "react-parallax-tilt";

const textArray = ["a React Developer", "an Engineer", "a Problem Solver"];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { textIdx: 0 };
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
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
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
  }
}

export default Main;
