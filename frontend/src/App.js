import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MatchList from "./components/MatchList";
import Prediction from "./components/Prediction";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Matches</Link>
            </li>
            <li>
              <Link to="/predict">Predict</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MatchList />} />
          <Route path="/predict" element={<Prediction />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
