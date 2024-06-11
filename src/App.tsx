import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home.component";

import * as React from "react";
import { CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header/Header.component";
import AboutUs from "./components/Pages/AboutUs/AboutUs.component";

export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const defaultTheme = createTheme({
    palette: {
      common: {
        black: "#31312d",
      },
      background: {
        default: mode === "dark" ? "#242424" : "#F5F5DC",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#323232",
      },
    },
  });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <Header mode={mode} toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path="/home/" element={<Home />} />
          <Route path="/about-us/" element={<AboutUs />} />
          <Route path="/*/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
