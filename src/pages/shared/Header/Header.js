import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/Logo/logo.jpg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      className="nav-container  "
      collapseOnSelect
      expand="lg"
      varient="light"
      bg="dark"
    >
      <Container>
        <Navbar.Brand>
          <img className="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link
              className="fw-bold  nav-link fs-5    "
              as={HashLink}
              to="/home#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="fw-bold fs-5  "
              as={HashLink}
              to="/home#services"
            >
              Services
            </Nav.Link>
            <Nav.Link className="fw-bold fs-5 " as={HashLink} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link className="fw-bold fs-5  " as={HashLink} to="/jointeam">
              JoinTeam
            </Nav.Link>
          </Nav>
          <Nav>
            {user.email && (
              <Nav.Link className="fw-bold fs-5 " as={Link} to="/register">
                Register
              </Nav.Link>
            )}

            {user?.email ? (
              <button
                className="logout-button-style fw-bold fs-5"
                onClick={logOut}
              >
                {" "}
                Log Out
              </button>
            ) : (
              <Nav.Link className="fw-bold fs-5  " as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              {user?.email && (
                <span>
                  Login in as: <a href="#login">{user?.displayName}</a>
                </span>
              )}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
