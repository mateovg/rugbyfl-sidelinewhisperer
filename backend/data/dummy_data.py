from datetime import datetime, timedelta
from models.match import Match
from models.user import User
from models.prediction import Prediction
from models.team import Team
import random
from faker import Faker

fake = Faker()

# Generate more realistic team data
teams = [
    Team(1, "Miami Hurricanes", "Miami", 1967),
    Team(2, "Orlando Lions", "Orlando", 1972),
    Team(3, "Jacksonville Jaguars", "Jacksonville", 1985),
    Team(4, "Tampa Bay Titans", "Tampa", 1979),
    Team(5, "Atlanta Phoenixes", "Atlanta", 1968),
    Team(6, "Charlotte Eagles", "Charlotte", 1983),
    Team(7, "Nashville Outlaws", "Nashville", 1990),
    Team(8, "New Orleans Gators", "New Orleans", 1975),
    Team(9, "Savannah Sharks", "Savannah", 1988),
    Team(10, "Birmingham Bruisers", "Birmingham", 1981),
    Team(11, "Raleigh Rattlers", "Raleigh", 1976),
    Team(12, "Memphis Mavericks", "Memphis", 1987),
    Team(13, "Tallahassee Thunderbolts", "Tallahassee", 1993),
    Team(14, "Charleston Crusaders", "Charleston", 1980),
    Team(15, "Pensacola Pirates", "Pensacola", 1989),
    Team(16, "Baton Rouge Brawlers", "Baton Rouge", 1978)
]


# Generate more realistic match data
matches = []
start_date = datetime.now() - timedelta(days=60)
for i in range(1, 121):  # Generate 120 matches
    home_team = random.choice(teams)
    away_team = random.choice([team for team in teams if team != home_team])
    match_date = start_date + timedelta(days=i)
    home_score = random.randint(0, 40)
    away_score = random.randint(0, 40)

    matches.append(Match(
        id=i,
        home_team=home_team,
        away_team=away_team,
        date=match_date,
        home_score=home_score,
        away_score=away_score
    ))

# Create dummy users
# Generate more realistic user data
users = []
for i in range(1, 101):  # Generate 100 users
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
