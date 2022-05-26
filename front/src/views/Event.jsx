import React from "react";

function Event() {
  return (
    <>
      <div
        className="breadcumb-area bg-img bg-overlay"
        style={{ backgroundImage: "url(img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="bradcumbContent">
          <h2>Nombre del evento</h2>
        </div>
      </div>
      {/* <!-- ##### Breadcumb Area End ##### --> */}

      {/* <!-- ##### Eventos Area Start ##### --> */}
      <div className="Eventos-area section-padding-100">
        <div className="container">
          <div className="row">
            {/* <!-- Single Event Area --> */}
            <div className="col-12 col-md-6 col-lg-6">
              <div className="single-event-area mb-30">
                <div className="event-thumbnail">
                  <img src="img/bg-img/e1.jpg" alt="" />
                </div>
                <img class="ta-maphilight" src="https://tickantel.cdn.antel.net.uy/media/Distribucion/40000906/d08993b9_3f73_4e50_88f0_ea54766aef72.jpg"/>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="single-event-area mb-30">
                  <div className="event-thumbnail"></div>
                  <div className="event-text">
                    <h4>Tipo de entrada </h4>
                    <div className="event-meta-data">
                      <a href="#" className="event-place">
                        COSTO
                      </a>
                      <a href="#" className="event-date">
                        $100
                      </a>
                    </div>
                    <a href="#" className="btn see-more-btn">
                      Agregar a carrito
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="single-event-area mb-30">
                  <div className="event-thumbnail"></div>
                  <div className="event-text">
                    <h4>Tipo de entrada </h4>
                    <div className="event-meta-data">
                      <a href="#" className="event-place">
                        COSTO
                      </a>
                      <a href="#" className="event-date">
                        $100
                      </a>
                    </div>
                    <a href="#" className="btn see-more-btn">
                      Agregar a carrito
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="single-event-area mb-30">
                  <div className="event-thumbnail"></div>
                  <div className="event-text">
                    <h4>Tipo de entrada </h4>
                    <div className="event-meta-data">
                      <a href="#" className="event-place">
                        COSTO
                      </a>
                      <a href="#" className="event-date">
                        $100
                      </a>
                    </div>
                    <a href="#" className="btn see-more-btn">
                      Agregar a carrito
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="single-event-area mb-30">
                  <div className="event-thumbnail"></div>
                  <div className="event-text">
                    <h4>Tipo de entrada </h4>
                    <div className="event-meta-data">
                      <a href="#" className="event-place">
                        COSTO
                      </a>
                      <a href="#" className="event-date">
                        $100
                      </a>
                    </div>
                    <a href="#" className="btn see-more-btn">
                      Agregar a carrito
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Eventos Area End ##### --> */}

      {/* <!-- ##### Nosotrosletter & Testimonials Area Start ##### --> */}
    </>
  );
}

export default Event;
