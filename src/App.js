import { ThemeProvider } from "styled-components";
import { ThemeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "././features/Header";
import { Skills } from "././features/Skills";

function App() {
  return (
    <ThemeProvider theme={ThemeLight}>
      <GlobalStyle />
      <Header />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
