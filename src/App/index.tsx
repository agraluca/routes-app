import Routes from "routes";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

import GlobalStyles from "styles/global";
import { AuthProvider } from "hooks/useAuth";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
          <GlobalStyles />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
