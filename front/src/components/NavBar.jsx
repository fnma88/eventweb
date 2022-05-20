import React from "react";
// import "./header.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar
        className=""
        id=""
        collapseOnSelect
        expand="lg"
        bg="dark"
        sticky="top"
        variant="dark"
      >
        <Container className="">
          <Navbar.Brand href="#home">
            {" "}
            <a href="index.php" class="nav-brand">
              <img src="img/core-img/logo.png" alt="" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto pt-2">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="product">Productos</Nav.Link>
              <Nav.Link href="event">Eventos</Nav.Link>
              <Nav.Link href="contact">Contactos</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link className="login-register-btn mr-50" href="#deets">
                Login
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <span class="icon-shopping-cart">2</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
