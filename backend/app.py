from flask import Flask, jsonify
from routes.match_routes import match_bp
from routes.user_routes import user_bp
from routes.prediction_routes import prediction_bp
from routes.leaderboard_routes import leaderboard_bp

app = Flask(__name__)

# Register the blueprints
app.register_blueprint(match_bp, url_prefix='/api/matches')
app.register_blueprint(user_bp, url_prefix='/api/users')
app.register_blueprint(prediction_bp, url_prefix='/api/predictions')
app.register_blueprint(leaderboard_bp, url_prefix='/api/leaderboard')

# Error handlers


@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404


@app.errorhandler(400)
def bad_request(error):
    return jsonify({"error": "Bad request"}), 400

# home page


@app.route('/', methods=['GET'])
def index():
    return jsonify({"message": "Welcome to the Soccer API"})


if __name__ == '__main__':
    app.run(debug=True)
