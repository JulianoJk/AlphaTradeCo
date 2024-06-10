import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ResponsiveAppBar from "./components/Header/ResponsiveAppBar.component";

import Home from "./components/Pages/Home.component";
// import ResponsiveAppBar from "./components/Header/ResponsiveAppBar.component";

// import Header from "./components/Header/Header.component";

import * as React from "react";
import { PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./components/Header/ResponsiveAppBar.component";

export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");

  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Router>
        {/* <ResponsiveAppBar /> */}
        {/* <ResponsiveAppBar /> */}
        <AppAppBar mode={"light"} toggleColorMode={toggleColorMode} />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
