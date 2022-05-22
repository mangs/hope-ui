import "./index.css";

import { render } from "solid-js/web";

function App() {
  return <div class="text-3xl text-primary-600">Hello Hope UI!</div>;
}

render(() => <App />, document.getElementById("root") as HTMLDivElement);
