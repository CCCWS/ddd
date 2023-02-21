import { DefaultTheme } from "styled-components";

const color = {
  black: "#333",
};

const font = {
  size: "2rem",
};

export type Color = typeof color;
export type Font = typeof font;

const theme: DefaultTheme = {
  color,
  font,
};

export default theme;
