import { CompoundVariantThemeContract } from "./contract";

/**
 * Return all compound variants classes that match the given props.
 *
 * @param variantsKeys The variants keys to loop through while filtering.
 * @param props The props to filter on
 * @param compoundVariantsClasses The compound variants classes to filter.
 * @returns All compound variants classes that match the given props.
 */
export function filterCompoundVariantsClasses(
  variantsKeys: any,
  props: any,
  compoundVariantsClasses?: CompoundVariantThemeContract<any>[]
): string {
  return (
    compoundVariantsClasses
      ?.filter(item => {
        let keep = true;

        // Check if the compound variant matches the props keys.
        for (const key in variantsKeys) {
          if (!keep) {
            break;
          }

          // The compound variant doesn't depend on this key
          if (item[key] == null) {
            keep = true;
            continue;
          }

          keep = item[key] === props[key];
        }

        return keep;
      })
      .map(item => item.classes)
      .join(" ")
      .trim() ?? ""
  );
}
