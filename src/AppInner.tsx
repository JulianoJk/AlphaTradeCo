import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home.component";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header/Header.component";
import AboutUs from "./components/Pages/AboutUs/AboutUs.component";
import { theme } from "./components/ui/theme/Theme";
import { useAppDispatch, useAppState } from "./components/context/AppContext";

export default function AppInner() {
  const { mode } = useAppState();
  const dispatch = useAppDispatch();

  const defaultTheme = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      background: {
        default: mode === "dark" ? "#242424" : "#F5F5DC",
      },
    },
  });

  const toggleColorMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    dispatch({
      type: "SET_APP_THEME",
      mode: newMode,
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <Header toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/" element={<AboutUs />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
