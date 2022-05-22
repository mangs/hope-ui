import "./index.css";

import Prism from "prismjs";
import { Router } from "solid-app-router";
import { render } from "solid-js/web";

render(
  () => (
    <Router>
      <div>Hello world !</div>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);

setTimeout(() => {
  Prism.highlightAll();
}, 0);
