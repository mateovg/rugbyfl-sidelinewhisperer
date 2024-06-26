import React, { useEffect, useState } from "react";
import { getPredictions } from "../services/api";

const PredictionList = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    getPredictions().then((response) => setPredictions(response.data));
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

export default PredictionList;
