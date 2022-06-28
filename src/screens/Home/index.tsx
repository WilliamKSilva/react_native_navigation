import React from "react";
import { Text } from "../../components/Text";
import { TextNavigate } from "../../components/TextNavigate";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Text>Hello Home, navigate to a Stack screen using the button below!</Text>
      <TextNavigate route="StackExample" text="Click here!" />
    </Container>
  )
}