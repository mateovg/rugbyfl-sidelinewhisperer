from typing import List, Optional


@dataclass
class User:
    id: int
    username: str
    email: str
    password: str
    created_at: datetime
    updated_at: datetime
    
@dataclass
class Team:
    id: int
    name: str
    logo: str

    
@dataclass
class Match:
    id: int
    home_team: Team
    away_team: Team
    
    
@dataclass
class Prediction:
    id: int
    match: Match
    user: User
    home_team_score: int
    away_team_score: int
    created_at: datetime
    updated_at: datetime