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
      {predictions.length === 0 ? (
        <p>No prediction data available</p>
      ) : (
        <table className="prediction-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Home Score</th>
              <th>Away Score</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((prediction, index) => (
              <tr key={prediction.id}>
                <td>{prediction.user.username}</td>
                <td>{prediction.match.home_team.name}</td>
                <td>{prediction.match.away_team.name}</td>
                <td>{prediction.match.home_score}</td>
                <td>{prediction.match.away_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PredictionList;
