import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { ThemeLight, ThemeDark } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "././features/Header";
import { Skills } from "././features/Skills";
import { NextLearn } from "./features/NextLearn";
import { Portfolio } from "./features/Portfolio";
import { Footer } from "./features/Footer";
import { Theme } from "./features/Theme";
import { selectTheme } from "./features/slice";

function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme ? ThemeDark : ThemeLight}>
      <GlobalStyle />
      <Theme />
      <Header />
      <Skills />
      <NextLearn />
      <Portfolio />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
