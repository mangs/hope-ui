import "./index.css";

import { baselineTheme } from "@hope-ui/baseline-theme";
import { HopeProvider } from "@hope-ui/theme";
import Prism from "prismjs";
import { Router } from "solid-app-router";
import { render } from "solid-js/web";

import App from "./App";

render(
  () => (
    <Router>
      <HopeProvider theme={baselineTheme}>
        <App />
      </HopeProvider>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);

setTimeout(() => {
  Prism.highlightAll();
}, 0);
