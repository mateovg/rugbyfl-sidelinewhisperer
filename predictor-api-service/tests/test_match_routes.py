def test_get_matches(client):
    response = client.get('/api/matches/')
    assert response.status_code == 200


def test_get_match(client):
    response = client.get('/api/matches/1')
    assert response.status_code == 200
    data = response.get_json()
    assert 'id' in data
    assert data['id'] == 1


def test_get_match_not_found(client):
    response = client.get('/api/matches/10020')
    assert response.status_code == 404
