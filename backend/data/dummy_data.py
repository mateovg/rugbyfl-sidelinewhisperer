from datetime import datetime, timedelta
from models.match import Match
from models.user import User
from models.prediction import Prediction
from models.team import Team
import random
from faker import Faker

fake = Faker()

NUMBER_OF_TEAMS = 20
NUMBER_OF_MATCHE_WEEKS = 14
NUMBER_OF_USERS = 100

# Generate more realistic team data
teams = []
for i in range(1, NUMBER_OF_TEAMS + 1):
    teams.append(Team(
        id=i,
        name=fake.unique.city(),
        city=fake.unique.city(),
        founded=random.randint(1900, 2020)
    ))
    # Generate more realistic match data
matches = []
# matches every Sat for 14 weeks
start_date = datetime.now() - timedelta(days=7 * NUMBER_OF_MATCHE_WEEKS)
for i in range(1, NUMBER_OF_MATCHE_WEEKS + 1):
    for j in range(NUMBER_OF_TEAMS // 2):
        home_team = teams[j]
        away_team = teams[NUMBER_OF_TEAMS - j - 1]
        date = start_date + timedelta(days=(i - 1) * 7)
        matches.append(Match(
            id=len(matches) + 1,
            home_team=home_team,
            away_team=away_team,
            date=date,
            home_score=random.randint(0, 40),
            away_score=random.randint(0, 40)
        ))

# Create dummy users
# Generate more realistic user data
users = []
for i in range(1, NUMBER_OF_USERS + 1):  # Generate 100 users
    registration_date = datetime.now() - timedelta(days=random.randint(1, 365))
    users.append(User(
        id=i,
        username=fake.user_name(),
        email=fake.email(),
        registration_date=registration_date
    ))

# Create dummy predictions
predictions = []
for match in matches:
    # Random number of predictions per match
    num_predictions = random.randint(5, 20)
    for _ in range(num_predictions):
        user = random.choice(users)
        created_at = match.date - timedelta(days=random.randint(1, 7))
        updated_at = created_at + timedelta(hours=random.randint(0, 48))

        predictions.append(Prediction(
            id=len(predictions) + 1,
            user=user,
            match=match,
            home_score=random.randint(0, 40),
            away_score=random.randint(0, 40),
            created_at=created_at,
            updated_at=updated_at
        ))
