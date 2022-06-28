import React from "react";
import { Container, Text } from "./styles";

type TextNavigateProps = {
  text: string;
  route: string;
}

export function TextNavigate({ text, route }: TextNavigateProps) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}