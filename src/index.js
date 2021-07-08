import { StrictMode } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./theme/global";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import App from "./containers/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
