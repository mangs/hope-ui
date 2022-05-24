import { getThemeClasses, useComponentTheme } from "@hope-ui/theme";
import { createMemo, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { createComponentWithAs, PropsWithAs } from "../utils/component";
import { classNames } from "../utils/css";
import { useAlertContext } from "./alert";

const hopeAlertDescriptionClass = "hope-alert__description";

type AlertDescriptionComponentProps = PropsWithAs<{}, "div">;

function AlertDescriptionComponent(props: AlertDescriptionComponentProps) {
  const theme = useComponentTheme("Alert");
  const { variants } = useAlertContext();

  const [local, others] = splitProps(props, ["as", "class"]);

  const themeClasses = createMemo(() => getThemeClasses(variants(), theme().description));
  const classes = () => classNames(local.class, hopeAlertDescriptionClass, themeClasses());

  return <Dynamic component={local.as ?? "div"} class={classes()} {...others} />;
}

export const AlertDescription = createComponentWithAs<{}, "div">(AlertDescriptionComponent);
