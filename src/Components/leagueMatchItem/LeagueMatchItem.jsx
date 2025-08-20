// src/Components/LeagueMatchItem.jsx
import React from "react";

export default function LeagueMatchItem({ match, onClick }) {
  // match may have fields like name / teams / date / id
  const teamA = match.teams?.[0] || (match.name || "").split(" vs ")[0] || "Team A";
  const teamB = match.teams?.[1] || (match.name || "").split(" vs ")[1] || "Team B";
  const dateStr = match.date || match.dateTimeGMT || match.start_date || match.matchStart;

  return (
    <div
      className="flex items-center justify-between bg-black/80 p-4 rounded-lg cursor-pointer hover:bg-black/70"
      onClick={onClick}
    >
      <div>
        <div className="font-semibold">{teamA} <span className="text-gray-400">vs</span> {teamB}</div>
        <div className="text-sm text-gray-400">{new Date(dateStr || Date.now()).toLocaleString()}</div>
      </div>

      <div className="text-right text-sm text-gray-300">
        <div>{match.matchType || match.format || ""}</div>
        <div className="text-xs">{match.venue || ""}</div>
      </div>
    </div>
  );
}
