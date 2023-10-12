import React, { useState } from "react";
import {
  Card,
  Col,
  Button,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("Confirm Password doesn't match... Enter Again")
    }
     setIsLoading(true)
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACzS76rC24yld6ld0jTYRyqkINtQVlDAA",
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
      console.log("successfully signUp");
    }else{
      console.log('response failed !!',response);
    }
    const data = await response.json();
  if(data && data.error){
    console.log('entered email already exist',data.error.message);
  } 
    
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <Container  >
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={7} lg={5} xs={10}>
            <Card className="px-5" style={{backgroundColor:"#e9ecef"}}>
              <Card.Body className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-center text-uppercase ">
                   SignUp
                </h2>
              <Form onSubmit={submitHandler}>
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                {error && <p>{error}</p>}
                  <div className="text-center">
                   {!isLoading && <Button className="mt-1" type="submit" variant="outline-info">
                      Create an  Account
                    </Button> }
                  </div>
              </Form>
              <p className="mb-0 mt-3 text-center">
                  Already have an account?? 
                  <Link  to="/login" className="text-primary fw-bold">
                    Sign In
                  </Link>
                </p>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
