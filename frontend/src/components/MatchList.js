import React, { useState, useEffect } from "react";

const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/matches")
      .then((response) => response.json())
      .then((data) => setMatches(data));
  }, []);

  return (
    <div>
      <h2>Upcoming Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.home_team} vs {match.away_team} - {match.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
