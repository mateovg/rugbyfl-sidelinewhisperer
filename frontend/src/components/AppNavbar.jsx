import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="../assets/react.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Brand Link
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/matches">Matches</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
