import { ThemeProvider } from "styled-components";
import { ThemeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "././features/Header";
import { Skills } from "././features/Skills";
import { NextLearn } from "./features/NextLearn";
import { Portfolio } from "./features/Portfolio";
import { Footer } from "./features/Footer";

function App() {
  return (
    <ThemeProvider theme={ThemeLight}>
      <GlobalStyle />
      <Header />
      <Skills />
      <NextLearn />
      <Portfolio />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
