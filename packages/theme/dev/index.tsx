import { render } from "solid-js/web";

import { extendTheme, HopeProvider, originTheme } from "../src";

const theme = extendTheme(originTheme, {});

function App() {
  return (
    <HopeProvider theme={theme}>
      <div>Hello Hope UI!</div>
    </HopeProvider>
  );
  //return <div>Hello Hope UI!</div>;
}

render(() => <App />, document.getElementById("root") as HTMLDivElement);
