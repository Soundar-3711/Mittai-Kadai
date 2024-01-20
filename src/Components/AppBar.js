import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MittaiCart from './MittaiCart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const AppBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="text-success"><h2><span><i class="bi bi-yelp"></i>Online Mittai Kadai</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="h6">
            <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#menu" className="fw-bold">Menu</Nav.Link>
            <Nav.Link href="#musttry" className="fw-bold">MustTry</Nav.Link>
            <Nav.Link href="#contact" className="fw-bold">Contact Us</Nav.Link>
            <MittaiCart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppBar