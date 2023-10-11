import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdf1RrKZ3Wqq9tnpnPLlQbVddbQHUqXA0",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      console.log("Login user successfully");
      const data = await response.json();
      localStorage.setItem("idToken", data.idToken);
      localStorage.setItem("email", data.email);
       navigate('/home');
    } else {
      const data = await response.json();
      if (data && data.error) {
        console.log(data.error.message);
      }
      console.log("login failled", response);
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={7} lg={5} xs={10}>
            <Card className="px-10" style={{ backgroundColor: "#e9ecef" }}>
              <h2 className="text-center mb-4">Login</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                {!loading && (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={loginHandler}
                  >
                    Log In
                  </Button>
                )}
                {loading && <Spinner animation="border" size="sm" />}
                {loading && <h2>Submitting Data...</h2>}
              </Form>
              <div className="text-center mt-3">
                <Link to="/forgotPassword">Forgot password?</Link>
                <p>
                  Do not have an account? <Link to="/Signup">Signup</Link>
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
