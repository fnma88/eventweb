import React from "react";

function Header() {
  return (
    <>
      <header class="header-area">
        {/* <!-- Navbar Area --> */}
        <div class="oneMusic-main-menu">
          <div class="classy-nav-container breakpoint-off">
            <div class="container">
              {/* <!-- Menu --> */}
              <nav
                class="classy-navbar justify-content-between"
                id="oneMusicNav"
              >
                {/* <!-- Nav brand --> */}
                <a href="index.php" class="nav-brand">
                  {/* <img src="img/core-img/logo.png" alt=""> */}
                </a>

                {/* <!-- Navbar Toggler --> */}
                <div class="classy-navbar-toggler">
                  <span class="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                {/* <!-- Menu --> */}
                <div class="classy-menu">
                  {/* <!-- Close Button --> */}
                  <div class="classycloseIcon">
                    <div class="cross-wrap">
                      <span class="top"></span>
                      <span class="bottom"></span>
                    </div>
                  </div>

                  {/* <!-- Nav Start --> */}
                  <div class="classynav">
                    <ul>
                      <li>
                        <a href="index.php">Inicio</a>
                      </li>
                      <li>
                        <a href="productos.php">Productos</a>
                      </li>
                      <li>
                        <a href="event.php">Eventos</a>
                      </li>
                      <li>
                        <a href="contacto.php">Contactos</a>
                      </li>
                      {/* <!-- <li><a href="#">Pages</a> */}
                      {/* <ul class="dropdown">
                                        <li><a href="index.php">Inicio</a></li>
                                        <li><a href="productos.php">Productos</a></li>
                                     
                                    <li><a href="elements.php">Elements</a></li>
                                        <li><a href="login.php">Login</a></li>
                                      <li><a href="#">Dropdown</a>
                                            <ul class="dropdown">
                                                <li><a href="#">Even Dropdown</a></li>
                                                <li><a href="#">Even Dropdown</a></li>
                                                <li><a href="#">Even Dropdown</a></li>
                                                <li><a href="#">Even Dropdown</a>
                                                    <ul class="dropdown">
                                                        <li><a href="#">Deeply Dropdown</a></li>
                                                        <li><a href="#">Deeply Dropdown</a></li>
                                                        <li><a href="#">Deeply Dropdown</a></li>
                                                        <li><a href="#">Deeply Dropdown</a></li>
                                                        <li><a href="#">Deeply Dropdown</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Even Dropdown</a></li>
                                            </ul>
                                        </li>
                                        --> */}
                    </ul>
                    {/* </li> */}

                    {/* </ul> */}

                    {/* <!-- Login & Cart Button --> */}
                    <div class="login-register-cart-button d-flex align-items-center">
                      {/* <!-- Login --> */}
                      <div class="login-register-btn mr-50">
                        <a href="login.php" id="loginBtn">
                          Login
                        </a>
                      </div>

                      {/* <!-- Cart Button --> */}
                      <div class="cart-btn">
                        <p>
                          <span class="icon-shopping-cart"></span>{" "}
                          <span class="quantity">1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Nav End --> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
