// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Approuter from "./Approuter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Local");

  return (
    <BrowserRouter>
      <Approuter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </BrowserRouter>
  );
}

export default App;
