import React from "react";
import { DefaultText } from "./styles";

type TextProps = {
  children: React.ReactNode;
}

export function Text({ children }: TextProps) {
  return (
    <>
      <DefaultText>{children}</DefaultText>
    </>
  )
}