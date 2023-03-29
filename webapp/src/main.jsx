import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      100: "red",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
