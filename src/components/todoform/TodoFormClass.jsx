import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/Button";

const StyledInput = styled.input`
  background: unset;
  border: unset;
  padding: 0 64px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-transform: lowercase;
  width: 100%;
`;

class TodoForm extends React.Component {
  state = {
    value: ""
  };

  handleFormSubmit = (e) => {
    const { value } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();

    if (!value) {
      alert("No Blank Input");
      return;
    }

    if (value.length > 40) {
      alert(
        "Maksimum character is 40,  please write less than 40 character todos"
      );
      this.setState({
        value: ""
      });
      return;
    }

    addTodo(value);
    this.setState({
      value: ""
    });
  };

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { showAdd, theme } = this.props;

    if (showAdd) {
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItems="flex-start">
              <Item flex={1} padding="16px">
                <StyledInput
                  type="text"
                  value={this.state.value}
                  onChange={this.handleOnChange}
                  theme={theme}
                ></StyledInput>
              </Item>
              <Item padding="0 10px 0 0">
                {/* <button css={styles.addBtn({ theme })}>Add</button> */}
                <Button text="Add" />
              </Item>
            </Container>
          </form>
        </section>
      );
    } else {
      return null;
    }
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}

export default withTheme(TodoForm);
