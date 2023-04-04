import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Navibar = () => {
  return (
    <>
       <Navbar bg="primary" variant="dark">
        <Container className="container">
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="nav">
            <NavLink to ="/">Home</NavLink>
            <NavLink to ="/popular">Popular</NavLink>
            <NavLink to ="/newRelease">New Release</NavLink>
            <NavLink to ="/upcoming">Upcoming</NavLink>
          </Nav>
        </Container>
      </Navbar> 
    </>
  )
}

export default Navibar
