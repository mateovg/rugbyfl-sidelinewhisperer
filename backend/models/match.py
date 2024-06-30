from dataclasses import dataclass
from datetime import datetime
from typing import Optional
from models.team import Team


@dataclass
class Match:
    id: int
    homeTeam: Team
    awayTeam: Team
    date: datetime
    homeScore: Optional[int] = None
    awayScore: Optional[int] = None

    def __str__(self) -> str:
        return f"{self.homeTeam_id} vs {self.awayTeam_id} on {self.date}"

    def get_winner(self) -> Optional[int]:
        """
        Returns the difference between home and away scores.
        """
        if not self.has_started():
            return None
        return self.homeScore - self.awayScore

    def is_draw(self) -> bool:
        """
        Returns True if the match is a draw.
        """
        return self.homeScore == self.awayScore

    def has_started(self) -> bool:
        """
        If the current time is after the match date, the match has started.
        """
        # TODO: Implement this
        # return datetime.now() > self.date
        return True

    def can_accept_predictions(self) -> bool:
        """
        Matches can accept predictions if they haven't started yet.
        """
        return not self.has_started()
