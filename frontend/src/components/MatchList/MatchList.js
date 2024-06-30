import React, { useState, useEffect } from "react";
import { getMatches } from "../../services/api";
import { PlusCircle } from "lucide-react";

const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        console.log("Fetching matches...");
        const data = await getMatches();
        console.log("Matches data:", data);
        setMatches(data);
      } catch (err) {
        console.error("Error fetching matches:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMatches();
  }, []);

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDay = (dateString) => {
    return new Date(dateString).toLocaleDateString([], { weekday: "short" });
  };

  // Placeholder predictions - you might want to fetch these from your API or calculate them
  const getPredictions = () => [
    { score: "1-0", percentage: 30 },
    { score: "2-1", percentage: 25 },
    { score: "0-0", percentage: 20 },
    { score: "1-1", percentage: 15 },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Upcoming Matches</h2>
      {matches.length === 0 ? (
        <p>No upcoming matches</p>
      ) : (
        matches.map((match) => (
          <div key={match.id}>
            <div>
              <span>{`${formatDay(match.date)}, ${formatTime(
                match.date
              )}`}</span>
            </div>

            <div>
              <div>
                <div>
                  <span>
                    {match.home_team.name.substring(0, 3).toUpperCase()}
                  </span>
                </div>
                <span>{match.home_team.name}</span>
              </div>
              <div>
                <div>{match.home_score !== null ? match.home_score : "-"}</div>
                <div>{match.away_score !== null ? match.away_score : "-"}</div>
              </div>
              <div>
                <span>{match.away_team.name}</span>
                <div>
                  <span>
                    {match.away_team.name.substring(0, 3).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3>Popular predictions</h3>
              <div>
                {getPredictions().map((pred, index) => (
                  <div key={index}>
                    <div>{pred.score}</div>
                    <div>{pred.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>

            {[
              "First team to score",
              "First player to score",
              "Play 2x booster",
            ].map((text, index) => (
              <div key={index}>
                <span>{text}</span>
                <PlusCircle size={20} />
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default MatchList;
