import React from "react";
import { Text } from "../../components/Text";
import { Container } from "./styles";

export default function About() {
  return (
    <Container>
      <Text>
        This application was built to show how nested Navigation works
        in React Native! Feel free to base or clone this projet to apply,
        your own App's.
      </Text>
    </Container>
  )
}