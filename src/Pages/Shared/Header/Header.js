import React from "react";
import logo from "../../../logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Button, Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
    navigate("/login");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg=""
      variant=""
      className="py-4 shadow"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Gdemy logo"
          />
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/">Gdemy</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Faq.</Nav.Link>
          </Nav>
          <Nav className="al">
            <Nav.Link href="#username">
              {user?.uid ? (
                <>
                  <Button onClick={handleLogOut} variant="dark">
                    Log Out
                  </Button>
                  <span>{user?.displayName}</span>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">SignUp</Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#userimage">
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
            <Nav>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="dark"
                />
                <label className="form-check-label" for="dark">
                  Dark Mode
                </label>
              </div>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
