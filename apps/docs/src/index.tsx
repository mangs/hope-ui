import "./index.css";

import { HopeProvider } from "@hope-ui/theme";
import { baselineTheme } from "@hope-ui-themes/baseline";
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
