import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../services/api";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        console.log("Fetching leaderboard...");
        const data = await getLeaderboard();
        console.log("Leaderboard data:", data);
        setLeaderboard(data);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (isLoading) return <div>Loading leaderboard...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Current Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p>No leaderboard data available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr key={user.id || index}>
                <td>{index + 1}</td>
                <td>{user.name || user.username || "Anonymous"}</td>
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
