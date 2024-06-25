import React, { useState } from "react";

const Predictor = () => {
  const [prediction, setPrediction] = useState(null);

  const makePrediction = () => {
    // This is a placeholder. In the future, this will call your ML model
    const randomPrediction = Math.random() < 0.5 ? "Home Team" : "Away Team";
    setPrediction(randomPrediction);
  };

  return (
    <div>
      <h2>Match Predictor</h2>
      <button onClick={makePrediction}>Predict Next Match</button>
      {prediction && <p>Predicted Winner: {prediction}</p>}
    </div>
  );
};

export default Predictor;
