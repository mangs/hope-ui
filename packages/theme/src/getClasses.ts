import {
  ComponentThemeContract,
  CompoundVariantClassesDefinition,
  VariantClassesDefinitions,
  VariantDefinitions,
  VariantsKeys,
} from "./contract";

interface GetClassesParams<T extends VariantDefinitions> {
  variantsKeys: VariantsKeys<T>;
  themeContract: ComponentThemeContract<T>;
  variants: T;
}

/**
 * Return all compound variants classes that match a given set of variants.
 */
function getCompoundVariantsClasses<T extends VariantDefinitions>(
  variantsKeys: VariantsKeys<T>,
  compoundVariantsClasses: CompoundVariantClassesDefinition<T>[],
  variants: T
): string {
  return compoundVariantsClasses
    .filter(compoundVariant => {
      let keep = true;

      // Check if the compound variant matches the props keys.
      for (const key in variantsKeys) {
        if (!keep) {
          break;
        }

        // The compound variant doesn't depend on this key
        if (compoundVariant.variants[key] == null) {
          continue;
        }

        keep = compoundVariant.variants[key] === variants[key];
      }

      return keep;
    })
    .map(item => item.classes)
    .join(" ")
    .trim();
}

/**
 * Return all variants classes that match a given set of variants.
 */
function getVariantsClasses<T extends VariantDefinitions>(
  variantsKeys: VariantsKeys<T>,
  variantsClasses: VariantClassesDefinitions<T>,
  variants: T
) {
  return (
    Object.keys(variantsKeys)
      // eslint-disable-next-line
      // @ts-ignore
      .map((key: keyof T) => variants[key] && variantsClasses[key]?.[String(variants[key])])
      .filter(Boolean)
      .join(" ")
      .trim()
  );
}

/**
 * Return all classes that match a given set of variants.
 */
export function getClasses<T extends VariantDefinitions>(params: GetClassesParams<T>): string {
  const { variantsKeys, themeContract, variants } = params;

  const variantClasses = themeContract.variantsClasses
    ? getVariantsClasses(variantsKeys, themeContract.variantsClasses, variants)
    : "";

  const compoundVariantsClasses = getCompoundVariantsClasses(
    variantsKeys,
    themeContract.compoundVariantsClasses ?? [],
    variants
  );

  return [themeContract.baseClasses, variantClasses, compoundVariantsClasses]
    .filter(Boolean)
    .join(" ")
    .trim();
}
