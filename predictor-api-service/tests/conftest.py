import pytest
from app import create_app

# py.test does not add the current direwctory
# in the PYTHONPATH itself, but here's a workout
# python -m pytest tests/
# works b/c Python adds the current directory in the
# PYTHONPATH for you


@pytest.fixture
def app():
    app = create_app('testing')
    return app


@pytest.fixture
def client(app):
    return app.test_client()
