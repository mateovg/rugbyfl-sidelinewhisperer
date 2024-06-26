import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getMatches = () => axios.get(`${API_URL}/matches`);
export const getPredictions = (userId) =>
  axios.get(`${API_URL}/users/${userId}/predictions`);
export const getLeaderboard = () => axios.get(`${API_URL}/leaderboard`);
