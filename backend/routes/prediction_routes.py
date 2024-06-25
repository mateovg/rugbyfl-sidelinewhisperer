from flask import Blueprint, jsonify, request
from services import data_service


prediction_bp = Blueprint('prediction', __name__)


# show all predictions
@prediction_bp.route('/', methods=['GET'])
def get_predictions():
    predictions = data_service.get_predictions()
    return jsonify([prediction.__dict__ for prediction in predictions])


@prediction_bp.route('/api/predictions/create', methods=['POST'])
def create_prediction():
    data = request.get_json()
    user_id = data.get('user_id')
    match_id = data.get('match_id')
    home_score = data.get('home_score')
    away_score = data.get('away_score')
    if not user_id or not match_id or not home_score or not away_score:
        return jsonify({"error": "Bad request"}), 400
    prediction = data_service.create_prediction(
        user_id, match_id, home_score, away_score)
    return jsonify(prediction.__dict__)
