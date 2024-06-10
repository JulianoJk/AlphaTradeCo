import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/Header/ResponsiveAppBar.component";

import Home from "./components/Pages/Home.component";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <ResponsiveAppBar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
