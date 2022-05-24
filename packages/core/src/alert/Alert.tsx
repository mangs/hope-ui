import { AlertVariants, getThemeClasses, useComponentTheme } from "@hope-ui/theme";
import { Accessor, createContext, createMemo, mergeProps, splitProps, useContext } from "solid-js";
import { Dynamic } from "solid-js/web";

import { createComponentWithAs, PropsWithAs } from "../utils/component";
import { classNames } from "../utils/css";

const hopeAlertClass = "hope-alert";

type AlertOptions = Partial<AlertVariants>;

type AlertComponentProps = PropsWithAs<AlertOptions, "div">;

function AlertComponent(props: AlertComponentProps) {
  const theme = useComponentTheme("Alert");

  const defaultProps: AlertComponentProps = {
    as: "div",
    variant: theme().root.defaultVariants?.variant ?? "subtle",
    status: theme().root.defaultVariants?.status ?? "info",
  };

  // eslint-disable-next-line solid/reactivity
  props = mergeProps(defaultProps, props) as AlertOptions;

  const [local, others] = splitProps(props, ["as", "class", "variant", "status"]);

  const classes = createMemo(() => {
    return classNames(local.class, hopeAlertClass, getThemeClasses(props, theme().root));
  });

  const statusAccessor = () => local.status;

  const context: AlertContextValue = {
    status: statusAccessor,
  };

  return (
    <AlertContext.Provider value={context}>
      <Dynamic component={local.as} role="alert" class={classes()} {...others} />
    </AlertContext.Provider>
  );
}

/**
 * Alert is used to communicate the state or status of a page,
 * feature or action
 */
export const Alert = createComponentWithAs<AlertOptions, "div">(AlertComponent);

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

interface AlertContextValue {
  status: Accessor<AlertOptions["status"]>;
}

const AlertContext = createContext<AlertContextValue>();

export function useAlertContext() {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("[Hope UI]: useAlertContext must be used within an `Alert` component");
  }

  return context;
}
