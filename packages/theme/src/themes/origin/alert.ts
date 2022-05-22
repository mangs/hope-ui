import { AlertThemeContract } from "../../contract";

export const alertTheme: AlertThemeContract = {
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
        variant: "solid",
        status: "success",
        classes: "bg-success-600 text-white",
      },
      {
        variant: "solid",
        status: "info",
        classes: "bg-info-600 text-white",
      },
      {
        variant: "solid",
        status: "warning",
        classes: "bg-warning-600 text-white",
      },
      {
        variant: "solid",
        status: "danger",
        classes: "bg-danger-600 text-white",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - subtle
       * -----------------------------------------------------------------------------------------------*/
      {
        variant: "subtle",
        status: "success",
        classes: "bg-success-100 text-success-700",
      },
      {
        variant: "subtle",
        status: "info",
        classes: "bg-info-100 text-info-700",
      },
      {
        variant: "subtle",
        status: "warning",
        classes: "bg-warning-100 text-warning-700",
      },
      {
        variant: "subtle",
        status: "danger",
        classes: "bg-danger-100 text-danger-700",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - leftAccent
       * -----------------------------------------------------------------------------------------------*/
      {
        variant: "leftAccent",
        status: "success",
        classes: "bg-success-100 border-success-500 text-success-700",
      },
      {
        variant: "leftAccent",
        status: "info",
        classes: "bg-info-100 border-info-500 text-info-700",
      },
      {
        variant: "leftAccent",
        status: "warning",
        classes: "bg-warning-100 border-warning-500 text-warning-700",
      },
      {
        variant: "leftAccent",
        status: "danger",
        classes: "bg-danger-100 border-danger-500 text-danger-700",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - topAccent
       * -----------------------------------------------------------------------------------------------*/
      {
        variant: "topAccent",
        status: "success",
        classes: "bg-success-100 border-success-500 text-success-700",
      },
      {
        variant: "topAccent",
        status: "info",
        classes: "bg-info-100 border-info-500 text-info-700",
      },
      {
        variant: "topAccent",
        status: "warning",
        classes: "bg-warning-100 border-warning-500 text-warning-700",
      },
      {
        variant: "topAccent",
        status: "danger",
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
        variant: "subtle",
        status: "success",
        classes: "text-success-500",
      },
      {
        variant: "subtle",
        status: "info",
        classes: "text-info-500",
      },
      {
        variant: "subtle",
        status: "warning",
        classes: "text-warning-500",
      },
      {
        variant: "subtle",
        status: "danger",
        classes: "text-danger-500",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - leftAccent
       * -----------------------------------------------------------------------------------------------*/
      {
        variant: "leftAccent",
        status: "success",
        classes: "text-success-500",
      },
      {
        variant: "leftAccent",
        status: "info",
        classes: "text-info-500",
      },
      {
        variant: "leftAccent",
        status: "warning",
        classes: "text-warning-500",
      },
      {
        variant: "leftAccent",
        status: "danger",
        classes: "text-danger-500",
      },

      /* -------------------------------------------------------------------------------------------------
       * Variant - topAccent
       * -----------------------------------------------------------------------------------------------*/
      {
        variant: "topAccent",
        status: "success",
        classes: "text-success-500",
      },
      {
        variant: "topAccent",
        status: "info",
        classes: "text-info-500",
      },
      {
        variant: "topAccent",
        status: "warning",
        classes: "text-warning-500",
      },
      {
        variant: "topAccent",
        status: "danger",
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
