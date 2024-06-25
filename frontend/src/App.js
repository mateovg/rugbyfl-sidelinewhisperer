import React from "react";
import MatchList from "./components/MatchList";
import Predictor from "./components/Predictor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Florida Rugby Predictor</h1>
      <MatchList />
      <Predictor />
    </div>
  );
}

export default App;
