import { ComponentThemeContract, VariantDefinitions, VariantsKeys } from "./ComponentThemeContract";

export interface AlertVariants extends VariantDefinitions {
  variant: "solid" | "subtle" | "leftAccent" | "topAccent";
  status: "success" | "info" | "warning" | "danger";
}

export type AlertParts = "root" | "icon" | "title" | "description";

export type AlertPartsThemeContract = ComponentThemeContract<AlertVariants>;

export type AlertThemeContract = Record<AlertParts, AlertPartsThemeContract>;

export const alertVariantsKeys: VariantsKeys<AlertVariants> = {
  variant: true,
  status: true,
};
