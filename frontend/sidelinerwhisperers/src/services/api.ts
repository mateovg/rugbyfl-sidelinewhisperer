import axios from "axios";
import { API_SERVER } from "../constants";

export const getMatches = async () => {
  try {
    const response = await axios.get(`${API_SERVER}/matches`);
    return response.data;
  } catch (error) {
    console.error("Error fetching matches:", error);
    throw error;
  }
};
