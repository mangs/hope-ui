import {
  AlertThemeContract,
  AlertVariants,
  CompoundVariantClassesDefinition,
} from "@hope-ui/theme";

function createRootAccentCompoundVariants(): Array<
  CompoundVariantClassesDefinition<AlertVariants>
> {
  const accentVariants: Array<AlertVariants["variant"]> = [
    "leftAccent",
    "topAccent",
    "rightAccent",
    "bottomAccent",
  ];

  return accentVariants.flatMap(variant => {
    return [
      {
        variants: {
          variant,
          status: "success",
        },
        classes: "bg-success-50 border-success-500 text-success-700",
      },
      {
        variants: {
          variant,
          status: "info",
        },
        classes: "bg-info-50 border-info-500 text-info-700",
      },
      {
        variants: {
          variant,
          status: "warning",
        },
        classes: "bg-warning-50 border-warning-500 text-warning-700",
      },
      {
        variants: {
          variant,
          status: "danger",
        },
        classes: "bg-danger-50 border-danger-500 text-danger-700",
      },
    ];
  });
}

function createIconCompoundVariants(): Array<CompoundVariantClassesDefinition<AlertVariants>> {
  const accentVariants: Array<AlertVariants["variant"]> = [
    "subtle",
    "outline",
    "leftAccent",
    "topAccent",
    "rightAccent",
    "bottomAccent",
  ];

  return accentVariants.flatMap(variant => {
    return [
      {
        variants: {
          variant,
          status: "success",
        },
        classes: "text-success-500",
      },
      {
        variants: {
          variant,
          status: "info",
        },
        classes: "text-info-500",
      },
      {
        variants: {
          variant,
          status: "warning",
        },
        classes: "text-warning-500",
      },
      {
        variants: {
          variant,
          status: "danger",
        },
        classes: "text-danger-500",
      },
    ];
  });
}

export const Alert: AlertThemeContract = {
  root: {
    baseClasses: "relative flex items-center rounded px-4 py-3 text-base",
    variantsClasses: {
      variant: {
        outline: "border-solid border-[1px]",
        leftAccent: "border-solid border-l-4",
        topAccent: "border-solid border-t-4",
        rightAccent: "border-solid border-r-4",
        bottomAccent: "border-solid border-b-4",
      },
    },
    compoundVariantsClasses: [
      /* -------------------------------------------------------------------------------------------------
       * Variant - solid
       * -----------------------------------------------------------------------------------------------*/
      {
        variants: {
          variant: "solid",
          status: "success",
        },
        classes: "bg-success-500 text-white",
      },
      {
        variants: {
          variant: "solid",
          status: "info",
        },
        classes: "bg-info-500 text-white",
      },
      {
        variants: {
          variant: "solid",
          status: "warning",
        },
        classes: "bg-warning-500 text-neutral-900",
      },
      {
        variants: {
          variant: "solid",
          status: "danger",
        },
        classes: "bg-danger-500 text-white",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - subtle
       * -----------------------------------------------------------------------------------------------*/
      {
        variants: {
          variant: "subtle",
          status: "success",
        },
        classes: "bg-success-50 text-success-700",
      },
      {
        variants: {
          variant: "subtle",
          status: "info",
        },
        classes: "bg-info-50 text-info-700",
      },
      {
        variants: {
          variant: "subtle",
          status: "warning",
        },
        classes: "bg-warning-50 text-warning-700",
      },
      {
        variants: {
          variant: "subtle",
          status: "danger",
        },
        classes: "bg-danger-50 text-danger-700",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - outline
       * -----------------------------------------------------------------------------------------------*/
      {
        variants: {
          variant: "outline",
          status: "success",
        },
        classes: "border-success-500 text-success-700",
      },
      {
        variants: {
          variant: "outline",
          status: "info",
        },
        classes: "border-info-500 text-info-700",
      },
      {
        variants: {
          variant: "outline",
          status: "warning",
        },
        classes: "border-warning-500 text-warning-700",
      },
      {
        variants: {
          variant: "outline",
          status: "danger",
        },
        classes: "border-danger-500 text-danger-700",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - accents
       * -----------------------------------------------------------------------------------------------*/
      ...createRootAccentCompoundVariants(),
    ],
    defaultVariants: {
      variant: "subtle",
      status: "info",
    },
  },
  icon: {
    baseClasses: "shrink-0 grow-0",
    compoundVariantsClasses: createIconCompoundVariants(),
  },
  title: {
    baseClasses: "font-semibold",
  },
  description: {
    baseClasses: "inline-block",
  },
};
