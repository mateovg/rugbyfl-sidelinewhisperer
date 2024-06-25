from dataclasses import dataclass
from datetime import datetime
from models.match import Match


@dataclass
class Prediction:
    id: int
    user_id: int
    match_id: int
    home_score: int
    away_score: int
    created_at: datetime
    updated_at: datetime

    # Passing the match object instead of the match_id
    def get_points(self, match: Match) -> int:
        """
        Points are calculated based on the difference between the predicted
        score and the actual score.
        points = 100 - |predicted - actual| 
        """
        # difference between result and actual
        result = match.get_winner()
        predicted = self.home_score - self.away_score
        if result is None:
            return 0

        points = 100
        diff = abs(result - predicted)

        return points - diff

    def can_be_modified(self) -> bool:
        """
        
        """
        return datetime.now() < self.match.date
