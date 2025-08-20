import React from "react";

function MatchCard({ title, status, teamA, teamB, scoreA, scoreB }) {
  const statusColor =
    status?.toLowerCase().includes("live")
      ? "bg-green-500 text-black"
      : status?.toLowerCase().includes("complet")
      ? "bg-red-500 text-white"
      : "bg-yellow-500 text-black";

  return (
    // OUTER translucent box with extra top/right padding so badge never overlaps
    <div className="relative bg-black/80 rounded-xl p-4 pt-8 pr-8 w-full shadow-lg">
      {/* Status badge on the OUTER box (top-right) */}
      <span
        className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full shadow ${statusColor}`}
      >
        {status || "Unknown"}
      </span>

      {/* INNER darker box */}
      <article className="bg-black p-4 rounded-lg text-white">
        {/* Title */}
        <h3 className="font-bold text-lg leading-snug break-words">
          {title || "Match"}
        </h3>

        {/* Two mini boxes side-by-side */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-black/60 p-3 rounded">
            <div className="flex items-center justify-between">
              <span className="font-semibold truncate">{teamA || "Team A"}</span>
              <span>{scoreA || "—"}</span>
            </div>
          </div>

          <div className="bg-black/60 p-3 rounded">
            <div className="flex items-center justify-between">
              <span className="font-semibold truncate">{teamB || "Team B"}</span>
              <span>{scoreB || "—"}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MatchCard;
