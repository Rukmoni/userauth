import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import UserProvider from './providers/UserProvider';
import { useTranslation } from 'react-i18next';
import Routes from './Routes';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Routes/>
      </UserProvider>
      </ThemeProvider>
  );
}

export default App;

