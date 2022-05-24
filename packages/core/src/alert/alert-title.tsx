import { getThemeClasses, useComponentTheme } from "@hope-ui/theme";
import { createMemo, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { createComponentWithAs, PropsWithAs } from "../utils/component";
import { classNames } from "../utils/css";
import { useAlertContext } from "./alert";

const hopeAlertTitleClass = "hope-alert__title";

type AlertTitleComponentProps = PropsWithAs<{}, "div">;

function AlertTitleComponent(props: AlertTitleComponentProps) {
  const theme = useComponentTheme("Alert");
  const { variants } = useAlertContext();

  const [local, others] = splitProps(props, ["as", "class"]);

  const themeClasses = createMemo(() => getThemeClasses(variants(), theme().title));
  const classes = () => classNames(local.class, hopeAlertTitleClass, themeClasses());

  return <Dynamic component={local.as ?? "div"} class={classes()} {...others} />;
}

export const AlertTitle = createComponentWithAs<{}, "div">(AlertTitleComponent);
