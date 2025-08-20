import React, { useEffect, useState } from "react";

export default function IplMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Dummy matches until we add real API
    setMatches([
      { id: 1, team1: "MI", team2: "CSK", date: "2025-04-10" },
      { id: 2, team1: "RCB", team2: "KKR", date: "2025-04-12" },
    ]);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-4">IPL Matches 2025</h2>
      {matches.length > 0 ? (
        <ul>
          {matches.map((match) => (
            <li key={match.id} className="text-white mb-2">
              {match.team1} vs {match.team2} - {match.date}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No matches found.</p>
      )}
    </div>
  );
}
