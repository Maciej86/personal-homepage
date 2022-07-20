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
    display: flex;
    justify-content: center;
    margin-top: 119px;
    background: rgb(230, 230, 230);
    font-family: 'Inter', sans-serif;
    word-break: break-word;
  }

  #root {
    width: 90%;
    max-width: 1216px;
  }
`;
