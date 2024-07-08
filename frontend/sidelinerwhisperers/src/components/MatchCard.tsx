import React, { useState } from "react";
import "./MatchCard.css";

const MatchCard = ({ match }) => {
  const { homeTeam, awayTeam, date, homeScore, awayScore } = match;
  const matchDate = new Date(date);

  const [predictedHomeScore, setPredictedHomeScore] = useState(homeScore);
  const [predictedAwayScore, setPredictedAwayScore] = useState(awayScore);

  const handlePrediction = (team, points) => {
    if (team === "home") {
      setPredictedHomeScore(predictedHomeScore + points);
    } else {
      setPredictedAwayScore(predictedAwayScore + points);
    }
  };

  const handleScoreChange = (team, value) => {
    if (team === "home") {
      setPredictedHomeScore(Number(value));
    } else {
      setPredictedAwayScore(Number(value));
    }
  };

  return (
    <div className="matchcard">
      <div className="date">{matchDate.toDateString()}</div>
      <div className="grid-container">
        <div className="team home-team">{homeTeam.name}</div>
        <div className="prediction-buttons home-buttons">
          <button onClick={() => handlePrediction("home", 3)}>+3</button>
          <button onClick={() => handlePrediction("home", 5)}>+5</button>
          <button onClick={() => handlePrediction("home", 7)}>+7</button>
        </div>
        <div className="prediction-buttons away-buttons">
          <button onClick={() => handlePrediction("away", 3)}>+3</button>
          <button onClick={() => handlePrediction("away", 5)}>+5</button>
          <button onClick={() => handlePrediction("away", 7)}>+7</button>
        </div>
        <div className="team away-team">{awayTeam.name}</div>
        <div className="score home-score">
          <input
            type="number"
            value={predictedHomeScore}
            onChange={(e) => handleScoreChange("home", e.target.value)}
          />
        </div>
        <div className="score away-score">
          <input
            type="number"
            value={predictedAwayScore}
            onChange={(e) => handleScoreChange("away", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
