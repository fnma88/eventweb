import React from "react";
import Carousels from "../components/Carousels";
import { Carousel, Container, Row } from "react-bootstrap";

function Main() {
  return (
    <>
      <div className="hero-area">
        <div className="hero-slides owl-carousel">
          {/* <!-- Single Hero Slide --> */}
          <div className="single-hero-slide d-flex align-items-center justify-content-center">
            {/* <!-- Slide Img --> */}
            <div
              className="slide-img bg-img"
              style={{ backgroundImage: "url(img/bg-img/bg-1.jpg)" }}
            ></div>
            {/* <!-- Slide Content --> */}
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="hero-slides-content text-center">
                    <h6 data-animation="fadeInUp" data-delay="100ms">
                      Próximos eventos
                    </h6>
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      Miel San Marcos <span>Miel San Marcos </span>
                    </h2>
                    <a
                      data-animation="fadeInUp"
                      data-delay="500ms"
                      href="#"
                      className="btn oneMusic-btn mt-50"
                    >
                      Descubre <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single Hero Slide --> */}
          <div className="single-hero-slide d-flex align-items-center justify-content-center">
            {/* <!-- Slide Img --> */}
            <div
              className="slide-img bg-img"
              style={{ backgroundImage: "url(img/bg-img/bg-2.jpg)" }}
            ></div>
            {/* <!-- Slide Content --> */}
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="hero-slides-content text-center">
                    <h6 data-animation="fadeInUp" data-delay="100ms">
                      Próximos eventos
                    </h6>
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      CIudad de Guatemala <span>CIudad de Guatemala</span>
                    </h2>
                    <a
                      data-animation="fadeInUp"
                      data-delay="500ms"
                      href="#"
                      className="btn oneMusic-btn mt-50"
                    >
                      Descubre <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Hero Area End ##### --> */}

      {/* <!-- ##### Latest Productos Area Start ##### --> */}
      <div className="latest-Productos-area section-padding-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading style-2">
                <p>Mira lo nuevo</p>
                <h2>Ultimos Productos</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <div className="ablums-text text-center mb-70">
                <p>
                  Somos una Empresa 100% Guatemalteca, dedicada a la producción
                  y venta de entradas para todo tipo de evento, como Brazaletes
                  Tivek personalizados de todos los estilos y Ticket para
                  conciertos con excelentes características de seguridad y la
                  más alta calidad.
                </p>
              </div>
            </div>
          </div>
          {/* Comienzo Carrusel */}
          <Carousels />
          {/* Fin Carrusel */}
        </div>
      </div>
      {/* <!-- ##### Latest Productos Area End ##### --> */}

      {/* <!-- ##### Buy Now Area Start ##### --> */}

      {/* <!-- ##### Buy Now Area End ##### --> */}

      {/* <!-- ##### Featured Artist Area Start ##### --> */}
      <div
        className="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed"
        style={{ backgroundImage: "url(img/bg-img/bg-4.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-md-5 col-lg-4">
              <div className="featured-artist-thumb">
                <img src="img/bg-img/fa.jpg" alt="" />
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8">
              <div className="featured-artist-content">
                {/* <!-- Section Heading --> */}
                <div className="section-heading white text-left mb-30">
                  <h2>NUESTRO EQUIPO</h2>
                </div>
                <p>
                  Somos un grupo de personas Profesionales comprometidas, que
                  cada día estamos trabajando arduamente, para brindar a
                  nuestros clientes el mejor servicio. En el mejor tiempo y con
                  la mejor calidad.
                </p>
                <div className="song-play-area">
                  <div className="song-name">
                    <p>01. Main Hit Song</p>
                  </div>
                  <audio preload="auto" controls>
                    {/* <source src="audio/dummy-audio.mp3"> */}
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Featured Artist Area End ##### --> */}

      {/* <!-- ##### Miscellaneous Area Start ##### --> */}
      <div className="miscellaneous-area section-padding-100-0">
        <div className="container">
          <div className="row">
            {/* <!-- ***** Weeks Top ***** --> */}
            <div className="col-12 col-lg-4">
              <div className="weeks-top-area mb-100">
                <div
                  className="section-heading text-left mb-50 wow fadeInUp"
                  data-wow-delay="50ms"
                >
                  <p>Nuevos singles</p>
                  <h2>Top de esta semana</h2>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-top-item d-flex wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/wt1.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <h6>Sam Smith</h6>
                    <p>Underground</p>
                  </div>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-top-item d-flex wow fadeInUp"
                  data-wow-delay="150ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/wt2.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <h6>Power Play</h6>
                    <p>In my mind</p>
                  </div>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-top-item d-flex wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/wt3.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <h6>Cristinne Smith</h6>
                    <p>My Music</p>
                  </div>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-top-item d-flex wow fadeInUp"
                  data-wow-delay="250ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/wt4.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <h6>The Music Band</h6>
                    <p>Underground</p>
                  </div>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-top-item d-flex wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/wt5.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <h6>Creative Lyrics</h6>
                    <p>Songs and stuff</p>
                  </div>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-top-item d-flex wow fadeInUp"
                  data-wow-delay="350ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/wt6.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <h6>The Culture</h6>
                    <p>Pop Songs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ***** New Hits Songs ***** --> */}
            <div className="col-12 col-lg-4">
              <div className="new-hits-area mb-100">
                <div
                  className="section-heading text-left mb-50 wow fadeInUp"
                  data-wow-delay="50ms"
                >
                  <p>Mira lo nuevo</p>
                  <h2>Nuevos Hits</h2>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="first-part d-flex align-items-center">
                    <div className="thumbnail">
                      <img src="img/bg-img/wt7.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <h6>Sam Smith</h6>
                      <p>Underground</p>
                    </div>
                  </div>
                  <audio preload="auto" controls>
                    {/* <source src="audio/dummy-audio.mp3"> */}
                  </audio>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                  data-wow-delay="150ms"
                >
                  <div className="first-part d-flex align-items-center">
                    <div className="thumbnail">
                      <img src="img/bg-img/wt8.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <h6>Power Play</h6>
                      <p>In my mind</p>
                    </div>
                  </div>
                  <audio preload="auto" controls>
                    {/* <source src="audio/dummy-audio.mp3"> */}
                  </audio>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="first-part d-flex align-items-center">
                    <div className="thumbnail">
                      <img src="img/bg-img/wt9.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <h6>Cristinne Smith</h6>
                      <p>My Music</p>
                    </div>
                  </div>
                  <audio preload="auto" controls>
                    {/* <source src="audio/dummy-audio.mp3"> */}
                  </audio>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                  data-wow-delay="250ms"
                >
                  <div className="first-part d-flex align-items-center">
                    <div className="thumbnail">
                      <img src="img/bg-img/wt10.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <h6>The Music Band</h6>
                      <p>Underground</p>
                    </div>
                  </div>
                  <audio preload="auto" controls>
                    <source src="audio/dummy-audio.mp3" />
                  </audio>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="first-part d-flex align-items-center">
                    <div className="thumbnail">
                      <img src="img/bg-img/wt11.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <h6>Creative Lyrics</h6>
                      <p>Songs and stuff</p>
                    </div>
                  </div>
                  <audio preload="auto" controls>
                    <source src="audio/dummy-audio.mp3" />
                  </audio>
                </div>

                {/* <!-- Single Top Item --> */}
                <div
                  className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                  data-wow-delay="350ms"
                >
                  <div className="first-part d-flex align-items-center">
                    <div className="thumbnail">
                      <img src="img/bg-img/wt12.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <h6>The Culture</h6>
                      <p>Pop Songs</p>
                    </div>
                  </div>
                  <audio preload="auto" controls>
                    <source src="audio/dummy-audio.mp3" />
                  </audio>
                </div>
              </div>
            </div>

            {/* <!-- ***** Popular Artists ***** --> */}
            <div className="col-12 col-lg-4">
              <div className="popular-artists-area mb-100">
                <div
                  className="section-heading text-left mb-50 wow fadeInUp"
                  data-wow-delay="50ms"
                >
                  <p>Nuevos artistas</p>
                  <h2>Más populares</h2>
                </div>
                <div className="row">
                  {/* <!-- Single Artist --> */}

                  <div
                    className="single-artists d-flex align-items-center wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="thumbnail">
                      <img src="img/bg-img/pa1.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <p>Sam Smith</p>
                    </div>
                  </div>
                </div>

                <div
                  className="single-artists d-flex align-items-center wow fadeInUp"
                  data-wow-delay="150ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/pa2.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <p>William Parker</p>
                  </div>
                </div>

                {/* <!-- Single Artist --> */}
                <div
                  className="single-artists d-flex align-items-center wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/pa3.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <p>Jessica Walsh</p>
                  </div>
                </div>

                {/* <!-- Single Artist --> */}
                <div
                  className="single-artists d-flex align-items-center wow fadeInUp"
                  data-wow-delay="250ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/pa4.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <p>Tha Stoves</p>
                  </div>
                </div>

                {/* <!-- Single Artist --> */}
                <div
                  className="single-artists d-flex align-items-center wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/pa5.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <p>DJ Ajay</p>
                  </div>
                </div>

                {/* <!-- Single Artist --> */}
                <div
                  className="single-artists d-flex align-items-center wow fadeInUp"
                  data-wow-delay="350ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/pa6.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <p>Radio Vibez</p>
                  </div>
                </div>

                {/* <!-- Single Artist --> */}
                <div
                  className="single-artists d-flex align-items-center wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="thumbnail">
                    <img src="img/bg-img/pa7.jpg" alt="" />
                  </div>
                  <div className="content-">
                    <p>Music 4u</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
