import { css } from "@emotion/core";

export const todo = ({ theme }) =>
  css`
    position: relative;
    flex: 1 0 auto;
    text-align: center;
    max-height: 34px;
    margin: 16px 0 0;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    border-bottom: 1px solid ${theme.color.primary.red};
  `;

export const todoText = ({ theme, isCompleted }) =>
  css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    text-decoration: ${isCompleted ? "line-through" : "initial"};
    transform: translate(-50%);
    color: ${theme.color.primary.black};
  `;
