import Card from "react-bootstrap/Card";

const MatchCard = ({ match }) => {
  const { homeTeam, awayTeam, date, homeScore, awayScore } = match;
  const matchDate = new Date(date);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {homeTeam.name} vs {awayTeam.name}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {matchDate.toDateString()}
        </Card.Subtitle>
        <Card.Text>
          {homeScore} - {awayScore}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MatchCard;
