// src/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/header/Header";

export default function Layout({ setSelectedCategory }) {
  return (
    <div
      className="h-screen w-screen bg-[url('/stadium2.jpg')] bg-cover bg-center overflow-hidden"
      style={{
        fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Header is shared across all pages */}
      <Header setSelectedCategory={setSelectedCategory} />

      {/* main slot for pages — mt-20 so Header doesn't overlap */}
      <main className="mt-20">
        <Outlet />
      </main>
    </div>
  );
}
