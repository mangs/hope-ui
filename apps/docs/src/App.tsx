import { AlertVariants, alertVariantsKeys, getClasses, useTheme } from "@hope-ui/theme";
import { createMemo, ParentProps } from "solid-js";

type AlertProps = ParentProps<Partial<AlertVariants> & { foo?: boolean }>;

function Alert(props: AlertProps) {
  const theme = useTheme();

  const rootClasses = createMemo(
    () =>
      // getClasses({
      //   variants: props,
      //   themeContract: theme().components.Alert.root,
      //   variantsKeys: alertVariantsKeys,
      // })
      ""
  );

  return <div class={rootClasses()}>{props.children}</div>;
}

export default function App() {
  return <Alert>Hi mom</Alert>;

  //return <div>Hello Hope UI</div>;
}
