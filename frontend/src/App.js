import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, BarChart, Trophy } from "lucide-react";
import MatchList from "./components/MatchList/MatchList";
import Prediction from "./components/Prediction/Prediction";
import Leaderboard from "./components/Leaderboard/Leaderboard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Rugby Predictor</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/matches"
                    className="flex items-center hover:text-indigo-200 transition-colors duration-200">
                    <Home size={20} className="mr-2" />
                    Matches
                  </Link>
                </li>
                <li>
                  <Link
                    to="/predict"
                    className="flex items-center hover:text-indigo-200 transition-colors duration-200">
                    <BarChart size={20} className="mr-2" />
                    Predict
                  </Link>
                </li>
                <li>
                  <Link
                    to="/leaderboard"
                    className="flex items-center hover:text-indigo-200 transition-colors duration-200">
                    <Trophy size={20} className="mr-2" />
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/matches" element={<MatchList />} />
            <Route path="/predict" element={<Prediction />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Rugby Predictor. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
