import { ComponentThemeContract } from "./ComponentThemeContract";

export interface AlertVariants {
  variant:
    | "solid"
    | "subtle"
    | "outline"
    | "leftAccent"
    | "topAccent"
    | "rightAccent"
    | "bottomAccent";
  status: "success" | "info" | "warning" | "danger";
}

export type AlertParts = "root" | "icon" | "title" | "description";

export type AlertPartsThemeContract = ComponentThemeContract<AlertVariants>;

export type AlertThemeContract = Record<AlertParts, AlertPartsThemeContract>;
