import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";

import Shirts from "./pages/Attire/Shirts";

import Na from "./pages/Band/Na";

import Acoustic from "./pages/Guitars/Acoustic";
import Bass from "./pages/Guitars/Bass";
import Electric from "./pages/Guitars/Electric";

import Drums from "./pages/Percussion/Drums";
import Cymbals from "./pages/Percussion/Cymbals";

import Equipment from "./pages/Sound/Equipment";

import Instrumentrentals from "./pages/Rentals/Instrumentrentals";

import Info from "./pages/Repairs/Info";

import Lessons from "./pages/Lessons/Lessons";

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
        <Route path="/acoustic" element={<Acoustic />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/bass" element={<Bass />} />
        <Route path="/drums" element={<Drums />} />
        <Route path="/cymbals" element={<Cymbals />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/instrumentrentals" element={<Instrumentrentals />} />
        <Route path="/info" element={<Info />} />
        <Route path="/alllessons" element={<Lessons />} />
      </Routes>

      {/* Section1 always at bottom above footer */}
      <Section1 />

      <Footer />
    </Router>
  );
}

export default App;
