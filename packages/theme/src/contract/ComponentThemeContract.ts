type BooleanMap<T> = T extends boolean ? "true" | "false" : T;

export type VariantDefinitions = Record<string, string | boolean>;

export type VariantsKeys<T extends VariantDefinitions> = Record<keyof T, true>;

export type VariantClassesDefinitions<T extends VariantDefinitions> = {
  [Variant in keyof T]?: {
    [Value in BooleanMap<T[Variant]>]?: string;
  };
};

export interface CompoundVariantClassesDefinition<T extends VariantDefinitions> {
  variants: Partial<T>;
  classes: string;
}

export interface ComponentThemeContract<T extends VariantDefinitions> {
  baseClasses?: string;
  variantsClasses?: VariantClassesDefinitions<T>;
  compoundVariantsClasses?: Array<CompoundVariantClassesDefinition<T>>;
  defaultVariants?: Partial<T>;
}
