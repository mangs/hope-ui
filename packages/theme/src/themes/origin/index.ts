import { HopeThemeContract } from "../../contract";
import { alertTheme } from "./alert";
import { buttonTheme } from "./button";

/**
 * The "OG" Hope UI original theme.
 */
export const originTheme: HopeThemeContract = {
  initialColorMode: "system",
  components: {
    Alert: alertTheme,
    Button: buttonTheme,
  },
};
