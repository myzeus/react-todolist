/** @jsx jsx */
// import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";
import { jsx } from "@emotion/core";

// import styles from "./button.module.css";
import * as styles from "./button.styles";
import { useTheme } from "emotion-theming";

const Button = ({ text, onClick, color, align }) => {
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "main-black-color",
  //   color === "red" && "main-red-color",
  //   align === "left" && "align-left",
  //   align === "right" && "align-right"
  // ].join(" ");

  // const classNames = cx(styles.headerBtn, {
  //   [styles.mainBlackColor]: color === "black",
  //   [styles.mainRedColor]: color === "red",
  //   [styles.alignLeft]: align === "left",
  //   [styles.alignRight]: align === "right"
  // });

  // <button className={classNames} onClick={onClick}>
  //   {text}
  // </button>

  const theme = useTheme();

  return (
    <button css={styles.button({ align, color, theme })} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};
export default Button;
