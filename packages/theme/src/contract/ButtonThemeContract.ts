import { ComponentThemeContract } from "./ComponentThemeContract";

export interface ButtonVariants {
  variant: "solid" | "subtle" | "outline" | "dashed" | "ghost";
  colorScheme: "primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";
  size: "xs" | "sm" | "md" | "lg" | "xl";
  compact: boolean;
}

export type ButtonThemeContract = ComponentThemeContract<ButtonVariants>;
