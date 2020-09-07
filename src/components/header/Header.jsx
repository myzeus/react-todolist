/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../button/Button";
import * as styles from "./header.styles";
import { useTheme } from "emotion-theming";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section css={styles.header}>
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button> */}
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 css={styles.headerTitle(theme)}>Todo List</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};
export default Header;
