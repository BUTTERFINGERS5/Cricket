// src/Approuter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Second from "./pages/Second";
import MatchDetail from "./pages/MatchDetail";

export default function Approuter({ selectedCategory, setSelectedCategory }) {
  return (
    <Routes>
      <Route path="/" element={<Layout setSelectedCategory={setSelectedCategory} />}>
        <Route index element={<Home selectedCategory={selectedCategory} />} />
        <Route path="second" element={<Second selectedCategory={selectedCategory} />} />
        <Route path="match/:id" element={<MatchDetail />} />
      </Route>
    </Routes>
  );
}
