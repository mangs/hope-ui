module.exports = {
  content: [
    "./node_modules/@hope-ui-themes/baseline/dist/**/index.js",
    "./node_modules/@hope-ui/core/dist/**/index.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("../../tailwind.config")],
};
