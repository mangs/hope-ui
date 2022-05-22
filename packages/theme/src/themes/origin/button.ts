import { ButtonThemeContract } from "../../contract";

export const buttonTheme: ButtonThemeContract = {
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
      secondary: "",
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
  },
  compoundVariantsClasses: [],
  defaultVariants: {
    variant: "solid",
    colorScheme: "primary",
    size: "md",
  },
};
