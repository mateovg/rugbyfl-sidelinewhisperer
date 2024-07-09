import { useEffect, useState } from "react";
import MatchCard from "./MatchCard";
import { getMatches } from "../services/api";
import { Match } from "../types";
import "./MatchCardGrid.css";

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
    // render a grid of MatchCard components, with the number of columns determined by the screen size
    // add padding between the columns
    <div className="matchgrid">
      {matches.map((match) => (
        <div className="col" key={match.id}>
          <MatchCard match={match} />
        </div>
      ))}
    </div>
  );
};

export default MatchCardGrid;
