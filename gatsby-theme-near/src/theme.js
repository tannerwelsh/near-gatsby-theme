/**
 * Theme UI configuration for NEAR Brand
 * https://theme-ui.com/
 * https://nearprotocol.com/brand/
 */

const NEAR_COLORS = {
  black: "#25282a",
  white: "#ffffff",
  slate: "#4b4f54",
  red: ["#ff585d", "#bf4343", "#ff8384"],
  blue: "#6ad1e3",
  yellow: "#f0ec74",
  green: "#8fd6bd",
  royal: "#0072ce",
  earth: "#d1ccbd",
  grey: "#f8f8f8",
}

export const theme = {
  space: [0, 4, 8, 16, 32, 64],
  fonts: {
    headlines: "BwSeidoRound-Medium, sans-serif",
    body: "Benton-Sans, sans-serif",
    monospace: "'Source Code Pro', monospace"
  },
  fontSizes: [14, 16, 18, 20, 28, 32],
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
  colors: {
    // NEAR palette
    ...NEAR_COLORS,

    // Theme UI colors
    text: NEAR_COLORS.black,
    background: NEAR_COLORS.white,
    primary: NEAR_COLORS.slate,
    secondary: NEAR_COLORS.red[0],
    accent: NEAR_COLORS.blue,
    error: NEAR_COLORS.red[0],
    highlight: NEAR_COLORS.yellow,
    muted: NEAR_COLORS.earth,

    modes: {
      dark: {
        text: NEAR_COLORS.white,
        background: NEAR_COLORS.slate,
        primary: NEAR_COLORS.muted,
      },
    },
  },
  sizes: {
    default: "90vw",
    max: "960px",
  },
  borderWidths: [1, 2],
  text: {
    heading: {
      color: "primary",
      fontWeight: "bold",
      fontFamily: "headlines",
      maxWidth: "max",
      margin: 0,
      padding: 0,
      marginTop: 2,
      marginBottom: 3,
      a: {
        color: "inherit",
      },
    },
    "section-head": {
      variant: "text.heading",
      marginTop: 4,
      borderBottom: "1px solid",
    },
    "subsection-head": {
      variant: "text.heading",
      color: "secondary",
      fontSize: 3,
      marginBottom: 2,
    },
    code: {
      padding: 2,
      color: "background",
      backgroundColor: "text",
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "scroll",
    },
  },
  icons: {
    small: {
      width: "20px",
      height: "20px",
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary"
    }
  },
  layout: {
    container: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default",
      padding: 3,
      color: "primary",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
    },
  },
  styles: {
    a: {
      color: "accent"
    }
  }
}