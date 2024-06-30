import React from "react";
import { Container } from "react-bootstrap";

// Import pages
import Dashboard from "./pages/Dashboard/Dashboard";
// import FutureMatches from "./pages/FutureMatches";
// import PastMatches from "./pages/PastMatches";
// import Leaderboard from "./pages/Leaderboard";
// import UserProfile from "./pages/UserProfile";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container>
          <Routes>
            <Route exact path="/" element={Dashboard} />
            {/* <Route path="/future-matches" component={FutureMatches} /> */}
            {/* <Route path="/past-matches" component={PastMatches} /> */}
            {/* <Route path="/leaderboard" component={Leaderboard} /> */}
            {/* <Route path="/profile" component={UserProfile} /> */}
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/register" component={Register} /> */}
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
