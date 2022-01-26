module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)", //(graphic design text)
        "dark-blue": "hsl(198, 62%, 26%)", //(photography text)
        "dark-moderate-cyan": "hsla(167, 43%, 70%, 2)", //(footer)
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        yellow: "hsl(51, 100%, 49%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },

    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    fontFamily: {
      "barlow-sans": ["Barlow", "sans-serif"],
      "fraunces-serif": ["Fraunces", "serif"],
    },
  },
  plugins: [],
};
