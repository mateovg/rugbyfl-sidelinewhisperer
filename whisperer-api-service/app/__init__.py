from flask import Flask

app = Flask(__name__)

# Imported from the bottom to avoid circular imports
from app import routes