from flask import Blueprint, jsonify, request
from services import data_service


leaderboard_bp = Blueprint('leaderboard', __name__)


@leaderboard_bp.route('/', methods=['GET'])
def get_leaderboard():
    print("get_leaderboard")
    user_points = data_service.get_leaderboard()
    print(user_points)
    return jsonify(user_points)
