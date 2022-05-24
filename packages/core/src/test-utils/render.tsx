import { HopeProvider, HopeThemeContract } from "@hope-ui/theme";
import { JSX } from "solid-js";
import { render } from "solid-testing-library";

const fakeTheme: HopeThemeContract = {
  initialColorMode: "light",
  components: {
    Alert: { root: {}, icon: {}, title: {}, description: {} },
    Button: {},
  },
};

export function renderWithHopeProvider(callback: () => JSX.Element) {
  return render(() => <HopeProvider theme={fakeTheme}>{callback}</HopeProvider>);
}
