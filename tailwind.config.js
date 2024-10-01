/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        DEFAULT: "#1A5319",
        100: "#508D4E",
        200: "#80AF81",
        300: "#D6EFD8",
      },
      secondary: {
        DEFAULT: "#6A9C89",
      },
      black: {
        DEFAULT: "#000000",
        100: "#1B1B1B",
        200: "#4D4D4D",
        300: "#141414",
      },
      gray: {
        DEFAULT: "#F4F4F4",
        100: "#E9E9E9",
        200: "#D3D3D3",
        300: "#E7E7E7",
        400: "#7A7A7A",
        500: "#A1A1A1",
        600: "E2E2E2",
      },
      blue: {
        DEFAULT: "",
      },
      green: {
        DEFAULT: "#00D187",
      },
      orange: {
        DEFAULT: "#E9D779",
      },
      yellow: {
        DEFAULT: "#C78F00",
        100: "#9D8A72",
      },
      red: {
        DEFAULT: "#FF3300",
      },
      other: {
        DEFAULT: "#F2FCFF",
        100: "#F9F6F3",
      },
      error: {
        DEFAULT: "#E3000C",
        100: "#FF0505",
      },
      disabled: {
        DEFAULT: "#d2d5d9",
      },
    },
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      primary: ["Josefin Sans", "sans-serif"],
      secondary: ["Tinos", "serif"],
      icomoon: ["icomoon"],
    },
    extend: {
      fontSize: {
        xxs: ["1rem", { lineHeight: "1.4rem" }],
        xss: ["1.1rem", { lineHeight: "1.4rem" }],
        xs: ["1.2rem", { lineHeight: "1.6rem" }],
        sm: ["1.3rem", { lineHeight: "1.8rem" }],
        md: ["1.4rem", { lineHeight: "2rem" }],
        label: ["1.5rem", { lineHeight: "2.2rem" }],
        base: ["1.6rem", { lineHeight: "2.4rem" }],
        lg: ["1.8rem", { lineHeight: "2.8rem" }],
        xl: ["2rem", { lineHeight: "2.8rem" }],
        "1xl": ["2.2rem", { lineHeight: "3rem" }],
        "2xl": ["2.4rem", { lineHeight: "3.2rem" }],
        "2.5xl": ["2.7rem", { lineHeight: "3.4rem" }],
        "3xl": ["3rem", { lineHeight: "3.6rem" }],
        "4xl": ["3.6rem", { lineHeight: "4rem" }],
        "5xl": ["4.8rem", { lineHeight: "1" }],
        "6xl": ["6rem", { lineHeight: "1" }],
        "7xl": ["7.2rem", { lineHeight: "1" }],
        "8xl": ["9.6rem", { lineHeight: "1" }],
        "9xl": ["12.8rem", { lineHeight: "1" }],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      spacing: {
        px: "1px",
        0: "0px",
        0.5: "0.2rem",
        1: "0.4rem",
        1.5: "0.6rem",
        2: "0.8rem",
        2.5: "1rem",
        3: "1.2rem",
        3.5: "1.4rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
        14: "5.6rem",
        16: "6.4rem",
        20: "8rem",
        24: "9.6rem",
        28: "11.2rem",
        32: "12.8rem",
        36: "14.4rem",
        40: "16rem",
        44: "17.6rem",
        48: "19.2rem",
        52: "20.8rem",
        56: "22.4rem",
        60: "24rem",
        64: "25.6rem",
        72: "28.8rem",
        80: "32rem",
        96: "38.4rem",
        100: "44rem",
      },
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
      borderRadius: {
        none: "0px",
        xs: "0.2rem",
        sm: "0.3rem",
        DEFAULT: "0.4rem",
        md: "0.6rem",
        lg: "0.8rem",
        xl: "1.2rem",
        "2xl": "1.6rem",
        "3xl": "2.4rem",
        full: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        4: "4px",
        8: "8px",
        10: "10px",
        12: "12px",
        15: "15px",
        16: "16px",
        18: "18px",
        20: "20px",
      },
      boxShadow: {
        none: "none",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        authFormShadow: "0px 0px 1px 0px rgba(39, 39, 39, 0.25)",
        tabHeaderShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.07)",
        outerBotShadw: "0px 5px 5px 0px rgba(0, 0, 0, 0.05)",
        sidebarFooterButtonShadow: "0px 0px 20px 0px rgba(39, 39, 39, 0.10)",
        accordianShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.05)",
        iconblockShadow: "1px 1px 5px 0px rgba(0, 0, 0, 0.10)",
        uploadblockShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
      },
      content: {
        none: "none",
      },
      cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        help: "help",
        "not-allowed": "not-allowed",
      },
      height: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        1: "1px",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        full: "100%",
        screen: "100vh",
        "auth-box": "60rem",
        min: "min-content",
        max: "max-content",
        "btn-sm": "3.4rem",
        "btn-md": "4rem",
        "btn-base": "4.2rem",
        preloader: "13rem",
      }),
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        2: "1rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
      },
      margin: (theme, { negative }) => ({
        auto: "auto",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxHeight: (theme) => ({
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
      }),
      maxWidth: (theme, { breakpoints }) => ({
        none: "none",
        0: "0rem",
        xs: "32rem",
        sm: "38.4rem",
        md: "44.8rem",
        lg: "51.2rem",
        xl: "57.6rem",
        "2xl": "67.2rem",
        "3xl": "76.8rem",
        "4xl": "89.6rem",
        "5xl": "102.4rem",
        "6xl": "115.2rem",
        "7xl": "128rem",
        full: "100%",
        min: "min-content",
        max: "max-content",
        prose: "65ch",
        ...breakpoints(theme("screens")),
      }),
      minHeight: {
        0: "0px",
        full: "100%",
        screen: "100vh",
        "sidebar-header": "17.5rem",
      },
      minWidth: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
        btn: "9.5rem",
      },
      objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        90: "0.9",
        95: "0.95",
        100: "1",
      },
      outline: {
        none: ["2px solid transparent", "2px"],
        white: ["2px dotted white", "2px"],
        black: ["2px dotted black", "2px"],
      },
      transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left",
      },
      transitionDelay: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      transitionDuration: {
        DEFAULT: "150ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors: "background-color, border-color, color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        border: "border",
        width: "width",
        transform: "transform",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      translate: (theme, { negative }) => ({
        ...theme("spacing"),
        ...negative(theme("spacing")),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
        "-1/2": "-50%",
        "-1/3": "-33.333333%",
        "-2/3": "-66.666667%",
        "-1/4": "-25%",
        "-2/4": "-50%",
        "-3/4": "-75%",
        "-full": "-100%",
      }),
      width: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "11.5/12": "95%",
        full: "100%",
        screen: "100vw",
        min: "min-content",
        max: "max-content",
        "auth-box": "45rem",
        scrollbar: "0.6rem",
        preloader: "13rem",
        "sidebar-sm": "45rem",
      }),
      zIndex: {
        auto: "auto",
        0: "0",
        1: "1",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        "-1": "-1",
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
        "-50": "-50",
        "-60": "-60",
        "-70": "-70",
        "-80": "-80",
        "-90": "-90",
        "-100": "-100",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // Add your custom styles here
      addUtilities({
        html: {
          "font-size": "62.5%",
          // "scroll-behavior": "smooth",
        },
        ".empty-content": {
          content: "''",
        },
      });
    }),
  ],
};
