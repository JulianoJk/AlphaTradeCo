import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ResponsiveAppBar from "./components/Header/ResponsiveAppBar.component";

import Home from "./components/Pages/Home.component";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
