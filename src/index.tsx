import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "@components/Header";
import Container from "@components/Container";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import lightTheme from "@styles/theme";
import "@styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header />
      <Container>
        <App />
      </Container>
      <Container></Container>
    </ThemeProvider>
  </React.StrictMode>,
);
