// src/Components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header({ setSelectedCategory }) {
  return (
    <header className="flex justify-between items-center absolute top-0 h-20 left-0 w-full px-5 py-4 bg-black/70 text-lg text-white">
      <div>
        <Link to="/" className="font-bold tracking-wide">Teampickr</Link>
      </div>

      <nav className="flex items-center gap-3">
        <select
          className="rounded bg-black/70 text-orange-500 text-sm px-2 py-1"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Local">Local Matches</option>
          <option value="IPL">IPL</option>
          <option value="BBL">BBL</option>
          <option value="ODI">ODI</option>
          <option value="T20">T20</option>
        </select>

        <select className="rounded bg-black/70 text-orange-500 text-sm px-2 py-1">
          <option>Men</option>
          <option>Women</option>
        </select>

        <Link
          to="/second"
          className="bg-black/80 border border-orange-500 text-orange-500 text-sm px-3 py-1 rounded"
        >
          Account
        </Link>
      </nav>
    </header>
  );
}

export default Header;
