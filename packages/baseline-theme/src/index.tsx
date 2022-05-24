import { HopeThemeContract } from "@hope-ui/theme";

import { Alert } from "./Alert";
import { Button } from "./Button";

/**
 * A modern mininalist theme for Hope UI.
 */
export const baselineTheme: HopeThemeContract = {
  initialColorMode: "system",
  components: {
    Alert,
    Button,
  },
};
