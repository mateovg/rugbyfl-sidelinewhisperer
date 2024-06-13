from flask import Blueprint, render_template

leaderboard = Blueprint('leaderboard', __name__)


@leaderboard.route('/leaderboard')
def leaderboard():
    return render_template('leaderboard.html')
