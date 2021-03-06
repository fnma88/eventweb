import React, { useState, useEffect } from "react";
import "./header.css";
import NavLink, { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

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
            ? "navBar activeNav navbar fixed-top navbar-dark p-md-3"
            : "navBar navbar fixed-top navbar-dark p-md-3"
        }
        id=""
        collapseOnSelect
        expand="lg"
        // bg="dark"
        // sticky="top"
        variant="dark"
      >
        <Navbar.Brand>
          {" "}
          <Link to="/" className="">
            <img src="img/core-img/logo.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav p-3" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className={navBar ? " pt-2 activeNav2 row" : "pt-2 row"}>
            <div className="col m-3">
              <Link className="text-white " to="/">
                Inicio
              </Link>
            </div>
            <div className="col m-3">
              <Link className="text-white " to="events">
                Eventos
              </Link>
            </div>
            <div className="col m-3">
              <Link className="text-white" to="about">
                Nosotros
              </Link>
            </div>
            <div className="col m-3">
              <Link className="text-white " to="contact">
                Contactos
              </Link>
            </div>
            <div className="col m-3">
              <Link className="text-white " to="#deets">
                Login
              </Link>
            </div>
            <div className="col m-3">
              <Link eventKey={2} className="text-white" to="/cart">
                <i className="fa-solid fa-cart-shopping">2</i>
              </Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
