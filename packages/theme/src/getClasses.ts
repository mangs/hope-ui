import {
  ComponentThemeContract,
  CompoundVariantClasses,
  Variants,
  VariantsClasses,
  VariantsKeys,
} from "./contract";

/**
 * Return all compound variants classes that match the given props.
 *
 * @param variantsKeys The variants keys to loop through while filtering.
 * @param variants The variants to filter on
 * @param compoundVariantsClasses The compound variants classes to filter.
 * @returns All compound variants classes that match the given props.
 */
function getCompoundVariantsClasses<T extends Variants>(
  variants: T,
  compoundVariantsClasses: CompoundVariantClasses<T>[],
  variantsKeys: VariantsKeys<T>
): string {
  return compoundVariantsClasses
    .filter(item => {
      let keep = true;

      // Check if the compound variant matches the props keys.
      for (const key in variantsKeys) {
        if (!keep) {
          break;
        }

        // The compound variant doesn't depend on this key
        if (item.variants[key] == null) {
          keep = true;
          continue;
        }

        keep = item.variants[key] === variants[key];
      }

      return keep;
    })
    .map(item => item.classes)
    .join(" ")
    .trim();
}

function getVariantsClasses<T extends Variants>(variants: T, variantsClasses: VariantsClasses<T>) {
  return Object.keys(variantsClasses)
    .filter((key: keyof T) => variants[key] != null)
    .map((key: keyof T) => variantsClasses[key]?.[variants[key]] ?? "")
    .join(" ")
    .trim();
}

/**
 * Return all classes that match the given props.
 *
 * @param variantsKeys The variants keys to loop through while filtering.
 * @param variants The variants to filter on
 * @param themeContract The theme contract to filter.
 * @returns All classes that match the given props.
 */
export function getClasses<T extends Variants>(
  variants: T,
  themeContract: ComponentThemeContract<T>,
  variantsKeys: VariantsKeys<T>
): string {
  const variantClasses = themeContract.variantsClasses
    ? getVariantsClasses(variants, themeContract.variantsClasses)
    : "";

  const compoundVariantsClasses = getCompoundVariantsClasses(
    variants,
    themeContract.compoundVariantsClasses ?? [],
    variantsKeys
  );

  return [themeContract.baseClasses, variantClasses, compoundVariantsClasses]
    .filter(Boolean)
    .join(" ")
    .trim();
}
