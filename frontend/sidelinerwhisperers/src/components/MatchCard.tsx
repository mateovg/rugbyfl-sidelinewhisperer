import React, { useState } from "react";
import "./MatchCard.css";
import { Row, Col, Container } from "react-bootstrap";
import { Match, Team } from "../types";

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const { homeTeam, awayTeam, date, homeScore, awayScore } = match;

  // Ensure we have default values if any of these are undefined
  const safeHomeTeam: Team = homeTeam || { name: "Home Team" };
  const safeAwayTeam: Team = awayTeam || { name: "Away Team" };
  const safeDate = date ? new Date(date) : new Date();
  const safeHomeScore = homeScore ?? 0;
  const safeAwayScore = awayScore ?? 0;

  const [predictedHomeScore, setPredictedHomeScore] = useState(safeHomeScore);
  const [predictedAwayScore, setPredictedAwayScore] = useState(safeAwayScore);

  const handlePrediction = (team: "home" | "away", points: number) => {
    if (team === "home") {
      setPredictedHomeScore((prev) => prev + points);
    } else {
      setPredictedAwayScore((prev) => prev + points);
    }
  };

  const handleScoreChange = (team: "home" | "away", value: string) => {
    const numValue = Number(value);
    if (isNaN(numValue)) return;

    if (team === "home") {
      setPredictedHomeScore(numValue);
    } else {
      setPredictedAwayScore(numValue);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="date">{safeDate.toDateString()}</div>
        </Col>
      </Row>
      <Row>
        <Col>{safeHomeTeam.name}</Col>
        <Col>
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
        </Col>
        <Col>{safeAwayTeam.name}</Col>
      </Row>
      <Row>
        <Col>
          <div className="score home-score">
            <input
              type="number"
              value={predictedHomeScore}
              onChange={(e) => handleScoreChange("home", e.target.value)}
            />
          </div>
        </Col>
        <Col> </Col>
        <Col>
          <div className="score away-score">
            <input
              type="number"
              value={predictedAwayScore}
              onChange={(e) => handleScoreChange("away", e.target.value)}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MatchCard;
