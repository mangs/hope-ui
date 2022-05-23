import { ComponentThemeContract, VariantsKeys } from "./ComponentThemeContract";

export type AlertVariants = {
  variant: "solid" | "subtle" | "leftAccent" | "topAccent";
  status: "success" | "info" | "warning" | "danger";
};

export type AlertParts = "root" | "icon" | "title" | "description";

export type AlertPartsThemeContract = ComponentThemeContract<AlertVariants>;

export type AlertThemeContract = Record<AlertParts, AlertPartsThemeContract>;

export const alertVariantsKeys: VariantsKeys<AlertVariants> = {
  variant: true,
  status: true,
};
