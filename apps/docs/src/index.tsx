import "./index.css";

import { extendTheme, HopeProvider } from "@hope-ui/theme";
import { baselineTheme } from "@hope-ui-themes/baseline";
import Prism from "prismjs";
import { Router } from "solid-app-router";
import { render } from "solid-js/web";

import App from "./App";

const theme = extendTheme(baselineTheme, {
  components: {
    Alert: {
      root: {
        baseClasses: "relative flex items-center p-3 text-base border-[1px] border-l-4",
        compoundVariantsClasses: [
          {
            variants: {
              variant: "subtle",
              status: "info",
            },
            classes: "bg-info-50 border-info-400 border-l-info-500",
          },
        ],
      },
    },
  },
});

render(
  () => (
    <Router>
      <HopeProvider theme={theme}>
        <App />
      </HopeProvider>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);

setTimeout(() => {
  Prism.highlightAll();
}, 0);
