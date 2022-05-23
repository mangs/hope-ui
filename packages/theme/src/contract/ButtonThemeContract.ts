import { ComponentThemeContract, VariantsKeys } from "./ComponentThemeContract";

export type ButtonVariants = {
  variant: "solid" | "subtle" | "outline" | "dashed" | "ghost";
  colorScheme: "primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";
  size: "xs" | "sm" | "md" | "lg" | "xl";
};

export type ButtonThemeContract = ComponentThemeContract<ButtonVariants>;

export const buttonVariantsKeys: VariantsKeys<ButtonVariants> = {
  variant: true,
  colorScheme: true,
  size: true,
};
