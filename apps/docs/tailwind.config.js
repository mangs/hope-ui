module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@hope-ui-themes/baseline/dist/**/index.js",
  ],
  presets: [require("../../tailwind.config")],
};
