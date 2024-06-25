from flask import Blueprint, jsonify, request
from services.data_service import data_service

user_bp = Blueprint('user', __name__)


@user_bp.route('/api/users/<int:user_id>/predictions', methods=['GET'])
def get_user_predictions(user_id):
    predictions = data_service.get_predictions_for_user(user_id)
    return jsonify([prediction.__dict__ for prediction in predictions])
