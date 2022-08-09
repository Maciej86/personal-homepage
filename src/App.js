import { ThemeProvider } from "styled-components";
import { ThemeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "././features/Header";
import { Skills } from "././features/Skills";
import { NextLearn } from "./features/NextLearn";
import { Portfolio } from "./features/Portfolio";

function App() {
  return (
    <ThemeProvider theme={ThemeLight}>
      <GlobalStyle />
      <Header />
      <Skills />
      <NextLearn />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
