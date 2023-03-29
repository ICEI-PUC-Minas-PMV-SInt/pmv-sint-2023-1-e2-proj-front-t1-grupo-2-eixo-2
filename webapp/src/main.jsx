import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);
