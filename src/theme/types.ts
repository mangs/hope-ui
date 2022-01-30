import { CSS } from "@stitches/core";

import { ThemeableButtonOptions } from "@/components/Button/Button";
import { ThemeableHeadingOptions } from "@/components/Heading/Heading";
import { ThemeableIconButtonOptions } from "@/components/IconButton/IconButton";
import { ThemeableTagOptions } from "@/components/Tag/Tag";

import { config, theme } from "./stitches.config";
import { defaulThemeTokens } from "./tokens";

/**
 * Design tokens interface based on the stitches theme.
 */
export type SystemTokens = typeof theme;

/**
 * Media at-rules interface based on the stitches media.
 */
export type SystemMedia = typeof config.media;

/**
 * Style interface based on the stitches configuration.
 */
export type SystemStyleObject = CSS<typeof config>;

/**
 * Available color mode
 */
export type ColorMode = "light" | "dark" | "system";

/**
 * Theme configuration for Hope UI component.
 */
export interface ComponentThemeConfig<Props> {
  /**
   * Base style passed to the component.
   */
  //baseStyle?: SystemStyleObject;
  /**
   * Default props passed to the component.
   */
  defaultProps?: Props;
}

/**
 * Theme configuration for all Hope UI components.
 */
export interface ComponentThemes {
  Button?: ComponentThemeConfig<ThemeableButtonOptions>;
  IconButton?: ComponentThemeConfig<ThemeableIconButtonOptions>;
  Heading?: ComponentThemeConfig<ThemeableHeadingOptions>;
  Tag?: ComponentThemeConfig<ThemeableTagOptions>;
}

/**
 * The Hope UI theme interface.
 */
export interface HopeTheme {
  initialColorMode: ColorMode;
  tokens: SystemTokens;
  components: ComponentThemes;
}

/**
 * The Hope UI theme tokens override interface.
 */
export type ThemeTokensOverride = {
  [Scale in keyof typeof defaulThemeTokens]?: {
    [Token in keyof typeof defaulThemeTokens[Scale]]?: boolean | number | string;
  };
} & {
  [scale in string]: {
    [token in number | string]: boolean | number | string;
  };
};

/**
 * The Hope UI theme override interface.
 */
export interface HopeThemeOverride {
  /**
   * Override default color mode.
   */
  initialColorMode?: ColorMode;

  /**
   * Override Hope UI design tokens.
   */
  tokens?: ThemeTokensOverride;
  /**
   * Custom Hope UI components themes configs.
   */
  components?: ComponentThemes;
}

export type ColorsToken = keyof SystemTokens["colors"];
export type SpaceToken = keyof SystemTokens["space"];
export type SizesToken = keyof SystemTokens["sizes"];
export type FontsToken = keyof SystemTokens["fonts"];
export type FontSizesToken = keyof SystemTokens["fontSizes"];
export type FontWeightsToken = keyof SystemTokens["fontWeights"];
export type LetterSpacingsToken = keyof SystemTokens["letterSpacings"];
export type LineHeightsToken = keyof SystemTokens["lineHeights"];
export type RadiiToken = keyof SystemTokens["radii"];
export type ShadowsToken = keyof SystemTokens["shadows"];
export type ZIndicesToken = keyof SystemTokens["zIndices"];

export type XPositionToken = "left" | "right";
export type YPositionToken = "top" | "bottom";
