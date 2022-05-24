import { ColorMode } from "../colorMode";
import { DeepPartial } from "../utils";
import { AlertThemeContract } from "./AlertThemeContract";
import { ButtonThemeContract } from "./ButtonThemeContract";

export interface HopeThemeContract {
  initialColorMode: ColorMode;
  components: {
    Alert: AlertThemeContract;
    Button: ButtonThemeContract;
  };
}

export type OverrideHopeThemeContract = DeepPartial<HopeThemeContract>;

export type HopeComponentNames = keyof HopeThemeContract["components"];
