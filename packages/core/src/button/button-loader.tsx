import { withBemModifiers } from "@hope-ui/utils";
import clsx from "clsx";
import { Show, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { createComponentWithAs, PropsWithAs } from "../factory";
import { IconSpinner } from "../icons/IconSpinner";

export interface ButtonLoaderOptions {
  withLoadingText?: boolean;
}

const baseClass = "hope-button__loader";

type ButtonLoaderComponentProps = PropsWithAs<"div", ButtonLoaderOptions>;

function ButtonLoaderComponent(props: ButtonLoaderComponentProps) {
  const [local, others] = splitProps(props, ["as", "class", "children", "withLoadingText"]);

  const classes = () => {
    return clsx(
      local.class,
      baseClass,
      withBemModifiers(baseClass, [local.withLoadingText ? "with-loading-text" : null])
    );
  };

  return (
    <Dynamic component={local.as ?? "div"} class={classes()} {...others}>
      <Show when={local.children} fallback={<IconSpinner class="hope-button__icon-spinner" />}>
        {local.children}
      </Show>
    </Dynamic>
  );
}

export const ButtonLoader = createComponentWithAs<"div", ButtonLoaderOptions>(
  ButtonLoaderComponent
);
