import { Container, createTheme, Paper, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { green, lightBlue, grey } from "@mui/material/colors";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

const theme = createTheme({
  palette: {
    background: {
      default: grey[50],
    },
    primary: {
      main: green[500],
    },
    secondary: {
      main: lightBlue[500],
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
