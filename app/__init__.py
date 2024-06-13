from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

db = SQLAlchemy()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)

    # import blueprints
    from app.routes.home import home
    from app.routes.results import results
    from app.routes.predictions import predictions
    from app.routes.leaderboard import leaderboard

    # register blueprints
    app.register_blueprint(home)
    app.register_blueprint(results, url_prefix='/results')
    app.register_blueprint(predictions, url_prefix='/predictions')
    app.register_blueprint(leaderboard, url_prefix='/leaderboard')

    return app
