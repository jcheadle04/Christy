import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import Shirts from "./pages/Attire/Shirts";
import Na from "./pages/Band/Na";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      {/* Page content changes with routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/na" element={<Na />} />
      </Routes>

      {/* Section1 always at bottom above footer */}
      <Section1 />

      <Footer />
    </Router>
  );
}

export default App;
