import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    background: rgb(230, 230, 230);
    font-family: 'Inter', sans-serif;
    word-break: break-word;
  }
`;
