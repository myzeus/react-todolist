import React from "react";
import Paper from "../components/paper/PaperClass";
import Container from "../layout/Container";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <h1>This is About Page</h1>
        <Link to="/">Pergi ke home</Link>
      </Container>
    </Paper>
  );
};

export default About;
