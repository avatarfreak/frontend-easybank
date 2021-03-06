module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "pri-100": "var(--pri-100)",
        "pri-110": "var(--pri-110)",
        "pri-120": "var(--pri-120)",

        "neutral-100": "var(--neutral-100)",
        "neutral-110": "var(--neutral-110)",
        "neutral-120": "var(--neutral-120)",
        "neutral-130": "var(--neutral-130)",
      },
      fontSize: {
        "fs-100": "var(--fs-100)",
        "fs-200": "var(--fs-200)",
        "fs-300": "var(--fs-300)",
        "fs-400": "var(--fs-400)",
        "fs-500": "var(--fs-500)",
        "fs-600": "var(--fs-600)",
        "fs-700": "var(--fs-700)",
        "fs-800": "var(--fs-800)",
        "fs-900": "var(--fs-900)",
        "fs-50": "var(--fs-50)",
        "fs-60": "var(--fs-60)",
        "fs-70": "var(--fs-70)",
        "fs-80": "var(--fs-80)",
        "fs-90": "var(--fs-90)",
      },
      fontFamily: {
        sans: "var(--ff-sans)",
      },
      letterSpacing: {
        "t-100": "var(--t-100)",
        "t-200": "var(--t-200)",
        "t-300": "var(--t-300)",
        "t-400": "var(--t-400)",
        "t-500": "var(--t-500)",
        "t-600": "var(--t-600)",
        "t-700": "var(--t-700)",
      },
      lineHeight: {
        "l-100": "var(--l-100)",
        "l-200": "var(--l-200)",
        "l-300": "var(--l-300)",
      },
      backgroundImage: {
        "menu-open": "url('../images/icon-hamburger.svg')",
        "menu-close": "url('../images/icon-close.svg')",
        "intro-mobile": "url('../images/bg-intro-mobile.svg')",
        "intro-desktop": "url('../images/bg-intro-desktop.svg')",
      },
      screens: {
        md: "600px",
        lg: "850px",
      },
    },
  },
  plugins: [],
};
