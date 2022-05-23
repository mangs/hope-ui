export type Variants = Record<string, any>;

export type VariantsKeys<T extends Variants> = Record<keyof T, true>;

export type VariantsClasses<T extends Variants> = {
  [Variant in keyof T]?: {
    [Value in T[Variant]]?: string;
  };
};

export interface CompoundVariantClasses<T extends Variants> {
  variants: Partial<T>;
  classes: string;
}

export interface ComponentThemeContract<T extends Variants> {
  baseClasses?: string;
  variantsClasses?: VariantsClasses<T>;
  compoundVariantsClasses?: CompoundVariantClasses<T>[];
  defaultVariants?: Partial<T>;
}
