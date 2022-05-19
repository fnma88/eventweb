import React from "react";

function Footer() {
  return (
    <footer id="footer-2-cols" class="site-footer">
      <div id="footer-container">
        <div id="footer-grid">
          <div id="left-footer-section" class="footer-section">
            <div id="footer-search">
              <form action="">
                {/* <input type="search" placeholder=""> */}
                <button type="submit">Buscar</button>
              </form>
            </div>
            <div class="footer-information">
              <p>
                {/* <img src="https://img.icons8.com/ios-filled/12/999999/marker.png">Zona 4 de Mixco, Guatemala. Ciudad de Guatemala.</p> */}
              </p>
              <p>
                {/* <img src="https://img.icons8.com/ios-filled/12/999999/phone.png">(502) 55009217 y (502) 40689735</p> */}
              </p>
              <p>
                {/* <img src="https://img.icons8.com/ios-filled/12/999999/mail.png">info@ticketguatemala.com</p> */}
              </p>
              <p>
                {/* <img src="https://img.icons8.com/ios-filled/12/999999/clock.png">8:00 AM – 6:00 PM</p> */}
              </p>
            </div>
          </div>
          <div id="right-footer-section" class="footer-section">
            <div class="footer-links">
              <ul>
                <li role="menuitem">
                  <a href="index.php"> Inicio</a>
                </li>
                <li role="menuitem">
                  <a href="productos.php"> Productos</a>
                </li>
                <li role="menuitem">
                  <a href="event.php"> Eventos</a>
                </li>
                <li role="menuitem">
                  <a href="blog.php"> Nosotros</a>
                </li>
                <li role="menuitem">
                  <a href="contacto.php"> Contactos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="copyright-information">
          <div id="footer-logo-section">
            <div id="footer-logo">
              {/* <img src="img/core-img/logo.png" alt=""> */}
            </div>
          </div>
          <div id="copyright-text">
            &copy; Copyright{" "}
            <script>document.write(new Date().getFullYear());</script> Todos los
            derechos reservados{" "}
            <i class="fa fa-angellist" aria-hidden="true"></i> por{" "}
            <a href="https://ceandb.com" target="_blank">
              CE&B
            </a>
          </div>
          <div id="social-buttons">
            <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" />
            <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png" />
            <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png" />
            <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
