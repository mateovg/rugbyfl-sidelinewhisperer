from dataclasses import dataclass
from datetime import datetime
from typing import Optional


@dataclass
class Match:
    id: int
    home_team_id: int
    away_team_id: int
    date: datetime
    home_score: Optional[int] = None
    away_score: Optional[int] = None

    def __str__(self) -> str:
        return f"{self.home_team_id} vs {self.away_team_id} on {self.date}"

    def get_winner(self) -> Optional[int]:
        """
        Returns the difference between home and away scores.
        """
        if not self.has_started():
            return None
        return self.home_score - self.away_score

    def is_draw(self) -> bool:
        return self.home_score == self.away_score

    def has_started(self) -> bool:
        return datetime.now() > self.date

    def can_accept_predictions(self) -> bool:
        return not self.has_started()
