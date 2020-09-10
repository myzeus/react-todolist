/** @jsx jsx */
// import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";
import { jsx } from "@emotion/core";

import * as styles from "./button.styles";
import { useTheme } from "emotion-theming";

const Button = ({ text, onClick, color, align }) => {
  const theme = useTheme();

  return jsx(
    "button",
    {
      css: styles.button({ align, color, theme }),
      onClick: onClick
    },
    text
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
