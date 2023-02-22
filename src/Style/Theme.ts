import { DefaultTheme } from "styled-components";

const color = {
  black: "#333",
  blue: "#14148C",
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
