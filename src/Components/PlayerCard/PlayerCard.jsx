// src/Components/PlayerCard.jsx
import React from "react";

export default function PlayerCard({ playerName, playerData }) {
  // playerData is optional extra data if you want to fetch more
  return (
    <div className="flex items-center gap-4">
      <div className="w-20 h-20 bg-gradient-to-b from-gray-800 to-gray-700 rounded overflow-hidden flex items-center justify-center">
        {/* placeholder avatar; replace with actual image when available */}
        <div className="text-white font-bold">{(playerName || "P").charAt(0)}</div>
      </div>
      <div>
        <div className="font-semibold">{playerName}</div>
        {playerData ? (
          <div className="text-sm text-gray-400">{playerData.team || ""}</div>
        ) : (
          <div className="text-sm text-gray-400">Player details unavailable</div>
        )}
      </div>
    </div>
  );
}
