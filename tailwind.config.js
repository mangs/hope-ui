const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        secondary: colors.pink,
        accent: colors.teal,
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
