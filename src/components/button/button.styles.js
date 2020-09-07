import { css } from "@emotion/core";

export const button = ({ color, align, theme }) => {
  let textColor;
  const {
    color: { primary }
  } = theme;

  switch (color) {
    case "black":
      textColor = primary.black;
      break;
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor = primary.black;
      break;
  }

  return css`
    width: 24%;
    font-size: 1.8rem;
    font-family: "Roboto", sans-serif;
    padding: 16px;
    color: ${textColor};
    text-align: ${align};
    background: unset;
    border: unset;
    outline: unset;
    font-weight: 800;
    cursor: pointer;
  `;
};
