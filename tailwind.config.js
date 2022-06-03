const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin")
// const { resolve } = require('path');
// const { sync } = require('glob');

module.exports = {
  // content: [
  //   sync(resolve(__dirname, '*.html')),
  //   sync(resolve(__dirname, '*.js'))
  // ],
  content: [
    "./**/*.html",
    "./**/*.js"
  ],
  options: {
    safelist: [
      /data-theme$/,
    ],
    // blocklist: [],
  },
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'fa': ['Shabnam', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },

  theme: {
    /* For Letter size */
    screens: {
      print: { raw: "print" },
      xsm: "500px",
      sm: "640px",
      md: "833px",
      lg: "1079.5px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        jost: ["Jost", ...defaultTheme.fontFamily.sans],
        shabnam: ["Shabnam", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm2: "0.69rem", // 15px label
        sm: "0.7rem",
        base: "0.75rem", // 16px base
        md: "1.0625rem", // 17px body
        lg: "1.125rem", // 18px heading
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.85rem",
        "4xl": "2.25rem",
        "5xl": "2.65rem",
      },
      lineHeight: {
        snugish: "1.25",
        normal: "1.34",
      },
      maxWidth: {
        letter: "72rem",
      },
      height: {
        letter: "86.9375rem",
        "letter-col": "71.625rem",
        "letter-col-full": "77.9375rem",
      },
      spacing: {
        0.5: "2px", // 2px
        1.5: "0.375rem", // 6px
        1.6: "0.4375rem", // 7px
        2.1: "0.5625rem", // 9px
        2.5: "10px", // 10px
        3.2: "0.8125rem", // 16px
        4.5: "1.125rem", // 8px
        11: "2.75rem", // 44px (once)
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",

        black: "#24262d",
        white: "#fdfdfd",

        gray: {
          150: "#fdfdfd",
          250: "#24262d",
          550: "#8b9cbe",
          650: "#555e70",
          750: "#343a40",
          ...defaultTheme.colors.gray,
        },
        link: "#b2bfd9",
      },
    },
  },

  variants: {
    extend: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
      margin: ["responsive", "last", "first"],
      padding: ["responsive", "last"],
    },
  },

  plugins: [
    require('daisyui'),

    plugin(function ({ addBase, addUtilities, theme }) {
      addBase({
        html: {
          /**
           * Some Default Styles
           */
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            width: "10px"
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "0.5rem",
            backgroundColor: theme("colors.gray.400"),
            transitionProperty: theme("transitionProperty.colors"),
            "&:hover": {
              backgroundColor: theme("colors.gray.500")
            }
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
            backgroundColor: theme("colors.white")
          },

          /**
           * Background Styles
           */
          backgroundColor: "#fff !important",
        },
        body: {
          "-webkit-font-smoothing": "subpixel-antialiased",
        },
      });

      /**
       * Grid Pattern
       */
      const gridPattern = {
        ".bg-pattern-grid": {
          backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          maskImage: "linear-gradient(to bottom, transparent, black)"
        }
      }
      addUtilities(gridPattern, {
        variants: ["responsive"],
      });

      /**
       * Dot Pattern
       */
      const dotPattern = {
        ".bg-pattern-dot": {
          backgroundImage: "radial-gradient(hsla(215 28% 17% / 0.2) 0.5px, hsla(0 0% 98% / 1) 0.5px)",
          backgroundSize: "5px 5px",
          backgroundPosition: "top",
        }
      }
      addUtilities(dotPattern, {
        variants: ["responsive"],
      });

      /**
       * Typography Utilities
       */
      const typographyUtils = {
        ".optimize-legibility": {
          "text-rendering": "optimizeLegibility",
        },
        ".ligatures": {
          "font-variant-ligatures": "common-ligatures",
          "font-feature-settings": "'liga' on, 'clig' on",
        },
        ".kerning": {
          "font-kerning": "normal",
          "font-feature-settings": "'kern' on",
        },
        ".small-caps": {
          "font-variant-caps": "small-caps",
          "font-feature-settings": "'smcp' on",
        },
        ".all-small-caps": {
          "font-variant-caps": "all-small-caps",
          "font-feature-settings": "'c2sc' on, 'smcp' on",
        },
        ".lining-nums": {
          "font-variant-numeric": "lining-nums",
          "font-feature-settings": "'lnum' on",
        },
        ".oldstyle-nums": {
          "font-variant-numeric": "oldstyle-nums",
          "font-feature-settings": "'onum' on",
        },
        ".proportional-nums": {
          "font-variant-numeric": "proportional-nums",
          "font-feature-settings": "'pnum' on",
        },
        ".tabular-nums": {
          "font-variant-numeric": "tabular-nums",
          "font-feature-settings": "'tnum' on",
        },
        ".slashed-zero": {
          "font-variant-numeric": "slashed-zero",
          "font-feature-settings": "'zero' on",
        },
        ".super": {
          "font-variant-position": "super",
          "font-feature-settings": "'sups' on",
        },
        ".sub": {
          "font-variant-position": "sub",
          "font-feature-settings": "'sub' on",
        },
        ".ordinal": {
          "font-variant-position": "ordinal",
          "font-feature-settings": "'ordn' on",
        },
        ".fractions": {
          "font-variant-numeric": "diagonal-fractions",
          "font-feature-settings": "'frac' on",
        },
        ".case-sensitive": {
          "text-transform": "uppercase",
          "font-feature-settings": "'case' on",
        },
        ".hyphens-manual": {
          hyphens: "manual",
        },
      };

      addUtilities(typographyUtils, {
        variants: ["responsive"],
      });
      /**
       * Project Specific Utilities
       */
      const projectSpecificUtils = {
        ".border-inset": {
          "box-shadow": `inset 0 0 0 1px ${theme("colors.gray.400")}`,
        },
      };

      addUtilities(projectSpecificUtils, {
        variants: ["responsive"],
      });

      /**
       * CSS Multi-Column Layout Utilities
       */
      const columnUtils = {
        ".col-count-1": {
          "column-count": "1",
        },
        ".col-count-2": {
          "column-count": "2",
        },
        ".col-count-3": {
          "column-count": "3",
        },
        ".col-gap-md": {
          "column-gap": "2.1875rem",
        },
        ".break-after-col": {
          "break-after": "column",
        },
        ".break-inside-avoid": {
          "break-inside": "avoid",
        },
        ".break-after-avoid": {
          "break-after": "avoid",
        },
        ".break-before-avoid": {
          "break-after": "avoid",
        },
        ".col-fill-auto": {
          "column-fill": "auto",
        },
        ".col-fill-balance": {
          "column-fill": "balance",
        },
      };

      addUtilities(columnUtils, {
        variants: ["responsive"],
      });
    }),
  ],

  daisyui: {
    styled: true,
    themes: ['light'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
