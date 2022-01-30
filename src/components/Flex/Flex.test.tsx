import { cleanup, screen } from "solid-testing-library";

import { renderWithHopeProvider } from "@/utils/test";

import { BaseFlexOptions, Flex } from "./Flex";
import { baseFlexStyles } from "./Flex.styles";

describe("Flex", () => {
  afterEach(cleanup);

  it("should render", () => {
    // act
    renderWithHopeProvider(() => <Flex data-testid="flex">Flex</Flex>);
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toBeInTheDocument();
  });

  it("should render <div> tag by default", () => {
    // act
    renderWithHopeProvider(() => <Flex data-testid="flex">Flex</Flex>);
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toBeInstanceOf(HTMLDivElement);
  });

  it("should render tag provided with the as prop", () => {
    // act
    renderWithHopeProvider(() => (
      <Flex data-testid="flex" as="span">
        Flex
      </Flex>
    ));
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toBeInstanceOf(HTMLSpanElement);
  });

  it("should render children", () => {
    // arrange
    const children = "Flex";

    // act
    renderWithHopeProvider(() => <Flex data-testid="flex">{children}</Flex>);
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toHaveTextContent(children);
  });

  it("should have semantic hope class", () => {
    // act
    renderWithHopeProvider(() => <Flex data-testid="flex">Flex</Flex>);
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toHaveClass("hope-flex");
  });

  it("should return semantic hope class as css selector when calling toString()", () => {
    expect(Flex.toString()).toBe(".hope-flex");
  });

  it("should have class from class prop", () => {
    // arrange
    const stubClass = "stub";

    // act
    renderWithHopeProvider(() => (
      <Flex data-testid="flex" class={stubClass}>
        Flex
      </Flex>
    ));
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toHaveClass(stubClass);
  });

  it("should have class from className prop", () => {
    // arrange
    const stubClass = "stub";

    // act
    renderWithHopeProvider(() => (
      <Flex data-testid="flex" class={stubClass}>
        Flex
      </Flex>
    ));
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toHaveClass(stubClass);
  });

  it("should have class from classList prop", () => {
    // arrange
    const stubClass = "stub";

    // act
    renderWithHopeProvider(() => (
      <Flex data-testid="flex" classList={{ [stubClass]: true }}>
        Flex
      </Flex>
    ));
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toHaveClass(stubClass);
  });

  it("should have stitches generated class from flexStyles", () => {
    // arrange
    const flexClass = baseFlexStyles();

    // act
    renderWithHopeProvider(() => <Flex data-testid="flex">Flex</Flex>);
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toHaveClass(flexClass.className);
  });

  it("should have stitches generated class from variants prop", () => {
    // arrange
    const variantProps: BaseFlexOptions = {
      direction: "column-reverse",
      wrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "6",
    };
    const flexClass = baseFlexStyles({
      ...variantProps,
      flexDirection: variantProps.direction,
      flexWrap: variantProps.wrap,
    });

    // act
    renderWithHopeProvider(() => (
      <Flex data-testid="flex" {...variantProps}>
        Flex
      </Flex>
    ));
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toHaveClass(flexClass.className);
  });

  it("should have stitches generated class from css prop", () => {
    // arrange
    const customCSS = { bg: "red" };
    const flexClass = baseFlexStyles({ css: customCSS });

    // act
    renderWithHopeProvider(() => (
      <Flex data-testid="flex" css={customCSS}>
        Flex
      </Flex>
    ));
    const flex = screen.getByTestId("flex");

    // assert
    expect(flex).toHaveClass(flexClass.className);
  });
});
