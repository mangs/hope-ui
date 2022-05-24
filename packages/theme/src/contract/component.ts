type BooleanMap<T> = T extends boolean ? "true" | "false" : T;

type VariantDefinitions = Record<string, any>;

export type VariantClassesDefinitions<T extends VariantDefinitions> = {
  [Variant in keyof T]?: {
    [Value in BooleanMap<T[Variant]>]?: string;
  };
};

export interface CompoundVariantClassesDefinition<T extends VariantDefinitions> {
  variants: Partial<T>;
  classes: string;
}

/**
 * Theme shape of a component part.
 */
export interface ComponentPartThemeContract<T extends VariantDefinitions> {
  baseClasses?: string;
  variantsClasses?: VariantClassesDefinitions<T>;
  compoundVariantsClasses?: Array<CompoundVariantClassesDefinition<T>>;
}

/**
 * Theme shape of a component or root part of a component.
 */
export interface ComponentRootThemeContract<T extends VariantDefinitions>
  extends ComponentPartThemeContract<T> {
  defaultVariants?: Partial<T>;
}
