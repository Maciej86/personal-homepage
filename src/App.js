import { Header } from "./Header";
import { ThemeProvider } from "styled-components";
import { ThemeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Skills } from "./Skills";

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
