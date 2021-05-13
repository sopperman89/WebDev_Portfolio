import "./styles.css";
import React from "react";
// import WebDev from "./WebDev";
import Particles from "react-particles-js";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

export default function App() {
  const [currentView, setCurrentView] = React.useState("view1");

  let handleClick = (page) => {
    setCurrentView(page);
  };

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      {/* <WebDev /> */}
      <Main onClick={handleClick} />
      <div>
        {currentView === "Main" ? (
          <About onClick={handleClick} />
        ) : (
          <Projects onClick={handleClick} />
        )}
      </div>
    </div>
  );
}
