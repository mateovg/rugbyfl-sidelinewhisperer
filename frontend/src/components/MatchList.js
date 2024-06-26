import React, { useState, useEffect } from "react";
import { getMatches } from "../services/api";

const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches().then((response) => setMatches(response.data));
  }, []);

  return (
    <div>
      <h2>Upcoming Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.home_team_id} vs {match.away_team_id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
