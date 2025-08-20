// src/Components/IplMatches/IplMatches.jsx
import React, { useEffect, useState } from "react";
import Matchcard from "../matchcard/Matchcard";

const API_KEY = import.meta.env.VITE_CRICAPI_KEY || "YOUR_OLD_API_KEY";

export default function IplMatches({ selectedCategory }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedCategory !== "IPL") return; // Only fetch IPL matches
    setLoading(true);

    fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`)
      .then((res) => res.json())
      .then((data) => {
        // Filter IPL matches only
        const iplMatches = (data.data || []).filter(
          (match) => match.name?.includes("IPL")
        );
        setMatches(iplMatches.slice(0, 5)); // Last 5 IPL matches
      })
      .catch((err) => console.error("Error fetching IPL matches:", err))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  if (selectedCategory !== "IPL") return <div className="text-white">Select IPL to see matches</div>;
  if (loading) return <div className="text-white">Loading IPL matches...</div>;
  if (!matches.length) return <div className="text-white">No IPL matches found</div>;

  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <Matchcard key={match.id} match={match} />
      ))}
    </div>
  );
}
