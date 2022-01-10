import Button from "./lib/components/Button/Button";
import { UIPieceProvider } from "./lib/contexts/UIPieceContext";
import { extendTheme } from "./lib/theme/theme";

const customTheme = extendTheme({
  colors: {
    primary: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },
    neutral: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    success: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    info: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
    warning: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },
    danger: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
  },
  components: {
    Button: {
      size: "md",
    },
  },
});

export default function App() {
  return (
    <UIPieceProvider theme={customTheme}>
      <div>
        <Button color="primary" variant="filled">
          Button
        </Button>
        <Button color="primary" variant="light">
          Button
        </Button>
        <Button color="primary" variant="outline">
          Button
        </Button>
        <Button color="primary" variant="dashed">
          Button
        </Button>
        <Button color="primary" variant="text">
          Button
        </Button>
      </div>
      <div>
        <Button color="dark" variant="filled">
          Button
        </Button>
        <Button color="dark" variant="light">
          Button
        </Button>
        <Button color="dark" variant="outline">
          Button
        </Button>
        <Button color="dark" variant="dashed">
          Button
        </Button>
        <Button color="dark" variant="text">
          Button
        </Button>
      </div>
      <div>
        <Button color="neutral" variant="filled">
          Button
        </Button>
        <Button color="neutral" variant="light">
          Button
        </Button>
        <Button color="neutral" variant="outline">
          Button
        </Button>
        <Button color="neutral" variant="dashed">
          Button
        </Button>
        <Button color="neutral" variant="text">
          Button
        </Button>
      </div>
      <div>
        <Button color="success" variant="filled">
          Button
        </Button>
        <Button color="success" variant="light">
          Button
        </Button>
        <Button color="success" variant="outline">
          Button
        </Button>
        <Button color="success" variant="dashed">
          Button
        </Button>
        <Button color="success" variant="text">
          Button
        </Button>
      </div>
      <div>
        <Button color="info" variant="filled">
          Button
        </Button>
        <Button color="info" variant="light">
          Button
        </Button>
        <Button color="info" variant="outline">
          Button
        </Button>
        <Button color="info" variant="dashed">
          Button
        </Button>
        <Button color="info" variant="text">
          Button
        </Button>
      </div>
      <div>
        <Button color="warning" variant="filled">
          Button
        </Button>
        <Button color="warning" variant="light">
          Button
        </Button>
        <Button color="warning" variant="outline">
          Button
        </Button>
        <Button color="warning" variant="dashed">
          Button
        </Button>
        <Button color="warning" variant="text">
          Button
        </Button>
      </div>
      <div>
        <Button color="danger" variant="filled">
          Button
        </Button>
        <Button color="danger" variant="light">
          Button
        </Button>
        <Button color="danger" variant="outline">
          Button
        </Button>
        <Button color="danger" variant="dashed">
          Button
        </Button>
        <Button color="danger" variant="text">
          Button
        </Button>
      </div>

      <Button disabled>Button</Button>
    </UIPieceProvider>
  );
}
