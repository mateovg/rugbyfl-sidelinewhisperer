from flask import Blueprint, jsonify, request
from services import data_service

user_bp = Blueprint('user', __name__)


@user_bp.route('/<int:user_id>', methods=['GET'])
def get_user_predictions_by_id(user_id):
    predictions = data_service.get_predictions_for_user(user_id)
    return jsonify([prediction.__dict__ for prediction in predictions])
