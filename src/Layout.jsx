// src/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/header/Header"; // <-- correct path

export default function Layout({ setSelectedCategory }) {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/stadium2.jpg')",
        fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
      }}
    >
      <Header setSelectedCategory={setSelectedCategory} />
      <main className="mt-20">
        <Outlet />
      </main>
    </div>
  );
}
