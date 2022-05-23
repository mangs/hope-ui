import { ButtonThemeContract } from "@hope-ui/theme";

export const Button: ButtonThemeContract = {
  baseClasses: "",
  variantsClasses: {
    variant: {
      solid: "",
      subtle: "",
      outline: "",
      dashed: "",
      ghost: "",
    },
    colorScheme: {
      primary: "",
      accent: "",
      neutral: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    compact: {
      true: "",
      false: "",
    },
  },
  compoundVariantsClasses: [],
  defaultVariants: {
    variant: "solid",
    colorScheme: "primary",
    size: "md",
    compact: false,
  },
};
