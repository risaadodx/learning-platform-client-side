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
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Gdemy logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link className="text-decoration-none text-success fw-bold" to="/">
            Gdemy
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="text-decoration-none me-2" to="/courses">
              Courses
            </Link>
            <Link className="text-decoration-none me-2 " to="/blog">
              Blog
            </Link>
            <Link className="text-decoration-none me-2" to="/faq">
              Faq.
            </Link>
          </Nav>
          <Nav className="al">
            <Nav.Link href="#username">
              {user?.uid ? (
                <>
                  <Button onClick={handleLogOut} variant="dark">
                    Log Out
                  </Button>
                </>
              ) : (
                <div className="d-lg-flex">
                  <div>
                    <Link className="text-decoration-none me-3" to="/login">
                      Login
                    </Link>
                  </div>
                  <div>
                    <Link className="text-decoration-none me-3" to="/register">
                      SignUp
                    </Link>
                  </div>
                </div>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#userimage">
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                  title={user.displayName}
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
