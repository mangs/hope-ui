import { ComponentPartThemeContract, ComponentRootThemeContract } from "./component";

export interface AlertVariants {
  variant?:
    | "solid"
    | "subtle"
    | "outline"
    | "leftAccent"
    | "topAccent"
    | "rightAccent"
    | "bottomAccent";
  status?: "success" | "info" | "warning" | "danger";
}

export type AlertThemeContract = {
  root: ComponentRootThemeContract<AlertVariants>;
  icon: ComponentPartThemeContract<AlertVariants>;
  title: ComponentPartThemeContract<AlertVariants>;
  description: ComponentPartThemeContract<AlertVariants>;
};
