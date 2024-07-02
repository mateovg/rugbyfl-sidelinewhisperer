import { Container, Navbar, Nav } from "react-bootstrap";

function AppNavbar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/matches">Matches</Nav.Link>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
