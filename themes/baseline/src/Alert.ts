import { AlertThemeContract } from "@hope-ui/theme";

export const Alert: AlertThemeContract = {
  root: {
    baseClasses: "relative flex items-center rounded px-4 py-3 text-base",
    variantsClasses: {
      variant: {
        leftAccent: "border-solid border-l-4",
        topAccent: "border-solid border-t-4",
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
        classes: "bg-success-600 text-white",
      },
      {
        variants: {
          variant: "solid",
          status: "info",
        },
        classes: "bg-info-600 text-white",
      },
      {
        variants: {
          variant: "solid",
          status: "warning",
        },
        classes: "bg-warning-600 text-white",
      },
      {
        variants: {
          variant: "solid",
          status: "danger",
        },
        classes: "bg-danger-600 text-white",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - subtle
       * -----------------------------------------------------------------------------------------------*/
      {
        variants: {
          variant: "subtle",
          status: "success",
        },
        classes: "bg-success-100 text-success-700",
      },
      {
        variants: {
          variant: "subtle",
          status: "info",
        },
        classes: "bg-info-100 text-info-700",
      },
      {
        variants: {
          variant: "subtle",
          status: "warning",
        },
        classes: "bg-warning-100 text-warning-700",
      },
      {
        variants: {
          variant: "subtle",
          status: "danger",
        },
        classes: "bg-danger-100 text-danger-700",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - leftAccent
       * -----------------------------------------------------------------------------------------------*/
      {
        variants: {
          variant: "leftAccent",
          status: "success",
        },
        classes: "bg-success-100 border-success-500 text-success-700",
      },
      {
        variants: {
          variant: "leftAccent",
          status: "info",
        },
        classes: "bg-info-100 border-info-500 text-info-700",
      },
      {
        variants: {
          variant: "leftAccent",
          status: "warning",
        },
        classes: "bg-warning-100 border-warning-500 text-warning-700",
      },
      {
        variants: {
          variant: "leftAccent",
          status: "danger",
        },
        classes: "bg-danger-100 border-danger-500 text-danger-700",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - topAccent
       * -----------------------------------------------------------------------------------------------*/
      {
        variants: {
          variant: "topAccent",
          status: "success",
        },
        classes: "bg-success-100 border-success-500 text-success-700",
      },
      {
        variants: {
          variant: "topAccent",
          status: "info",
        },
        classes: "bg-info-100 border-info-500 text-info-700",
      },
      {
        variants: {
          variant: "topAccent",
          status: "warning",
        },
        classes: "bg-warning-100 border-warning-500 text-warning-700",
      },
      {
        variants: {
          variant: "topAccent",
          status: "danger",
        },
        classes: "bg-danger-100 border-danger-500 text-danger-700",
      },
    ],
    defaultVariants: {
      variant: "solid",
      status: "info",
    },
  },
  icon: {
    baseClasses: "shrink-0",
    compoundVariantsClasses: [
      /* -------------------------------------------------------------------------------------------------
       * Variant - subtle
       * -----------------------------------------------------------------------------------------------*/
      {
        variants: {
          variant: "subtle",
          status: "success",
        },
        classes: "text-success-500",
      },
      {
        variants: {
          variant: "subtle",
          status: "info",
        },
        classes: "text-info-500",
      },
      {
        variants: {
          variant: "subtle",
          status: "warning",
        },
        classes: "text-warning-500",
      },
      {
        variants: {
          variant: "subtle",
          status: "danger",
        },
        classes: "text-danger-500",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - leftAccent
       * -----------------------------------------------------------------------------------------------*/
      {
        variants: {
          variant: "leftAccent",
          status: "success",
        },
        classes: "text-success-500",
      },
      {
        variants: {
          variant: "leftAccent",
          status: "info",
        },
        classes: "text-info-500",
      },
      {
        variants: {
          variant: "leftAccent",
          status: "warning",
        },
        classes: "text-warning-500",
      },
      {
        variants: {
          variant: "leftAccent",
          status: "danger",
        },
        classes: "text-danger-500",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - topAccent
       * -----------------------------------------------------------------------------------------------*/
      {
        variants: {
          variant: "topAccent",
          status: "success",
        },
        classes: "text-success-500",
      },
      {
        variants: {
          variant: "topAccent",
          status: "info",
        },
        classes: "text-info-500",
      },
      {
        variants: {
          variant: "topAccent",
          status: "warning",
        },
        classes: "text-warning-500",
      },
      {
        variants: {
          variant: "topAccent",
          status: "danger",
        },
        classes: "text-danger-500",
      },
    ],
  },
  title: {
    baseClasses: "font-semibold",
  },
  description: {
    baseClasses: "inline-block",
  },
};
