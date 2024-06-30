import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useApi from "./hooks/useApi";
import { matchesService } from "./services/api";

function App() {
  const [count, setCount] = useState(0);
  const { data, loading, error } = useApi(matchesService.getMatches);

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </>
  );
}

export default App;
