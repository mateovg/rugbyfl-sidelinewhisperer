import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const MatchCard = ({ match, onSubmit, formatTime, formatDay }) => {
  const [homeScore, setHomeScore] = React.useState(0);
  const [awayScore, setAwayScore] = React.useState(0);

  const addPoints = (team, points) => {
    if (team === "home") {
      setHomeScore((prevScore) => prevScore + points);
    } else {
      setAwayScore((prevScore) => prevScore + points);
    }
  };

  const handleSubmit = () => {
    onSubmit({ ...match, homeScore, awayScore });
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          {formatTime(match.date)} - {formatDay(match.date)}
        </Card.Title>
        <Card.Text>
          {match.homeTeam.name} vs {match.awayTeam.name}
        </Card.Text>
        <div className="d-flex justify-content-between mb-2">
          <div>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => addPoints("home", 3)}>
              +3
            </Button>{" "}
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => addPoints("home", 5)}>
              +5
            </Button>{" "}
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => addPoints("home", 7)}>
              +7
            </Button>
          </div>
          <div>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => addPoints("away", 3)}>
              +3
            </Button>{" "}
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => addPoints("away", 5)}>
              +5
            </Button>{" "}
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => addPoints("away", 7)}>
              +7
            </Button>
          </div>
        </div>
        <div className="text-center mb-2">
          Score: {homeScore} - {awayScore}
        </div>
        <Button variant="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Card.Body>
    </Card>
  );
};

const MatchPredictionGrid = ({ matches, onSubmit }) => {
  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDay = (dateString) => {
    return new Date(dateString).toLocaleDateString([], { weekday: "short" });
  };

  return (
    <Container>
      <Row>
        {matches.map((match) => (
          <Col key={match.id} xs={12} sm={6} md={4} lg={3}>
            <MatchCard
              match={match}
              onSubmit={onSubmit}
              formatTime={formatTime}
              formatDay={formatDay}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MatchPredictionGrid;
