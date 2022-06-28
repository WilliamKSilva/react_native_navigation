import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 5px;
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_large}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
`