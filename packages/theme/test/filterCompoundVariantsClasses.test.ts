import { ComponentThemeContract, getClasses, VariantsKeys } from "../src";

type FakeVariants = {
  variant: "solid" | "subtle";
  colorScheme: "primary" | "secondary";
  size: "sm" | "md";
  compact: "true" | "false";
};

type FakeThemeContract = ComponentThemeContract<FakeVariants>;

const fakeVariantsKeys: VariantsKeys<FakeVariants> = {
  variant: true,
  colorScheme: true,
  size: true,
  compact: true,
};

const fakeTheme: FakeThemeContract = {
  baseClasses: "base",
  variantsClasses: {
    variant: {
      solid: "solid",
      subtle: "subtle",
    },
    colorScheme: {
      primary: "primary",
      secondary: "secondary",
    },
    size: {
      sm: "sm",
      md: "md",
    },
    compact: {
      true: "true",
      false: "false",
    },
  },
  compoundVariantsClasses: [
    {
      variants: { variant: "solid", colorScheme: "primary" },
      classes: "solid+primary",
    },
    {
      variants: { variant: "solid", colorScheme: "primary", size: "md" },
      classes: "solid+primary+md",
    },
  ],
  defaultVariants: {
    variant: "solid",
    colorScheme: "primary",
    size: "md",
  },
};

describe("filterCompoundVariantsClasses", () => {
  it("should returns all classes that matches the given variants", () => {
    const variants: Partial<FakeVariants> = {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
      compact: "false",
    };

    const result = getClasses(variants, fakeTheme, fakeVariantsKeys);

    expect(result).toBe("base solid primary md false solid+primary solid+primary+md");
  });

  it("should not returns classes that doesn't matches the given variants", () => {
    const variants: Partial<FakeVariants> = {
      variant: "solid",
      size: "md",
    };

    const result = getClasses(variants, fakeTheme, fakeVariantsKeys);

    expect(result).toBe("base solid md");
  });
});
