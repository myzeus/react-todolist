import { css } from "@emotion/core";

export const addInput = ({ theme }) =>
  css`
    background: unset;
    border: unset;
    padding: 0 64px;
    /* flex: 1; */
    border-bottom: 1px solid ${theme.color.primary.red};
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    text-transform: lowercase;
    width: 100%;
  `;
