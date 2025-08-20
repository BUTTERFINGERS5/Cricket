import React from "react";

export default function PlayerCard({ playerName, playerData }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-20 h-20 bg-gradient-to-b from-gray-800 to-gray-700 rounded flex items-center justify-center">
        <div className="text-white font-bold">{(playerName || "P").charAt(0)}</div>
      </div>
      <div>
        <div className="font-semibold">{playerName}</div>
        <div className="text-sm text-gray-400">{playerData?.team || "Player details unavailable"}</div>
      </div>
    </div>
  );
}
