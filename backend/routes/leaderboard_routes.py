from flask import Blueprint, jsonify, request
from services import data_service


leaderboard_bp = Blueprint('leaderboard', __name__)


@leaderboard_bp.route('/', methods=['GET'])
def get_leaderboard():
    """
    Returns list of objects with user_id, username, and points
    """
    try:
        leaderboard = data_service.get_leaderboard()
        return jsonify(leaderboard), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
