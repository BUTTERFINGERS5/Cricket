// src/pages/Second.jsx
import React from "react";
import MainContent from "../Components/mainContent/MainContent";

export default function Second({ selectedCategory }) {
  // Renders the same inner content as Home while still using shared Layout
  return <MainContent selectedCategory={selectedCategory} />;
}
