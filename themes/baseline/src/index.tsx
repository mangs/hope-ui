import { HopeThemeContract } from "@hope-ui/theme";

import { Alert } from "./alert";
import { Button } from "./button";

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
