import React, { useState, useEffect } from "react";
import "./header.css";
import NavLink, { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
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
     <Navbar
         className={
            navBar
              ? "navBar active navbar fixed-top navbar-dark p-md-3"
              : "navBar navbar fixed-top navbar-dark p-md-3"}
        id=""
        collapseOnSelect
        expand="lg"
        // bg="dark"
        // sticky="top"
        variant="dark"
      >
        <Container className="">
          <Navbar.Brand>
            {" "}
            <Link to="/" className="">
              <img src="img/core-img/logo.png" alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto pt-2">
              <Link className="text-white m-3" to="/">Inicio</Link>
              <Link className="text-white m-3" to="product">Productos</Link>
              <Link className="text-white m-3" to="event">Eventos</Link>
              <Link className="text-white m-3" to="contact">Contactos</Link>
            
            </Nav>
         
              <Link  className="text-white m-3" to="#deets">
                Login
              </Link>
                <Link eventKey={2} className="text-white"  to="/cart">
               <i class="fa-solid fa-cart-shopping">2</i>
              </Link>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>  
    </>
  );
}

export default NavBar;
