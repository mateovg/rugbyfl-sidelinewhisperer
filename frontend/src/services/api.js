import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api";

export const getMatches = async () => {
  const apiEndpoint = `${API_URL}/matches`;
  try {
    console.log("Fetching matches from: ", apiEndpoint);
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching matches: ", error);
    throw error;
  }
};

// export const getMatch = (matchId) => axios.get(`${API_URL}/match/{${matchId}}`);
export const getPredictions = async () => {
  const apiEndpoint = `${API_URL}/predictions`;
  try {
    console.log("Fetching predictions from: ", apiEndpoint);
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching predictions: ", error);
    throw error;
  }
};
export const getLeaderboard = async () => {
  const apiEndpoint = `${API_URL}/leaderboard`;
  try {
    console.log("Fetching leaderboard from: ", apiEndpoint);
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching leaderboard: ", error);
    throw error;
  }
};
