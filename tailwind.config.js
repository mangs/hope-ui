const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        accent: colors.violet,
        neutral: colors.slate,
        success: colors.emerald,
        info: colors.blue,
        warning: colors.amber,
        danger: colors.red,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
