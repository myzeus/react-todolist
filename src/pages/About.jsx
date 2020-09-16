import React from "react";
import Paper from "../components/paper/PaperClass";
import Container from "../layout/Container";
import AboutContent from "../components/AboutContent/AboutContent";
const About = () => {
  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <AboutContent />
      </Container>
    </Paper>
  );
};

export default About;
