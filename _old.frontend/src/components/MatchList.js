import React, { useState, useEffect } from "react";
import { getMatches } from "../services/api";
import MatchPredictionGrid from "./MatchPredictionGrid";

const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        console.log("Fetching matches...");
        const data = await getMatches();
        console.table(data);
        setMatches(data);
      } catch (err) {
        console.error("Error fetching matches:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMatches();
  }, []);

  const handleSubmit = (prediction) => {
    console.log("Prediction submitted", prediction);
    // TODO: Implement this
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <MatchPredictionGrid matches={matches} onSubmit={handleSubmit} />
    </div>
  );
};

export default MatchList;
