import { useEffect, useState } from "react";
import MatchCard from "./MatchCard";
import { getMatches } from "../services/api";

const MatchCardGrid = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await getMatches();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MatchCardGrid;
