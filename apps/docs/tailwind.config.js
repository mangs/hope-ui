module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@hope-ui/core/dist/**/index.js",
    "./node_modules/@hope-ui/baseline-theme/dist/**/index.js",
  ],
  presets: [require("../../tailwind.config")],
};
