// src/Components/mainContent/MainContent.jsx
import React from "react";
import IplMatches from "../IplMatches/IplMatches";

export default function MainContent({ selectedCategory }) {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="bg-black bg-opacity-50 p-4">
        {/* You can add filters, stats, or other content here */}
      </div>

      {/* Right Section */}
      <div className="bg-black bg-opacity-70 p-4 overflow-y-auto">
        <IplMatches selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
