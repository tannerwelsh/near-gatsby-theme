/**
 * Theme UI configuration for NEAR Brand
 * https://theme-ui.com/
 * https://nearprotocol.com/brand/
 */

export const theme = {
  space: [0, 4, 8, 16, 32],
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
    black: "#25282A",
    slate: "#4B4F54",
    red: ["#FF585D", "#BF4343", "#FF8384"],
    blue: "#6AD1E3",
    yellow: "#F0EC74",
    green: "#8FD6BD",
    royal: "#0072CE",
    earth: "#D1CCBD",

    // Common colors
    background: "#fff",
    'background-grey': "#f8f8f8",
    primary: "#4B4F54",
    error: "#FF585D",
  },
  sizes: {
    default: "90vw",
    max: "540px",
  },
  text: {
    heading: {
      backgroundColor: "background",
      color: "primary",
      fontWeight: "bold",
      fontFamily: "headlines",
      margin: "0 auto",
      maxWidth: "max",
      padding: 3,
      width: "default",
      a: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
    }
  },
  layout: {
    container: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default",
      padding: 3,
      color: "slate",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
    },
  },
  icons: {
    small: {
      width: "20px",
      height: "20px",
    },
  },
  styles: {
    h1: {
      color: "slate",
      fontSize: 5,
      fontWeight: "bold",
      lineHeight: "heading",
      margin: "1rem 0 0",
    },
  },
}