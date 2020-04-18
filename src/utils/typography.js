import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    { name: "Cabin", styles: [] },
    { name: "Open Sans", styles: [] },
  ],
  headerFontFamily: ["Cabin", "sans-serif"],
  bodyFontFamily: ["Open Sans", "serif"],
})

export default typography
