from flask import Flask, jsonify
from backend.routes.match_routes import match_bp
from backend.routes.user_routes import user_bp
from backend.routes.prediction_routes import prediction_bp
from backend.routes.leaderboard_routes import leaderboard_bp
from backend.config import TestingConfig, Config


def create_app(config_name='default'):
    app = Flask(__name__)

    if config_name == 'testing':
        app.config.from_object(TestingConfig)
    else:
        app.config.from_object(Config)

    # Register the blueprints
    app.register_blueprint(match_bp, url_prefix='/api/matches')
    app.register_blueprint(user_bp, url_prefix='/api/users')
    app.register_blueprint(prediction_bp, url_prefix='/api/predictions')
    app.register_blueprint(leaderboard_bp, url_prefix='/api/leaderboard')

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({"error": "Not found"}), 404

    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({"error": "Bad request"}), 400

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
