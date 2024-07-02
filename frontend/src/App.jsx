import { useState } from "react";
import useApi from "./hooks/useApi";
import { matchesService } from "./services/api";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  const { matches, loading, error } = useApi(matchesService.getMatches);
  console.table({ matches, loading, error });

  return (
    <>
      <AppNavbar></AppNavbar>
      <Container>
        {/* Main content goes here */}
        <h1>Welcome to the Page!</h1>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
