import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../services/api";

const Leaderboard = () => {
  const [predictions, setLeaderboard] = useState([]);

  useEffect(() => {
    getLeaderboard().then((response) => setLeaderboard(response.data));
  }, []);

  return (
    <div>
      <h2>Current Predictions</h2>
      <ul>
        {predictions.map((prediction) => (
          <li key={prediction.id}>
            {prediction.user_id}: {prediction.home_score} vs{" "}
            {prediction.away_score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
