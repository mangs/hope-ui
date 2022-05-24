import merge from "lodash.merge";

import { HopeThemeContract, OverrideHopeThemeContract } from "./contract";

/**
 * Create a new theme from a base theme.
 * @return A merged theme object containing the base theme and the overrided values.
 */
export function extendTheme(
  baseTheme: HopeThemeContract,
  overrideTheme: OverrideHopeThemeContract
): HopeThemeContract {
  return merge({}, baseTheme, overrideTheme);
}
