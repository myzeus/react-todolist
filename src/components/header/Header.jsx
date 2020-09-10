/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../button/Button";
import * as styles from "./header.styles";
import { useTheme } from "emotion-theming";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
        </Item>

        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo List</h1>
        </Item>

        <Item flex={1} align="right">
          <Button text="Clear" onClick={clearTodos} color="red" align="right" />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};
export default Header;
