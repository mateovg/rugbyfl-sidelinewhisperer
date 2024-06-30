import MatchCard from "./MatchCard";

const MatchGrid = ({ matches }) => {
  return (
    <div className="match-grid">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MatchGrid;
