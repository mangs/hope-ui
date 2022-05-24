import { AlertVariants, getThemeClasses, useComponentTheme } from "@hope-ui/theme";
import { Accessor, createContext, createMemo, mergeProps, splitProps, useContext } from "solid-js";
import { Dynamic } from "solid-js/web";

import { createComponentWithAs, PropsWithAs } from "../utils/component";
import { classNames } from "../utils/css";

const hopeAlertClass = "hope-alert";

type AlertComponentProps = PropsWithAs<AlertVariants, "div">;

function AlertComponent(props: AlertComponentProps) {
  const theme = useComponentTheme("Alert");

  const defaultProps: AlertComponentProps = {
    as: "div",
    variant: theme().root.defaultVariants?.variant ?? "subtle",
    status: theme().root.defaultVariants?.status ?? "info",
  };

  // eslint-disable-next-line solid/reactivity
  props = mergeProps(defaultProps, props);
  const [local, others] = splitProps(props, ["as", "class", "variant", "status"]);

  const themeClasses = createMemo(() => getThemeClasses(props, theme().root));
  const classes = () => classNames(local.class, hopeAlertClass, themeClasses());

  const context: AlertContextValue = {
    variants: () => local,
  };

  return (
    <AlertContext.Provider value={context}>
      <Dynamic component={local.as} role="alert" class={classes()} {...others} />
    </AlertContext.Provider>
  );
}

/**
 * Alert is used to communicate the state or status of a page, feature or action
 */
export const Alert = createComponentWithAs<AlertVariants, "div">(AlertComponent);

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

interface AlertContextValue {
  variants: Accessor<AlertVariants>;
}

const AlertContext = createContext<AlertContextValue>();

export function useAlertContext() {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("[Hope UI]: useAlertContext must be used within an `Alert` component");
  }

  return context;
}
