def test_get_leaderboard(client):
    response = client.get('/api/leaderboard/')
    assert response.status_code == 200
    data = response.get_json()
    assert len(data) != 0
    pass

