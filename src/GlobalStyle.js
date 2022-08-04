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
    background: ${({ theme }) => theme.color.background};
    font-family: 'Inter', sans-serif;
    word-break: break-word;
  }

  #root {
    width: 90%;
    max-width: 1216px;
    margin: 30px 10px 30px 10px;
  }
`;
