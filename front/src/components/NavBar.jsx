import React, { useState, useEffect } from "react";
import "./header.css";
import { MenuItems } from "./MenuItems";
import NavLink, { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavBar() {
  const [navBar, setNavBar] = useState(false);

  const scroll = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else setNavBar(false);
  };

  window.addEventListener("scroll", scroll);

  return (
    <>
      <nav className={navBar ? "navBar active" : "navBar"}>
        <a className="navBarLogo" href="/">
          <img src="img/core-img/logo.png" alt="" />
        </a>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* <Navbar
        className={navBar ? "navBar active" : "navBar"}
        id=""
        collapseOnSelect
        expand="lg"
        // bg="dark"
        sticky="top"
        variant="dark"
      >
        <Container className="">
          <Navbar.Brand>
            {" "}
            <a href="index.php" className="">
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
      </Navbar> */}
    </>
  );
}

export default NavBar;
