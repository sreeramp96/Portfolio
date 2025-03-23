import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuroraHero } from "./components/AuroraHero"; // AuroraHero for background effect
import "./App.css"; // Your styles (including Tailwind CSS if applicable)

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <AuroraHero />
      </div>
    </BrowserRouter>
  );
}

export default App;
