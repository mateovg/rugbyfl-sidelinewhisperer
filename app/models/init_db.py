from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.exc import SQLAlchemyError

Base = declarative_base()


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    password = Column(String, nullable=False)


class Match(Base):
    __tablename__ = 'matches'
    id = Column(Integer, primary_key=True)
    team1 = Column(String, nullable=False)
    team2 = Column(String, nullable=False)
    score_team1 = Column(Integer, nullable=False)
    score_team2 = Column(Integer, nullable=False)
    match_date = Column(DateTime, nullable=False)
    match_location = Column(String, nullable=False)


class Prediction(Base):
    __tablename__ = 'predictions'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    match_id = Column(Integer, ForeignKey('matches.id'), nullable=False)
    predicted_score_team1 = Column(Integer, nullable=False)
    predicted_score_team2 = Column(Integer, nullable=False)
    user = relationship("User", back_populates="predictions")
    match = relationship("Match", back_populates="predictions")


User.predictions = relationship(
    "Prediction", order_by=Prediction.id, back_populates="user")
Match.predictions = relationship(
    "Prediction", order_by=Prediction.id, back_populates="match")


def create_connection(database_url):
    """ Create a database connection to the SQLite database specified by the db_file """
    engine = create_engine(database_url)
    Base.metadata.create_all(engine)
    return engine


def main():
    database_url = "sqlite:///database.db"
    engine = create_connection(database_url)

    # Create a session
    Session = sessionmaker(bind=engine)
    session = Session()

    try:
        # Example of adding a new user
        new_user = User(username='JohnDoe', password='Password123')
        session.add(new_user)
        session.commit()
    except SQLAlchemyError as e:
        print(e)
        session.rollback()


if __name__ == '__main__':
    main()
