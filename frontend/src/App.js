import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MatchList from "./components/MatchList/MatchList";
import Prediction from "./components/Prediction/Prediction";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Rugby Predictor</h1>
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
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<MatchList />} />
            <Route path="/predict" element={<Prediction />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
