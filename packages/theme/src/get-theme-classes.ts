import { ComponentPartThemeContract } from "./contract";

/**
 * Return all classes that match the given props.
 */
export function getThemeClasses<T extends Record<string, any>>(
  props: T,
  componentTheme: ComponentPartThemeContract<any>
): string {
  // Get all variants classes that match the given props.
  const variantClasses = Object.keys(componentTheme.variantsClasses ?? {})
    .filter(variant => props[variant] !== undefined) // Take only variants that exist in the props.
    .map(variant => componentTheme.variantsClasses?.[variant]?.[String(props[variant])])
    .filter(Boolean)
    .join(" ")
    .trim();

  // Get all compound variants classes that match the given props.
  const compoundVariantsClasses = componentTheme.compoundVariantsClasses
    ?.filter(compoundVariant => {
      // Take only the compound variants whose valid variants combinations exist in the props.
      const keep = Object.keys(compoundVariant.variants).every(
        variant => compoundVariant.variants[variant] === props[variant]
      );

      return keep;
    })
    .map(item => item.classes)
    .join(" ")
    .trim();

  return [componentTheme.baseClasses, variantClasses, compoundVariantsClasses]
    .filter(Boolean)
    .join(" ")
    .trim();
}
