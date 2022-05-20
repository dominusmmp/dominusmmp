// const plugin = require('tailwindcss/plugin')
const { resolve } = require('path');
const { sync } = require('glob');

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
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),

    // "rtl" Variant Plugin
    // plugin(function ({ addVariant, e }) {
    //   addVariant('rtl', ({ modifySelectors, separator }) => {
    //     modifySelectors(({ className }) => {
    //       return className.selectors = [
    //         `html[dir=rtl] .${e(`rtl${separator}${className}`)}`,
    //         `html[dir=rtl] .${e(`rtl${separator}first${separator}${className}`)}:first-child`,
    //         `html[dir=rtl] .${e(`rtl${separator}last${separator}${className}`)}:last-child`,
    //       ]
    //     })
    //   })
    // }),

    // "ltr" Variant Plugin
    // plugin(function ({ addVariant, e }) {
    //   addVariant('ltr', ({ modifySelectors, separator }) => {
    //     modifySelectors(({ className }) => {
    //       return className.selectors = [
    //         `html:not([dir=rtl]) .${e(`ltr${separator}${className}`)}`,
    //         `html:not([dir=rtl]) .${e(`ltr${separator}first${separator}${className}`)}:first-child`,
    //         `html:not([dir=rtl]) .${e(`ltr${separator}last${separator}${className}`)}:last-child`,
    //       ]
    //     })
    //   })
    // }),

    // "!important" Variant Plugin
    // plugin(function ({ addVariant, e }) {
    //   addVariant('important', ({ separator, container }) => {
    //     container.walkRules(rule => {

    //       let importantPrepend = '!';

    //       rule.selectors = [
    //         `.${e(`!${rule.selector.slice(1)}`)}`,
    //         `.${e(`hover${separator}${importantPrepend}${rule.selector.slice(1)}`)}:hover`,
    //         `.${e(`focus${separator}${importantPrepend}${rule.selector.slice(1)}`)}:focus`,
    //         `.${e(`dark${separator}${importantPrepend}${rule.selector.slice(1)}`)}`,
    //       ]

    //       rule.walkDecls(decl => {
    //         decl.important = true
    //       })

    //     })
    //   })
    // }),
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
