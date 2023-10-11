import React from 'react'
 
 import { NavLink, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const  Header = () => {

  const navigate=useNavigate()
  const logoutHandler=()=>{
    localStorage.removeItem('idToken');
    localStorage.removeItem('email');
    navigate('/login')


  }
  return (
    < >
     <Nav fill variant="tabs" defaultActiveKey="/home" className='bg-dark'>
      <Nav.Item>
      <NavLink to='/home'>Home</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink  to='/Signup'>SignUp</NavLink>
      </Nav.Item>
      <Nav.Item>
      <button onClick={logoutHandler}>Logout</button>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/mail'>mail</NavLink>
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
    </ >
  )
}

export default Header;
