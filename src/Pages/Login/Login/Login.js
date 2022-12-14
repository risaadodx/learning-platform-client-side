import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const githubSignIn = () => {
    providerLogin(githubprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <Form onSubmit={handleSubmit} className="mt-5 px-lg-5 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <div className="mb-4">
        <Form.Text className="text-danger">{error}</Form.Text>
      </div>
      <div className="d-flex justify-content-between ">
        <div className="d-flex align-items-center">
          <div className="me-3">
            <Button className="px-5" variant="primary" type="submit">
              Login
            </Button>
          </div>
          <div>
            <p>
              Don't have a account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
        <div>
          <Button
            className="me-2"
            onClick={handleGoogleSignIn}
            variant="outline-primary"
          >
            <FaGoogle></FaGoogle> Google Login
          </Button>
          <Button onClick={githubSignIn} variant="outline-primary">
            <FaGithub></FaGithub> GitHub Login
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Login;
