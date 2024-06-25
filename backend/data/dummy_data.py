from datetime import datetime, timedelta
from models.match import Match
from models.user import User
from models.prediction import Prediction
import random

teams = [
    (1, "Miami RFC"),
    (2, "Orlando RFC"),
    (3, "Jacksonville RFC"),
    (4, "Tampa Bay RFC"),
    (5, "Atlanta RFC"),
    (6, "Charlotte RFC"),
    (7, "Nashville RFC"),
    (8, "New Orleans RFC")
]

matches = []
for i in range(1, 8):
    matches.append(Match(
        id=i,
        home_team_id=i,
        away_team_id=i + 1,
        date=datetime.now() + timedelta(days=i),
        home_score=random.randint(0, 50),
        away_score=random.randint(0, 50)
    )
    )

# Create dummy users
users = [
    User(
        id=1,
        username="rugby_fan1",
        email="fan1@example.com",
        registration_date=datetime.now() - timedelta(days=30)
    ),
    User(
        id=2,
        username="predictor_pro",
        email="pro@example.com",
        registration_date=datetime.now() - timedelta(days=60)
    ),
    User(
        id=3,
        username="newbie",
        email="",
        registration_date=datetime.now() - timedelta(days=1)
    ),
    User(
        id=4,
        username="inactive_user",
        email="whatever@com.so",
        registration_date=datetime.now() - timedelta(days=90)
    )
    # Add more users...
]

# Create dummy predictions
predictions = []
for user in users:
    for match in matches:
        predictions.append(Prediction(
            id=len(predictions) + 1,
            user_id=user.id,
            match_id=match.id,
            home_score=random.randint(0, 50),
            away_score=random.randint(0, 50),
            created_at=datetime.now() - timedelta(days=1),
            updated_at=datetime.now() - timedelta(days=1)
        )
        )
