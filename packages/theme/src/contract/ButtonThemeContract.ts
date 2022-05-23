import { ComponentThemeContract, VariantDefinitions, VariantsKeys } from "./ComponentThemeContract";

export interface ButtonVariants extends VariantDefinitions {
  variant: "solid" | "subtle" | "outline" | "dashed" | "ghost";
  colorScheme: "primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";
  size: "xs" | "sm" | "md" | "lg" | "xl";
  compact: boolean;
}

export type ButtonThemeContract = ComponentThemeContract<ButtonVariants>;

export const buttonVariantsKeys: VariantsKeys<ButtonVariants> = {
  variant: true,
  colorScheme: true,
  size: true,
  compact: true,
};
