import React, { Fragment } from "react";

interface Team {
  id: number;
  name: string;
  city: string;
  founded: number;
}

interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  date: string; // We'll use a string for now, but you might want to use a Date object
  homeScore: number | null;
  awayScore: number | null;
}

export interface MatchCardProps {
  match: Match;
}

const MatchCard = ({ match }) => {
  console.log(match);

  const { homeTeam, awayTeam, date, homeScore, awayScore } = match;
  const matchDate = new Date(date);

  return (
    <div>
      <h2>{homeTeam} vs {awayTeam}</h2>
      <p>Data: {date}</p>
    </div>
  )
};

export default MatchCard;
