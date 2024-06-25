from flask import Flask, jsonify, request
from data_service import DataService

app = Flask(__name__)
data_service = DataService()

# Basic error handling


@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404


@app.errorhandler(400)
def bad_request(error):
    return jsonify({"error": "Bad request"}), 400

# Sample routes


@app.route('/api/matches', methods=['GET'])
def get_matches():
    matches = data_service.get_all_matches()
    return jsonify([match.__dict__ for match in matches])


@app.route('/api/users/<int:user_id>/predictions', methods=['GET'])
def get_user_predictions(user_id):
    predictions = data_service.get_predictions_for_user(user_id)
    return jsonify([prediction.__dict__ for prediction in predictions])


@app.route('/api/matches/<int:match_id>', methods=['POST'])
def get_match(match_id):
    match = data_service.get_match(match_id)
    if not match:
        return jsonify({"error": "Match not found"}), 404
    return jsonify(match.__dict__)


if __name__ == '__main__':
    app.run(debug=True)
