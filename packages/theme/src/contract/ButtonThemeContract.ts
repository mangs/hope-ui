import { ComponentThemeContract } from "./ComponentThemeContract";

export interface ButtonVariantsThemeContract {
  variant: {
    solid: string;
    subtle: string;
    outline: string;
    dashed: string;
    ghost: string;
  };
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
  };
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface ButtonVariantsProps {
  variant?: keyof ButtonVariantsThemeContract["variant"];
  colorScheme?: keyof ButtonVariantsThemeContract["colorScheme"];
  size?: keyof ButtonVariantsThemeContract["size"];
}

export type ButtonThemeContract = ComponentThemeContract<
  ButtonVariantsThemeContract,
  ButtonVariantsProps
>;
