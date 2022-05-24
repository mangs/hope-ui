import {
  Accessor,
  createContext,
  createEffect,
  createMemo,
  createSignal,
  FlowProps,
  useContext,
} from "solid-js";

import {
  ColorMode,
  getDefaultColorMode,
  saveColorModeToLocalStorage,
  toggleBodyDarkModeClass,
} from "./color-mode";
import { HopeComponentNames, HopeThemeContract } from "./contract";

export interface HopeContextValue {
  theme: Accessor<HopeThemeContract>;
  colorMode: Accessor<ColorMode>;
  setColorMode: (value: ColorMode) => void;
  toggleColorMode: () => void;
}

export const HopeContext = createContext<HopeContextValue>();

export type HopeProviderProps = FlowProps<{
  /**
   * The theme to use in the application.
   */
  theme: HopeThemeContract;
}>;

export function HopeProvider(props: HopeProviderProps) {
  // eslint-disable-next-line solid/reactivity
  const defaultColorMode = getDefaultColorMode(props.theme.initialColorMode ?? "light");

  // Create context signals
  const [colorMode, rawSetColorMode] = createSignal(defaultColorMode);
  const theme = () => props.theme;

  const setColorMode = (value: ColorMode) => {
    rawSetColorMode(value);
    saveColorModeToLocalStorage(value);
  };

  const toggleColorMode = () => {
    setColorMode(colorMode() === "dark" ? "light" : "dark");
  };

  // When color mode changes update `document.body` dark mode class.
  createEffect(() => toggleBodyDarkModeClass(colorMode()));

  const context: HopeContextValue = {
    theme,
    colorMode,
    setColorMode,
    toggleColorMode,
  };

  return <HopeContext.Provider value={context}>{props.children}</HopeContext.Provider>;
}

/* -------------------------------------------------------------------------------------------------
 * ThemeProvider - primitives
 * -----------------------------------------------------------------------------------------------*/

/**
 * Primitive for accessing theme related properties of the `HopeProvider` context.
 * @returns An accessor for the current used theme.
 */
export function useTheme() {
  const context = useContext(HopeContext);

  if (!context) {
    throw new Error("[Hope UI]: useTheme must be used within a HopeProvider");
  }

  return context.theme;
}

/**
 * Primitive for accessing theme of a component in the `HopeProvider` context.
 * @returns An accessor for the current component theme.
 */
export function useComponentTheme<T extends HopeComponentNames>(
  componentName: T
): Accessor<HopeThemeContract["components"][T]> {
  const theme = useTheme();

  return () => theme().components[componentName];
}

/* -------------------------------------------------------------------------------------------------
 * ColorMode - primitives
 * -----------------------------------------------------------------------------------------------*/

/**
 * Primitive for accessing color mode related properties of the `HopeProvider` context.
 * @returns An accessor for the color mode and function to toggle it
 */
export function useColorMode() {
  const context = useContext(HopeContext);

  if (!context) {
    throw new Error("[Hope UI]: useColorMode must be used within a HopeProvider");
  }

  return {
    colorMode: context.colorMode,
    setColorMode: context.setColorMode,
    toggleColorMode: context.toggleColorMode,
  };
}

/**
 * Change value based on color mode.
 *
 * @param light The light mode value
 * @param dark The dark mode value
 * @return A memoized value based on the color mode.
 */
export function useColorModeValue<T = any>(light: T, dark: T) {
  const { colorMode } = useColorMode();

  const value = createMemo(() => (colorMode() === "dark" ? dark : light));

  return value;
}
