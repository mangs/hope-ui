import { ComponentThemeContract, filterCompoundVariantsClasses, VariantsKeys } from "../src";

export interface FakeVariantsThemeContract {
  variant: {
    solid: string;
    subtle: string;
  };
  colorScheme: {
    primary: string;
    secondary: string;
  };
  size: {
    sm: string;
    md: string;
  };
}

export interface FakeVariantsProps {
  variant?: keyof FakeVariantsThemeContract["variant"];
  colorScheme?: keyof FakeVariantsThemeContract["colorScheme"];
  size?: keyof FakeVariantsThemeContract["size"];
}

export type FakeThemeContract = ComponentThemeContract<
  FakeVariantsThemeContract,
  FakeVariantsProps
>;

const fakeVariantsKeys: VariantsKeys<FakeVariantsProps> = {
  variant: true,
  colorScheme: true,
  size: true,
};

const fakeTheme: FakeThemeContract = {
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
  },
  compoundVariantsClasses: [
    {
      variant: "solid",
      colorScheme: "primary",
      classes: "solid+primary",
    },
    {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
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
  it("should returns all classes that matches the given props", () => {
    const props: FakeVariantsProps = {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
    };

    const result = filterCompoundVariantsClasses(
      fakeVariantsKeys,
      props,
      fakeTheme.compoundVariantsClasses
    );

    expect(result).toBe("solid+primary solid+primary+md");
  });

  it("should not returns classes that doesn't matches the given props", () => {
    const props: FakeVariantsProps = {
      variant: "solid",
      size: "md",
    };

    const result = filterCompoundVariantsClasses(
      fakeVariantsKeys,
      props,
      fakeTheme.compoundVariantsClasses
    );

    expect(result).toBe("");
  });
});
