import { DeepPartial } from "../utils";

export type VariantsKeys<T> = Record<keyof T, true>;

export type CompoundVariantThemeContract<VariantsProps> = VariantsProps & {
  classes: string;
};

export interface ComponentThemeContract<Variants, VariantsProps> {
  baseClasses?: string;
  variantsClasses?: DeepPartial<Variants>;
  compoundVariantsClasses?: CompoundVariantThemeContract<VariantsProps>[];
  defaultVariants?: VariantsProps;
}
