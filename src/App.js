import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <Footer />
    </div>
  );
}

export default App;
