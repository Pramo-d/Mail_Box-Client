import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import   { authAction } from "../../store/authSlice";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
const isLoggedIn=useSelector(state=>state.auth.isLoggedin)

  const logoutHandler = () => {
    dispatch(authAction.logout());
    localStorage.removeItem("idToken");
    localStorage.removeItem("email");
    localStorage.removeItem('numOfMails')
    navigate("/login");
  };
  return (
    <>
      <Nav fill variant="pills" defaultActiveKey="/home" className="bg-dark"   >
        <Nav.Item>
          <NavLink to="/home">Home</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/about">About</NavLink>
        </Nav.Item>
        <Nav.Item>
      { isLoggedIn &&   <NavLink to="/inbox">Inbox</NavLink>}
        </Nav.Item>
      { isLoggedIn &&  <NavLink to="/mail">mail</NavLink>}
        <Nav.Item>
       { !isLoggedIn &&  <NavLink to="/login">Login</NavLink>}
        </Nav.Item>
        <Nav.Item>
        { isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
        </Nav.Item>
      </Nav>
      {/* <Navbar bg="primary" data-bs-theme="dark"  >
        <Container className="justify-content-between">
          
          <Nav className="justify-content-between">

            <NavLink to='/home'>Home</NavLink>
            <NavLink  to='/Login'>Login</NavLink>
            <NavLink  to='/Signup'>SignUp</NavLink>
            <button onClick={logoutHandler}>Logout</button>
          </Nav>
        </Container>
      </Navbar>  */}
      
    </>
  );
};

export default Header;
