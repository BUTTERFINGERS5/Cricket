// src/Components/mainContent/MainContent.jsx
import React, { useEffect, useState } from "react";
import MatchCard from "../matchcard/Matchcard";
import LeagueMatchItem from "../leagueMatchItem/LeagueMatchItem";
import { useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_CRICAPI_KEY || "7e9d6fe5-b1ee-44e5-958e-73c86486fb06";

function MainContent({ selectedCategory }) {
  const [matches, setMatches] = useState([]);
  const [iplMatches, setIplMatches] = useState([]);
  const [loadingIpl, setLoadingIpl] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // existing fetch for live/current matches (keeps your original behavior)
    fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.data || []);
      })
      .catch((err) => console.error("currentMatches error:", err));
  }, []);

  useEffect(() => {
    // fetch matches list (historical + upcoming) and get last 5 IPL matches
    // only fetch when selectedCategory === 'IPL' (you can still prefetch if desired)
    if (selectedCategory !== "IPL") {
      setIplMatches([]);
      return;
    }

    setLoadingIpl(true);
    fetch(`https://api.cricapi.com/v1/matches?apikey=${API_KEY}&offset=0`)
      .then((res) => res.json())
      .then((data) => {
        const all = data.data || [];
        // Filter IPL matches; check common fields defensively
        const ipl = all.filter((m) => {
          const comp = (m.competition?.name || m.series?.name || m.competition || "").toString().toLowerCase();
          const name = (m.name || "").toLowerCase();
          const type = (m.matchType || "").toLowerCase();
          return comp.includes("ipl") || name.includes("ipl") || type.includes("ipl");
        });

        // sort by date descending; handle different date fields
        ipl.sort((a, b) => {
          const da = new Date(a.date || a.dateTimeGMT || a.start_time || a.matchStart || 0).getTime();
          const db = new Date(b.date || b.dateTimeGMT || b.start_time || b.matchStart || 0).getTime();
          return db - da;
        });

        // keep top 5 latest
        setIplMatches(ipl.slice(0, 5));
      })
      .catch((err) => {
        console.error("matches fetch error:", err);
        setIplMatches([]);
      })
      .finally(() => setLoadingIpl(false));
  }, [selectedCategory]);

  return (
    <div className="grid grid-cols-2 h-[calc(100vh-80px)] mt-20 px-20 py-8 text-white gap-6">
      <h2 className="col-span-2 text-xl font-bold mb-4">Live matches</h2>

      {/* Left side: two cards side-by-side */}
      <div className="grid grid-cols-1 gap-6">
        {/* If we're on match detail route, you may render differently — but on home show two cards */}
        {matches.length > 0 ? (
          matches.slice(0, 2).map((match, index) => {
            const teamA = match.teams?.[0] || match.score?.[0]?.inning || "Team A";
            const teamB = match.teams?.[1] || match.score?.[1]?.inning || "Team B";

            const scoreA = match.score?.[0]
              ? `${match.score[0].r}/${match.score[0].w} (${match.score[0].o})`
              : "—";
            const scoreB = match.score?.[1]
              ? `${match.score[1].r}/${match.score[1].w} (${match.score[1].o})`
              : "—";

            return (
              <MatchCard
                key={index}
                title={match.name}
                status={match.status}
                teamA={teamA}
                scoreA={scoreA}
                teamB={teamB}
                scoreB={scoreB}
              />
            );
          })
        ) : (
          <p>No live matches available.</p>
        )}
      </div>

      {/* Right side */}
      <div>
        {/* Right column container - always there, but content changes */}
        <div className="bg-black/80 p-6 rounded-2xl h-full overflow-auto">
          <h3 className="text-xl font-bold mb-4">Ongoing leagues</h3>

          {/* Only show the IPL matches list when header selection is IPL */}
          {selectedCategory === "IPL" ? (
            <>
              <div className="space-y-3">
                {loadingIpl ? (
                  <div>Loading IPL matches...</div>
                ) : iplMatches.length > 0 ? (
                  iplMatches.map((m) => {
                    // determine id field (API might use "id", "unique_id", "match_id" etc.)
                    const id = m.id || m.match_id || m.unique_id || m._id || m.matchId;
                    return (
                      <LeagueMatchItem
                        key={id || m.name}
                        match={m}
                        onClick={() => {
                          // navigate to match detail page
                          // ensure id exists
                          if (id) {
                            navigate(`/match/${encodeURIComponent(id)}`);
                          } else {
                            console.warn("No match id available for", m);
                          }
                        }}
                      />
                    );
                  })
                ) : (
                  <div>No IPL matches found.</div>
                )}
              </div>
            </>
          ) : (
            <div className="text-gray-400">Select "IPL" from the header to show the IPL list here.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
