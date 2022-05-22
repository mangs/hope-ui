import { ComponentThemeContract, VariantsKeys } from "./ComponentThemeContract";

export interface AlertVariantsThemeContract {
  variant: {
    solid: string;
    subtle: string;
    leftAccent: string;
    topAccent: string;
  };
  status: {
    success: string;
    info: string;
    warning: string;
    danger: string;
  };
}

export interface AlertVariantsProps {
  variant: keyof AlertVariantsThemeContract["variant"];
  status: keyof AlertVariantsThemeContract["status"];
}

export type AlertParts = "root" | "icon" | "title" | "description";

export type AlertPartsThemeContract = ComponentThemeContract<
  AlertVariantsThemeContract,
  AlertVariantsProps
>;

export type AlertThemeContract = Record<AlertParts, AlertPartsThemeContract>;

export const alertVariantsKeys: VariantsKeys<AlertVariantsProps> = {
  variant: true,
  status: true,
};
