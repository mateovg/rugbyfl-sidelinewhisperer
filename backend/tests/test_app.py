import pytest
import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client


def test_hello_route(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b"Welcome to the Florida Rugby Predictor!" in response.data
