import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

export const matchesService = {
  getMatches: async () => {
    try {
      const response = await api.get("/matches/");
      return response.data;
    } catch (error) {
      console.error("Error fetching matches:", error);
      throw error;
    }
  },
  getMatch: async (matchId) => {
    try {
      const response = await api.get(`/matches/${matchId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching match: ${matchId}`, error);
      throw error;
    }
  },
};

export const predictionsService = {
  getPredictions: async () => {
    try {
      const response = await api.get("/predictions");
      return response.data;
    } catch (error) {
      console.error("Error fetching predictions:", error);
      throw error;
    }
  },
  getPrediction: async (predictionId) => {
    try {
      const response = await api.get(`/prediction/${predictionId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching prediction: ${predictionId}`, error);
      throw error;
    }
  },
};

export const leaderboardService = {
  getLeaderboard: async () => {
    try {
      const response = await api.get("/leaderboard");
      return response.data;
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      throw error;
    }
  },
};
