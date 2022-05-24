const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        accent: colors.violet,
        neutral: colors.slate,
        success: colors.green,
        info: colors.blue,
        warning: colors.yellow,
        danger: colors.red,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
