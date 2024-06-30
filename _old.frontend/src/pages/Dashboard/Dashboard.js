import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import useApi from "../../hooks/useApi.js";
import { matchesService, leaderboardService } from "../../services/api.js";

const Dashboard = () => {
  const {
    data: matches,
    loading: matchesLoading,
    error: matchesError,
  } = useApi(matchesService.getMatches);
  const {
    data: leaderboard,
    loading: leaderboardLoading,
    error: leaderboardError,
  } = useApi(leaderboardService.getLeaderboard);

  if (matchesLoading || leaderboardLoading) return <div>Loading...</div>;
  if (matchesError || leaderboardError) return <div>Error loading data</div>;

  return (
    <Container>
      <h1>Dashboard</h1>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>Upcoming Matches</Card.Header>
            <Card.Body>
              {matches.slice(0, 5).map((match) => (
                <div key={match.id}>
                  {match.team1} vs {match.team2}
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>Top 5 Leaderboard</Card.Header>
            <Card.Body>
              {leaderboard.slice(0, 5).map((entry) => (
                <div key={entry.id}>
                  {entry.username}: {entry.score}
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
