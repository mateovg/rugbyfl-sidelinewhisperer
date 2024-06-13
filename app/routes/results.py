from flask import Blueprint, render_template

results = Blueprint('results', __name__)


@results.route('/results', methods=['GET', 'POST'])
def results():
    # for each match in the database, calculate the result and store it in the database
    # Logic to manage and display results

    return render_template('results.html')
