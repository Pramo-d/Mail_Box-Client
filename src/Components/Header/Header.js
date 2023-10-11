import React from 'react'
 
 import { NavLink } from 'react-router-dom';
import { Navbar,Container,Nav } from 'react-bootstrap';

const  Header = () => {
  return (
    < >
     <Navbar bg="primary" data-bs-theme="dark"  >
        <Container className="justify-content-between">
          
          <Nav className="justify-content-between">

            <NavLink to='/home'>Home</NavLink>
            <NavLink  to='/Login'>Login</NavLink>
            <NavLink  to='/Signup'>SignUp</NavLink>
          </Nav>
        </Container>
      </Navbar> 
    </ >
  )
}

export default Header;
