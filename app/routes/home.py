from Flask import Blueprint, render_template

home = Blueprint('home', __name__)


@home.route('/')
def home():
    return render_template('home.html')
