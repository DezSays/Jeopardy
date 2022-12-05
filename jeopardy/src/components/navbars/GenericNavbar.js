import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'



const GenericNavbar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <div>Hey</div>
              {/* <Link to="/" className='path'>Home</Link> */}
              {/* <Link to="/Recipes" className='path'>Search Recipes</Link> */}
            </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    )
  }
  
  export default GenericNavbar