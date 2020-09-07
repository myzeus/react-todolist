import { css } from "@emotion/core";

export const header = () =>
  css`
    display: flex;
    align-items: flex-start;
  `;

export const headerTitle = (theme) =>
  css`
    width: 52%;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 3.6rem;
    color: ${theme.color.primary.black};
    text-transform: lowercase;
  `;
