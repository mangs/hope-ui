import { HopeThemeContract } from "@hope-ui/theme";

import { Alert } from "./Alert";
import { Button } from "./Button";

/**
 * A modern minimalist Hope UI theme.
 */
export const baselineTheme: HopeThemeContract = {
  initialColorMode: "system",
  components: {
    Alert,
    Button,
  },
};
