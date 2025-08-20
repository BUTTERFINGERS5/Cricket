import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PlayerCard from "../Components/PlayerCard/PlayerCard";

const API_KEY = import.meta.env.VITE_CRICAPI_KEY || "7e9d6fe5-b1ee-44e5-958e-73c86486fb06";

export default function MatchDetail() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    fetch(`https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&id=${encodeURIComponent(id)}`)
      .then((res) => res.json())
      .then((data) => setMatch(data.data || data || null))
      .catch(() => setMatch(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="mt-24 text-white p-6">Loading match...</div>;
  if (!match) return <div className="mt-24 text-white p-6">Match details not available.</div>;

  const teamA = match.teams?.[0] || (match.name || "").split(" vs ")[0] || "Team A";
  const teamB = match.teams?.[1] || (match.name || "").split(" vs ")[1] || "Team B";
  const status = match.status || match.matchStatus || "";
  const winner = match.winner_team || match.matchWinner || match.winner || null;

  const innings = match.score?.innings || match.innings || match.score || match.scorecard || [];
  const firstInnings = innings[0] || null;
  const secondInnings = innings[1] || null;
  const playerOfMatch = match.player_of_match || match.playerOfMatch || match.player_of_the_match;

  return (
    <div className="grid grid-cols-2 gap-6 mt-20 px-20 py-8 text-white">
      <div className="space-y-6">
        <div className="bg-black/80 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold">{teamA} vs {teamB}</h3>
              <div className="text-sm text-gray-400">{status}</div>
            </div>
            {winner && (
              <div className="text-sm bg-green-600 text-black px-2 py-1 rounded">{winner}</div>
            )}
          </div>
          <div className="mt-4 text-sm text-gray-300">
            {firstInnings?.score ? firstInnings.score : "Score not available"}
          </div>
        </div>

        <div className="bg-black/80 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Player of the Match</h4>
          {playerOfMatch ? (
            <PlayerCard playerName={playerOfMatch} />
          ) : (
            <div className="text-gray-400">Player details unavailable</div>
          )}
        </div>
      </div>

      <div className="bg-black/80 p-6 rounded-2xl overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{match.name || `${teamA} vs ${teamB}`}</h3>
          <Link to="/" className="text-orange-400 underline">← Back</Link>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">1st Innings</h4>
          {firstInnings ? (
            (firstInnings.batting || firstInnings.players || firstInnings.batsmen)?.map((p, i) => (
              <div key={i} className="flex justify-between text-sm">
                <div className="truncate">{p.name || p.batsman || p.title}</div>
                <div>{p.r || p.runs || `${p.R || ''}`}</div>
              </div>
            ))
          ) : <div className="text-gray-400">Data not available</div>}
        </div>

        <div>
          <h4 className="font-semibold mb-2">2nd Innings</h4>
          {secondInnings ? (
            (secondInnings.batting || secondInnings.players || secondInnings.batsmen)?.map((p, i) => (
              <div key={i} className="flex justify-between text-sm">
                <div className="truncate">{p.name || p.batsman || p.title}</div>
                <div>{p.r || p.runs || `${p.R || ''}`}</div>
              </div>
            ))
          ) : <div className="text-gray-400">Data not available</div>}
        </div>
      </div>
    </div>
  );
}
