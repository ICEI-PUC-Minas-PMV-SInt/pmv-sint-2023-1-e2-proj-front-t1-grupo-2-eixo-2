import {
  Box,
  Container,
  createTheme,
  Paper,
  ThemeProvider,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { green, lightBlue, grey } from "@mui/material/colors";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

const theme = createTheme({
  palette: {
    background: {
      default: grey[200],
    },
    primary: {
      main: green[500],
    },
    secondary: {
      main: lightBlue[500],
    },
  },
  typography: {
    h1: { color: grey[800] },
    h2: { color: grey[800] },
    h3: { color: grey[800] },
    h4: { color: grey[800] },
    h5: { color: grey[800] },
    caption: { color: grey[600] },
    fontFamily: "Inter, sans-serif",
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box boxShadow={`0 0 8px ${grey[400]}`} bgcolor={grey[50]}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
