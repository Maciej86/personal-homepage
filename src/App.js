import { ThemeProvider } from "styled-components";
import { ThemeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "././features/Header";
import { Skills } from "././features/Skills";
import { NextLearn } from "./features/NextLearn";

function App() {
  return (
    <ThemeProvider theme={ThemeLight}>
      <GlobalStyle />
      <Header />
      <Skills />
      <NextLearn />
    </ThemeProvider>
  );
}

export default App;
