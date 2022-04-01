import type { Placement } from "@floating-ui/dom";
import { arrow, autoUpdate, computePosition, flip, hide, inline, offset, shift } from "@floating-ui/dom";
import { createContext, createUniqueId, JSX, onCleanup, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { isServer } from "solid-js/web";

import { SystemStyleObject } from "@/styled-system/types";
import { useComponentStyleConfigs } from "@/theme/provider";

import { ThemeableCloseButtonOptions } from "../close-button/close-button";

type PopoverMotionPreset = "scale" | "none";

export interface PopoverProps {
  /**
   * Placement of the popover
   */
  placement?: Placement;

  /**
   * Offset between the popover and the reference (trigger) element.
   */
  offset?: number;

  /**
   * The id of the popover content.
   */
  id?: string;

  /**
   * If `true`, the popover will be shown.
   * (in controlled mode)
   */
  opened?: boolean;

  /**
   * If `true`, the popover will be initially shown
   * (in uncontrolled mode)
   */
  defaultOpened?: boolean;

  /**
   * The interaction that triggers the popover.
   *
   * `hover` - means the popover will open when you hover with mouse or
   * focus with keyboard on the popover trigger
   *
   * `click` - means the popover will open on click or
   * press `Enter` to `Space` on keyboard
   */
  triggerType?: "hover" | "click";

  /**
   * If `true`, apply floating-ui `inline` middleware.
   * Useful for inline reference elements that span over multiple lines, such as hyperlinks or range selections.
   */
  inline?: boolean;

  /**
   * If `true`, the popover will show an arrow tip
   */
  withArrow?: boolean;

  /**
   * Size of the arrow.
   */
  arrowSize?: number;

  /**
   * The padding between the arrow and the edges of the popover.
   */
  arrowPadding?: number;

  /**
   * Delay (in ms) before showing the popover
   * @default 0ms
   */
  openDelay?: number;

  /**
   * Delay (in ms) before hiding the popover
   * @default 0ms
   */
  closeDelay?: number;

  /**
   * If `true`, the popover will close when the user blur out it by clicking outside or tabbing out
   */
  closeOnBlur?: boolean;

  /**
   * If `true`, the popover will close when the user hit the `Esc` key.
   */
  closeOnEsc?: boolean;

  /**
   * If `true`, the focus will be locked into the popover.
   */
  trapFocus?: boolean;

  /**
   * A query selector string targeting the element to receive focus when the popover opens.
   */
  initialFocus?: string;

  /**
   * Popover opening/closing transition.
   */
  motionPreset?: PopoverMotionPreset;

  /**
   * Children of the Popover.
   */
  children?: JSX.Element;

  /**
   * Callback fired when the popover opens.
   */
  onOpen?: () => void;

  /**
   * Callback fired when the popover closes.
   */
  onClose?: () => void;
}

type ThemeablePopoverOptions = Pick<
  PopoverProps,
  | "placement"
  | "offset"
  | "withArrow"
  | "arrowSize"
  | "arrowPadding"
  | "openDelay"
  | "closeDelay"
  | "motionPreset"
  | "closeOnEsc"
  | "closeOnBlur"
  | "trapFocus"
>;

interface PopoverState
  extends Required<
      Pick<
        PopoverProps,
        | "triggerType"
        | "placement"
        | "offset"
        | "inline"
        | "withArrow"
        | "arrowSize"
        | "arrowPadding"
        | "openDelay"
        | "closeDelay"
        | "opened"
        | "motionPreset"
        | "closeOnBlur"
        | "closeOnEsc"
        | "trapFocus"
      >
    >,
    Pick<PopoverProps, "initialFocus"> {
  /**
   * If `true`, the popover will be shown.
   * (in uncontrolled mode)
   */
  _opened: boolean;

  /**
   * If `true`, the popover is in controlled mode.
   * (have opened prop)
   */
  isControlled: boolean;

  /**
   * The `id` of the popover trigger.
   */
  triggerId: string;

  /**
   * The `id` of the popover content.
   */
  contentId: string;

  /**
   * The `id` of the popover content header.
   */
  headerId: string;

  /**
   * The `id` of the popover content body.
   */
  bodyId: string;

  /**
   * If `true`, notify that the popover header component is rendered.
   */
  headerMounted: boolean;

  /**
   * If `true`, notify that the popover body component is rendered.
   */
  bodyMounted: boolean;
}

/**
 * Popover provides context, theming, and accessibility properties
 * to all other popover components.
 *
 * It doesn't render any DOM node.
 */
export function Popover(props: PopoverProps) {
  const defaultContentId = `hope-popover-${createUniqueId()}`;

  const theme = useComponentStyleConfigs().Popover;

  const [state, setState] = createStore<PopoverState>({
    // eslint-disable-next-line solid/reactivity
    _opened: !!props.defaultOpened,
    headerMounted: false,
    bodyMounted: false,
    get isControlled() {
      return props.opened !== undefined;
    },
    get opened() {
      return this.isControlled ? !!props.opened : this._opened;
    },
    get contentId() {
      return props.id ?? defaultContentId;
    },
    get triggerId() {
      return `${this.contentId}--trigger`;
    },
    get headerId() {
      return `${this.contentId}--header`;
    },
    get bodyId() {
      return `${this.contentId}--body`;
    },
    get triggerType() {
      return props.triggerType ?? "click";
    },
    get initialFocus() {
      return props.initialFocus;
    },
    get inline() {
      return props.inline ?? false;
    },
    get placement() {
      return props.placement ?? theme?.defaultProps?.root?.placement ?? "bottom";
    },
    get offset() {
      return props.offset ?? theme?.defaultProps?.root?.offset ?? 8;
    },
    get withArrow() {
      return props.withArrow ?? theme?.defaultProps?.root?.withArrow ?? true;
    },
    get arrowSize() {
      return props.arrowSize ?? theme?.defaultProps?.root?.arrowSize ?? 8;
    },
    get arrowPadding() {
      return props.arrowPadding ?? theme?.defaultProps?.root?.arrowPadding ?? 8;
    },
    get openDelay() {
      return props.openDelay ?? theme?.defaultProps?.root?.openDelay ?? 200;
    },
    get closeDelay() {
      return props.closeDelay ?? theme?.defaultProps?.root?.closeDelay ?? 200;
    },
    get motionPreset() {
      return props.motionPreset ?? theme?.defaultProps?.root?.motionPreset ?? "scale";
    },
    get closeOnBlur() {
      return props.closeOnBlur ?? theme?.defaultProps?.root?.closeOnBlur ?? true;
    },
    get closeOnEsc() {
      return props.closeOnEsc ?? theme?.defaultProps?.root?.closeOnEsc ?? true;
    },
    get trapFocus() {
      return props.trapFocus ?? theme?.defaultProps?.root?.trapFocus ?? false;
    },
  });

  let anchorRef: HTMLElement | undefined;
  let triggerRef: HTMLElement | undefined;
  let popoverRef: HTMLElement | undefined;
  let arrowRef: HTMLElement | undefined;

  let enterTimeoutId: number | undefined;
  let exitTimeoutId: number | undefined;

  let cleanupPopoverAutoUpdate: (() => void) | undefined;

  const assignAnchorRef = (el: HTMLElement) => {
    anchorRef = el;
  };

  const assignTriggerRef = (el: HTMLElement) => {
    triggerRef = el;
  };

  const assignPopoverRef = (el: HTMLElement) => {
    popoverRef = el;
  };

  const assignArrowRef = (el: HTMLElement) => {
    arrowRef = el;
  };

  async function updatePopoverPosition() {
    const referenceElement = anchorRef ?? triggerRef;

    if (!referenceElement || !popoverRef) {
      return;
    }

    const middleware = [offset(state.offset)];

    if (state.inline) {
      middleware.push(inline());
    }

    middleware.push(flip());
    middleware.push(shift());

    if (state.withArrow && arrowRef) {
      middleware.push(arrow({ element: arrowRef, padding: state.arrowPadding }));
    }

    middleware.push(hide());

    const { x, y, placement, middlewareData } = await computePosition(referenceElement, popoverRef, {
      placement: state.placement,
      middleware,
    });

    if (!popoverRef) {
      return;
    }

    const referenceHidden = middlewareData.hide?.referenceHidden;

    Object.assign(popoverRef.style, {
      left: `${Math.round(x)}px`,
      top: `${Math.round(y)}px`,
      visibility: referenceHidden ? "hidden" : "visible",
    });

    if (!arrowRef) {
      return;
    }

    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;

    const staticSide = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[placement.split("-")[0]] as string;

    // Used to put half of the arrow outside of the popover.
    const arrowOffset = `${state.arrowSize ? Math.round(state.arrowSize / 2) * -1 : -4}px`;

    Object.assign(arrowRef.style, {
      left: arrowX != null ? `${Math.round(arrowX)}px` : "",
      top: arrowY != null ? `${Math.round(arrowY)}px` : "",
      right: "",
      bottom: "",
      [staticSide]: arrowOffset,
    });
  }

  const onOpen = () => {
    if (!state.isControlled) {
      setState("_opened", true);
    }

    props.onOpen?.();
    updatePopoverPosition();
  };

  const onClose = () => {
    if (!state.isControlled) {
      setState("_opened", false);
    }

    props.onClose?.();
  };

  const openWithDelay = () => {
    enterTimeoutId = window.setTimeout(onOpen, state.openDelay);
  };

  const closeWithDelay = () => {
    if (enterTimeoutId) {
      window.clearTimeout(enterTimeoutId);
    }
    exitTimeoutId = window.setTimeout(onClose, state.closeDelay);
  };

  const setupPopoverAutoUpdate = () => {
    if (isServer) {
      return;
    }

    const referenceElement = anchorRef ?? triggerRef;

    if (!referenceElement || !popoverRef) {
      return;
    }

    // schedule auto update of the popover position
    cleanupPopoverAutoUpdate = autoUpdate(referenceElement, popoverRef, updatePopoverPosition);
  };

  const setHeaderMounted = (value: boolean) => setState("headerMounted", value);
  const setBodyMounted = (value: boolean) => setState("bodyMounted", value);

  onCleanup(() => {
    window.clearTimeout(enterTimeoutId);
    window.clearTimeout(exitTimeoutId);
  });

  const context: PopoverContextValue = {
    state: state as PopoverState,
    assignAnchorRef,
    assignTriggerRef,
    assignPopoverRef,
    assignArrowRef,
    openWithDelay,
    closeWithDelay,
    setupPopoverAutoUpdate,
    cleanupPopoverAutoUpdate,
    setHeaderMounted,
    setBodyMounted,
  };

  return <PopoverContext.Provider value={context}>{props.children}</PopoverContext.Provider>;
}

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

interface PopoverContextValue {
  state: PopoverState;

  /**
   * Callback to assign the popover anchor ref.
   */
  assignAnchorRef: (el: HTMLElement) => void;

  /**
   * Callback to assign the popover trigger ref.
   */
  assignTriggerRef: (el: HTMLElement) => void;

  /**
   * Callback to assign the popover content ref.
   */
  assignPopoverRef: (el: HTMLElement) => void;

  /**
   * Callback to assign the popover arrow ref.
   */
  assignArrowRef: (el: HTMLElement) => void;

  /**
   * Callback function to open the popover.
   */
  openWithDelay: () => void;

  /**
   * Callback function to close the popover.
   */
  closeWithDelay: () => void;

  /**
   * Callback to setup floating-ui auto update.
   */
  setupPopoverAutoUpdate: () => void;

  /**
   * Callback to cleanup floating-ui auto update.
   */
  cleanupPopoverAutoUpdate?: () => void;

  /**
   * Callback function to set if the popover header is mounted.
   */
  setHeaderMounted: (value: boolean) => void;

  /**
   * Callback function to set if the popover body is mounted.
   */
  setBodyMounted: (value: boolean) => void;
}

const PopoverContext = createContext<PopoverContextValue>();

export function usePopoverContext() {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error("[Hope UI]: usePopoverContext must be used within a `<Popover />` component");
  }

  return context;
}

/* -------------------------------------------------------------------------------------------------
 * StyleConfig
 * -----------------------------------------------------------------------------------------------*/

export interface PopoverStyleConfig {
  baseStyle?: {
    content?: SystemStyleObject;
    closeButton?: SystemStyleObject;
    header?: SystemStyleObject;
    body?: SystemStyleObject;
    footer?: SystemStyleObject;
  };
  defaultProps?: {
    root?: ThemeablePopoverOptions;
    closeButton?: ThemeableCloseButtonOptions;
  };
}
