export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "leaderboard",
    title: "Leaderboard",
  },
];

export const API_SERVER = "http://127.0.0.1:5000/api";

export interface Team {
  id: number;
  name: string;
  city: string;
  founded: number;
}

export interface Match {
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
