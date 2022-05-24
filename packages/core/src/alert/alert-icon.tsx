import { getThemeClasses, useComponentTheme } from "@hope-ui/theme";
import { createMemo, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { IconCheckCircleSolid } from "../icons/IconCheckCircleSolid";
import { IconExclamationCircleSolid } from "../icons/IconExclamationCircleSolid";
import { IconExclamationTriangleSolid } from "../icons/IconExclamationTriangleSolid";
import { IconInfoCircleSolid } from "../icons/IconInfoCircleSolid";
import { createComponentWithAs, ElementType, PropsWithAs } from "../utils/component";
import { classNames } from "../utils/css";
import { useAlertContext } from "./alert";

const hopeAlertIconClass = "hope-alert__icon";

type AlertIconComponentProps = PropsWithAs<{}, "svg">;

function AlertIconComponent(props: AlertIconComponentProps) {
  const theme = useComponentTheme("Alert");
  const { variants } = useAlertContext();

  const [local, others] = splitProps(props, ["as", "class"]);

  const themeClasses = createMemo(() => getThemeClasses(variants(), theme().icon));
  const classes = () => classNames(local.class, hopeAlertIconClass, themeClasses());

  const icon = () => {
    if (local.as) {
      return local.as as ElementType;
    }

    switch (variants().status) {
      case "success":
        return IconCheckCircleSolid;
      case "info":
        return IconInfoCircleSolid;
      case "warning":
        return IconExclamationTriangleSolid;
      case "danger":
        return IconExclamationCircleSolid;
      default:
        return IconInfoCircleSolid;
    }
  };

  return <Dynamic component={icon()} class={classes()} {...others} />;
}

export const AlertIcon = createComponentWithAs<{}, "svg">(AlertIconComponent);
