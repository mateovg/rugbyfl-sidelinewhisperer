from flask import Blueprint, render_template

results = Blueprint('results', __name__)


@results.route('/results', methods=['GET'])
def show_results():
    return render_template('results.html')

