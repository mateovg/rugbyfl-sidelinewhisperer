from typing import List, Optional
from models.match import Match
from models.user import User
from models.prediction import Prediction
from models.team import Team
from data.dummy_data import matches, users, predictions, teams


from datetime import datetime


class DataService:
    """
    Replacement for an actual database. This class is used to store and retrieve data
    in memory until we implement a database.
    """

    def __init__(self):
        self._matches: List[Match] = matches
        self._users: List[User] = users
        self._predictions: List[Prediction] = predictions
        self._teams: List[Team] = teams
        self.update_prediction_points()

    # Match methods
    def get_matches(self) -> List[Match]:
        return self._matches

    def get_match(self, match_id: int) -> Optional[Match]:
        return next((m for m in self._matches if m.id == match_id), None)

    # Team methods
    def get_team_name(self, team_id) -> str:
        team = next((t for t in self._teams if t.id == team_id), None)
        return team.name if team else "Unknown"

    # User methods
    def get_users(self) -> List[User]:
        return self._users

    def get_user(self, user_id: int) -> Optional[User]:
        return next((u for u in self._users if u.id == user_id), None)

    # Prediction methods
    def get_predictions(self) -> List[Prediction]:
        return self._predictions

    def get_prediction(self, prediction_id: int) -> Optional[Prediction]:
        return next((p for p in self._predictions if p.id == prediction_id), None)

    def get_predictions_for_user(self, user_id: int) -> List[Prediction]:
        return [p for p in self._predictions if p.user.id == user_id]

    def get_predictions_for_match(self, match_id: int) -> List[Prediction]:
        return [p for p in self._predictions if p.match.id == match_id]

    def create_prediction(self, user_id: int, match_id: int, home_score: int, away_score: int) -> Prediction:
        prediction = Prediction(
            id=max([p.id for p in self._predictions], default=0) + 1,
            user=self.get_user(user_id),
            match=self.get_match(match_id),
            home_score=home_score,
            away_score=away_score,
            created_at=datetime.now(),
            updated_at=datetime.now(),
        )
        self._predictions.append(prediction)
        return prediction

    def update_prediction(self, prediction_id: int, home_score: int, away_score: int) -> Optional[Prediction]:
        prediction = self.get_prediction(prediction_id)
        if not prediction:
            return None
        prediction.home_score = home_score
        prediction.away_score = away_score
        prediction.updated_at = datetime.now()
        return prediction

    # Leaderboard methods
    def get_leaderboard(self):
        """
        Returns a list of dictionaries, each containing user ID, username, and points.
        """
        leaderboard = []
        for user in self._users:
            try:
                predictions = self.get_predictions_for_user(user.id)
                points = sum(p.get_points() for p in predictions)
                leaderboard.append({
                    'user_id': user.id,
                    'user_name': user.username,  # Assuming user object has a username attribute
                    'points': points
                })
            except Exception as e:
                print(f"Error calculating points for user {user.id}: {str(e)}")
                # leaderboard.append({'id': user.id, 'username': user.username, 'points': 0})

        # Sort the leaderboard by points in descending order
        leaderboard.sort(key=lambda x: x['points'], reverse=True)
        return leaderboard

    # Helper methods
    def update_prediction_points(self) -> None:
        for prediction in self._predictions:
            prediction.points = prediction.get_points()
        return None
