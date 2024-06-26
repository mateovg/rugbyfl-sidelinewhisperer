import React, { useEffect, useState } from "react";
import { getPredictions } from "../services/api";

const PredictionList = () => {
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        console.log("Fetching predictions...");
        const data = await getPredictions();
        console.log("Predictions data: ", data);
        setPredictions(data);
      } catch (error) {
        console.error("Error fetching predictions: ", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPredictions();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
