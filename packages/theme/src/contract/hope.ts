import { ColorMode } from "../color-mode";
import { DeepPartial } from "../utils";
import { AlertThemeContract } from "./alert";
import { ButtonThemeContract } from "./button";

/**
 * Shape of an Hope UI theme.
 */
export interface HopeThemeContract {
  initialColorMode: ColorMode;
  components: {
    Alert: AlertThemeContract;
    Button: ButtonThemeContract;
  };
}

export type OverrideHopeThemeContract = DeepPartial<HopeThemeContract>;

export type HopeComponentNames = keyof HopeThemeContract["components"];
