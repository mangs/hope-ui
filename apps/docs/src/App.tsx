import { AlertVariants, alertVariantsKeys, getClasses, useTheme } from "@hope-ui/theme";
import { createMemo, ParentProps } from "solid-js";

type AlertProps = ParentProps<Partial<AlertVariants>>;

function Alert(props: AlertProps) {
  const theme = useTheme();

  const rootClasses = createMemo(() =>
    getClasses(props, theme().components.Alert.root, alertVariantsKeys)
  );

  return <div class={rootClasses()}>{props.children}</div>;
}

export default function App() {
  return (
    <Alert status="success" variant="leftAccent">
      Hi mom
    </Alert>
  );

  //return <div>Hello Hope UI</div>;
}
