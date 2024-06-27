from typing import List, Optional
from models.match import Match
from models.user import User
from models.prediction import Prediction
from data.dummy_data import matches, users, predictions


from datetime import datetime


class DataService:
    """
    Replacement for an actual database. This class is used to store and retrieve data
    in memory until we implement a database.
    """

    def __init__(self):
        self._matches = matches
        self._users = users
        self._predictions = predictions

    # Match methods
    def get_matches(self) -> List[Match]:
        return self._matches

    def get_match(self, match_id: int) -> Optional[Match]:
        for match in self._matches:
            if match.id == match_id:
                return match
        return None

    # User methods
    def get_users(self) -> List[User]:
        return self._users

    def get_user(self, user_id: int) -> Optional[User]:
        for user in self._users:
            if user.id == user_id:
                return user
        return None

    # Prediction methods
    def get_predictions(self) -> List[Prediction]:
        return self._predictions

    def get_predictions_for_user(self, user_id: int) -> List[Prediction]:
        return [p for p in self._predictions if p.user_id == user_id]

    def get_predictions_for_match(self, match_id: int) -> List[Prediction]:
        return [p for p in self._predictions if p.match_id == match_id]

    def create_prediction(self, user_id: int, match_id: int, home_score: int, away_score: int) -> Prediction:
        prediction = Prediction(
            id=0,
            user_id=user_id,
            match_id=match_id,
            home_score=home_score,
            away_score=away_score,
            created_at=datetime.now(),
            updated_at=datetime.now(),
        )
        prediction.id = max([p.id for p in self._predictions], default=0) + 1
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

    def get_leaderboard(self):
        """
        Returns a list of dictionaries, each containing user ID, username, and points.
        """
        leaderboard = []
        users = self.get_users()
        for user in users:
            try:
                predictions = self.get_predictions_for_user(user.id)
                points = sum(p.get_points(self.get_match(p.match_id))
                             for p in predictions)
                leaderboard.append({
                    'id': user.id,
                    'username': user.username,  # Assuming user object has a username attribute
                    'points': points
                })
            except Exception as e:
                print(f"Error calculating points for user {user.id}: {str(e)}")
                # leaderboard.append({'id': user.id, 'username': user.username, 'points': 0})

        # Sort the leaderboard by points in descending order
        leaderboard.sort(key=lambda x: x['points'], reverse=True)
        return leaderboard
