import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import UserProvider from './providers/UserProvider';
import Routes from './Routes';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Routes/>
      </UserProvider>
      </ThemeProvider>
  );
}

