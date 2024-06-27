import React, { useState, useEffect } from "react";
import { getMatches } from "../services/api";

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
        console.error("Error fetching macthes:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMatches();
  }, []);

  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    try {
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (error) {
      console.error("Error formatting date: ", error);
      return dateString;
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Upcoming Matches</h2>
      {matches.length === 0 ? (
        <p>No upcoming matches</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {matches.map((match) => (
            <li
              key={match.id}
              style={{
                marginBottom: "20px",
                border: "1px solid #ddd",
                padding: "10px",
              }}>
              <div>Date: {formatDate(match.date)}</div>
              <div>
                {match.home_team.name}: {match.home_score} vs{" "}
                {match.away_team.name}: {match.away_score}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MatchList;
