import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    
    fontsize: {
      font_small: number,
      font_medium: number,
      font_large: number,      
    }

    colors: {
      background: string;      
      primary: string;

      text: string;
    }
  }
}