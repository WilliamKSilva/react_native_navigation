import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Container, Text } from "./styles";

type TextNavigateProps = {
  text: string;
  route: string;
}

export function TextNavigate({ text, route }: TextNavigateProps) {
  const { navigate } = useNavigation()
  
  return (
    <Container onPress={() => navigate('StackExample')}>
      <Text>{text}</Text>
    </Container>
  )
}