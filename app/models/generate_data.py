"""
Generates a season's worth of data for the databases
"""

from datetime import datetime, timedelta
from app.models.init_db import User, Match, Prediction, create_connection
from random import gauss
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError

USERS = [1, 2, 3, 4, 5]
SEASON = 2023
TEAMS = [
    "Miami Tridents",
    "Miami Rugby FC",
    "Tampe Krewe",
    "Orlando Rugby",
    "Jacksonville Axemen",
    "Boca Raton Buccaneers",
    "Palm Beach Panthers",
    "Southwest Florida Hammerheads",
    "St. Petersburg Pelicans",
    "Florida Keys Sharks"
]


def generate_match_date(start_date, week_offset):
    return start_date + timedelta(weeks=week_offset)


start_date = datetime.strptime(f"{SEASON}-01-01", "%Y-%m-%d")


def generate_score():
    return int(max(gauss(28, 7), 0))


def generate_matches(teams):
    matches = []
    match_id = 1
    number_teams = len(teams)
    for i in range(number_teams - 1):
        for j in range(number_teams // 2):
            # generate scores randomly - between 0 and 88 (inclusive)
            # distrubted normally skewed towards lower scores
            match = {
                "id": match_id,
                "team1": teams[j],
                "team2": teams[number_teams - 1 - j],
                "score_team1": generate_score(),
                "score_team2": generate_score(),
                "match_date": generate_match_date(start_date, i),
                "match_location": teams[j]
            }
            match_id += 1
            matches.append(match)
    return matches


MATCHES = generate_matches(TEAMS)


def generate_predictions(users, matches):
    predictions = []
    for user in users:
        for match in matches:
            preditcion = {
                "user_id": user,
                "match_id": match["id"],
                "predicted_score_team1": generate_score(),
                "predicted_score_team2": generate_score(),
            }
            predictions.append(preditcion)
    return predictions


PREDICTIONS = generate_predictions(USERS, MATCHES)


def main():
    database_url = "sqlite:///database.db"
    engine = create_connection(database_url)

    # Create a session
    Session = sessionmaker(bind=engine)
    session = Session()

    try:
        # Example of adding a new user
        session.add_all([User(username="user1", password="password1"),
                         User(username="user2", password="password2"),
                         User(username="user3", password="password3"),
                         User(username="user4", password="password4"),
                         User(username="user5", password="password5")])
        session.commit()

        # Example of adding a new match
        session.add_all([Match(team1=match["team1"],
                               team2=match["team2"],
                               score_team1=match["score_team1"],
                               score_team2=match["score_team2"],
                               match_date=match["match_date"],
                               match_location=match["match_location"])
                         for match in MATCHES])
        session.commit()

        # Example of adding a new prediction
        session.add_all([Prediction(user_id=prediction["user_id"],
                                    match_id=prediction["match_id"],
                                    predicted_score_team1=prediction["predicted_score_team1"],
                                    predicted_score_team2=prediction["predicted_score_team2"])
                         for prediction in PREDICTIONS])
        session.commit()

    except SQLAlchemyError as e:
        print(e)
        session.rollback()
    finally:
        print("Data generated successfully")
        session.close()


if __name__ == "__main__":
    main()
