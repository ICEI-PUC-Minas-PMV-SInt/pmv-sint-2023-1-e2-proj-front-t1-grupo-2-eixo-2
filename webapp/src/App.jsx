import { createTheme, ThemeProvider } from "@mui/material";
import { green, lightBlue } from "@mui/material/colors";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

const theme = createTheme({
  palette: {
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
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
