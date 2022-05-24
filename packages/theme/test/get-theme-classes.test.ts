import { ComponentThemeContract, getThemeClasses } from "../src";

interface FakeVariants {
  variant: "solid" | "subtle";
  colorScheme: "primary" | "secondary";
  size: "sm" | "md";
  compact: boolean;
}

type FakeThemeContract = ComponentThemeContract<FakeVariants>;

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
      true: "compact",
      false: "not-compact",
    },
  },
  compoundVariantsClasses: [
    {
      variants: { variant: "solid", colorScheme: "primary" },
      classes: "solid+primary",
    },
  ],
  defaultVariants: {
    variant: "solid",
    colorScheme: "primary",
    size: "md",
  },
};

describe("getThemeClasses", () => {
  it("should return base classes", () => {
    const result = getThemeClasses({}, fakeTheme);

    expect(result).toBe("base");
  });

  it("should handle string variant from props", () => {
    const props: Partial<FakeVariants> = {
      colorScheme: "primary",
    };

    const result = getThemeClasses(props, fakeTheme);

    expect(result).toBe("base primary");
  });

  it("should handle boolean 'true' variant from props", () => {
    const props: Partial<FakeVariants> = {
      compact: true,
    };

    const result = getThemeClasses(props, fakeTheme);

    expect(result).toBe("base compact");
  });

  it("should handle boolean 'false' variant from props", () => {
    const props: Partial<FakeVariants> = {
      compact: false,
    };

    const result = getThemeClasses(props, fakeTheme);

    expect(result).toBe("base not-compact");
  });

  it("should handle compound variant from props", () => {
    const props: Partial<FakeVariants> = {
      variant: "solid",
      colorScheme: "primary",
    };

    const result = getThemeClasses(props, fakeTheme);

    expect(result).toBe("base solid primary solid+primary");
  });

  it("should not returns compound variant classes that doesn't fully matches the given props", () => {
    const props: Partial<FakeVariants> = {
      variant: "solid",
      size: "md",
    };

    const result = getThemeClasses(props, fakeTheme);

    // Has base and variants classes.
    expect(result).toBe("base solid md");

    // Has not the compound variant classes because the `colorScheme` variant is missing.
    expect(result).toEqual(expect.not.stringContaining("solid+primary"));
  });
});
