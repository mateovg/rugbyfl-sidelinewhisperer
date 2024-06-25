Matches:
GET /api/matches (list all matches)
GET /api/matches/{id} (get details of a specific match)
POST /api/matches (create a new match, if needed)
PUT /api/matches/{id} (update match details)


Users:
POST /api/users (register a new user)
GET /api/users/{id} (get user profile)
PUT /api/users/{id} (update user profile)


Predictions:
POST /api/predictions (submit a new prediction)
GET /api/predictions/user/{userId} (get predictions for a specific user)
GET /api/predictions/match/{matchId} (get all predictions for a specific match)


Leaderboard:
GET /api/leaderboard (get overall leaderboard)
GET /api/leaderboard/weekly (get weekly leaderboard)

Admin:
GET /api/admin/users get all users
GET /api/stats/users/top-predictors (users with the highest prediction accuracy)
GET /api/stats/users/activity (user activity over time)
GET /api/stats/matches/popular (most predicted matches)

