import { css } from "@emotion/core";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
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
