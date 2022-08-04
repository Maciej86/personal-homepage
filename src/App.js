import { Header } from "./Header";
import { ThemeProvider } from "styled-components";
import { ThemeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={ThemeLight}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
