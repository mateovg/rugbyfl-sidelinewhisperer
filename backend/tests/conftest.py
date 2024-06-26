import pytest
from backend.app import create_app


@pytest.fixture
def app():
    app = create_app('testing')
    return app


@pytest.fixture
def client(app):
    return app.test_client()
