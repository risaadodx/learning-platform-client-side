import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <Form className="mt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-flex justify-content-between ">
        <div>
          <Button variant="primary">Login</Button>
        </div>
        <div>
          <Button
            className="me-2"
            onClick={handleGoogleSignIn}
            variant="outline-primary"
          >
            <FaGoogle></FaGoogle> Google Login
          </Button>
          <Button variant="outline-primary">
            <FaGithub></FaGithub> GitHub Login
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Login;
