import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(displayName, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-5">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>photoURL</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter photoURL"
          required
        />
      </Form.Group>
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
      <div className="d-flex align-items-center">
        <div className="me-3">
          <Button className="px-5" variant="primary" type="submit">
            Register
          </Button>
        </div>
        <div>
          <p>
            Do you have a account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </Form>
  );
};

export default Register;
