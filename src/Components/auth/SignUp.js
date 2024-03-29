import React, { useRef, useState } from "react";
import { Col, Button, Row, Card, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidate(true);

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value;

    if (enteredPassword !== enteredConfirmPassword) {
      setError("Confirm Password doesn't match... Enter Again");

      confirmPasswordRef.current.ref = "";
      return;
    }
    if (
      enteredEmail === "" ||
      enteredPassword === "" ||
      enteredConfirmPassword === ""
    ) {
      setError("All fields are mandatory!!");
      return;
    }

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA1rDoFYGB6VhY-CYIRBsrMgbIKpgku6w4",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          confirmPassword: enteredConfirmPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        console.log(res);
        navigate("/login");
      } else {
        res.json().then((data) => {
          let errorMessage = "Signup Failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          setError(errorMessage);
        });
      }
    });

    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };
  return (
    <>
      <div style={{ width: "100%", position: "fixed", height: "100%" }}>
        <Row className="vh-100 d-flex justify-content-center align-items-flexStart pt-4">
          <Col md={6} lg={4} xs={9}>
            <Card className="px-5" style={{ backgroundColor: "#e9ecef" }}>
              <Card.Body className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  Register
                </h2>
                <Form validated={validate} noValidate onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control
                      required
                      ref={emailRef}
                      type="email"
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted"></Form.Text>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      ref={passwordRef}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      required
                      ref={confirmPasswordRef}
                      type="confirmpassword"
                      placeholder="Password"
                    />
                  </Form.Group>

                  {error && <p>{error}</p>}
                  <div className="text-center">
                    {!isLoading && (
                      <Button
                        className="mt-1"
                        type="submit"
                        variant="outline-primary"
                      >
                        Create Account
                      </Button>
                    )}
                  </div>

                  {isLoading && <Spinner animation="border" size="sm" />}
                </Form>
                <p className="mb-0 mt-3 text-center">
                  Already have an account??{" "}
                  <Link to="/login" className="text-primary fw-bold">
                    Sign In
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Signup;
