from flask import Blueprint, jsonify, request
from services import data_service

match_bp = Blueprint('match', __name__)


@match_bp.route('/', methods=['GET'])
def get_matches():
    matches = data_service.get_matches()
    print(f"Sent matches: {len(matches)}")
    return jsonify([match.__dict__ for match in matches])


@match_bp.route('/<int:match_id>', methods=['GET'])
def get_match(match_id):
    match = data_service.get_match(match_id)
    if not match:
        return jsonify({"error": "Match not found"}), 404
    return jsonify(match.__dict__)

# Add other match-related routes here
