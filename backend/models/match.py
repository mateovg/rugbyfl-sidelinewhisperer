from dataclasses import dataclass


@dataclass
class Match:
    id: int
    home_team: int
    away_team: int
    date: str
    home_score: int
    away_score: int
