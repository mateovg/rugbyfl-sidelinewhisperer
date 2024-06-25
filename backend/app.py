from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows your frontend to make requests to your backend


@app.route('/')
def hello():
    return jsonify({"message": "Welcome to the Florida Rugby Predictor!"})


@app.route('/api/matches', methods=['GET'])
def get_matches():
    # This is a placeholder. In the future, you'll fetch this from a database
    matches = [
        {"id": 1, "home_team": "Miami RFC",
            "away_team": "Orlando RFC", "date": "2023-07-01"},
        {"id": 2, "home_team": "Jacksonville RFC",
            "away_team": "Tampa Bay RFC", "date": "2023-07-08"}
    ]
    return jsonify(matches)


if __name__ == '__main__':
    app.run(debug=True)
