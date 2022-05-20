import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
function Carousels() {
  return (
    <>
      <Container>
        <div class="Productos-slideshow owl-carousel">
          <Carousel>
            <Carousel.Item interval={1750}>
              <Row>
                <div className="col ">
                  <img
                    className="d-block vw-75"
                    src="img/bg-img/a2.jpg"
                    alt=""
                  />
                  <div className="single-album">
                    <div className="album-info justify-content-center ">
                      <a href="#">
                        <h5>Sam Smith</h5>
                      </a>
                      <p>Underground</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img
                    className="d-block  w-100"
                    src="img/bg-img/a4.jpg"
                    alt=""
                  />
                  <div className="single-album">
                    <div className="album-info justify-content-center">
                      <a href="#">
                        <h5>The Cure</h5>
                      </a>
                      <p>Second Song</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img
                    className="d-block  w-100"
                    src="img/bg-img/a3.jpg"
                    alt=""
                  />
                  <div className="single-album">
                    <div className="album-info justify-content-center">
                      <a href="#">
                        <h5>Will I am</h5>
                      </a>
                      <p>First</p>
                    </div>
                  </div>
                </div>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={1002222222222220}>
              <Row>
                <div className="col ">
                  <img
                    className="d-block  w-100"
                    src="img/bg-img/a7.jpg"
                    alt=""
                  />
                  <div className="single-album">
                    <div className="album-info justify-content-center">
                      <a href="#">
                        <h5>Beyonce</h5>
                      </a>
                      <p>Songs</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img
                    className="d-block  w-100"
                    src="img/bg-img/a6.jpg"
                    alt=""
                  />
                  <div className="single-album">
                    <div className="album-info justify-content-center">
                      <a href="#">
                        <h5>The Ustopable</h5>
                      </a>
                      <p>Unplugged</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img
                    className="d-block w-100"
                    src="img/bg-img/a5.jpg"
                    alt=""
                  />
                  <div className="single-album">
                    <div className="album-info justify-content-center">
                      <a href="#">
                        <h5>DJ SMITH</h5>
                      </a>
                      <p>The Album</p>
                    </div>
                  </div>
                </div>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={1750}>
              <Row>
                <div className="col">
                  <img
                    className="d-block w-100"
                    src="img/bg-img/a1.jpg"
                    alt=""
                  />
                  <div className="single-album">
                    <div className="album-info justify-content-center">
                      <a href="#">
                        <h5>The Cure</h5>
                      </a>
                      <p>Second Song</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img
                    className="d-block w-100"
                    src="img/bg-img/a5.jpg"
                    alt=""
                  />
                  <div className="single-album">
                    <div className="album-info justify-content-center">
                      <a href="#">
                        <h5>DJ SMITH</h5>
                      </a>
                      <p>The Album</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img
                    className="d-block w-100"
                    src="img/bg-img/a5.jpg"
                    alt=""
                  />
                  <div className="single-album">
                    <div className="album-info justify-content-center">
                      <a href="#">
                        <h5>DJ SMITH</h5>
                      </a>
                      <p>The Album</p>
                    </div>
                  </div>
                </div>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </>
  );
}

export default Carousels;
