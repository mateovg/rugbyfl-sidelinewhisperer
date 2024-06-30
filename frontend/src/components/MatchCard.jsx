import { Card } from "react-bootstrap";

const MatchCard = (match) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Match</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{match.date}</Card.Subtitle>
        <Card.Text>
          {match.homeTeam.name} vs {match.awayTeam.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MatchCard;
