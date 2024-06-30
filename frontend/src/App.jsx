import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useApi from "./hooks/useApi";
import { matchesService } from "./services/api";
import MatchGrid from "./components/MatchGrid";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  const { matches, loading, error } = useApi(matchesService.getMatches);
  console.table({ matches, loading, error });

  return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
