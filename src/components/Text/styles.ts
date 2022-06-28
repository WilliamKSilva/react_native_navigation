import styled from "styled-components/native";

export const DefaultText = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`