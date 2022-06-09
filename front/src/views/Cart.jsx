import React from "react";
import TicketEventCart from "../components/TicketEventCart";

function Cart() {
  return (
    <>
      <div
        className="breadcumb-area bg-img bg-overlay"
        style={{ backgroundImage: "url(img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="bradcumbContent">
          <h2>CARRITO</h2>
        </div>
      </div>
      {/* <!-- ##### Breadcumb Area End ##### --> */}

      {/* <!-- ##### Eventos Area Start ##### --> */}
      <div className="Eventos-area section-padding-100">
        <div className="container">
          <div className="row">
            {/* <!-- Single Event Area --> */}
            <div className="col-6 ">
              <TicketEventCart />
            </div>
            <div className="col-6 ">
              <div className="col d-flex align-items-center">
                <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Nombre
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="CORREO"
                      aria-label="CORREO"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      @
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="CORREO"
                      aria-label="CORREO"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="text-center  text-dark">
                    <span className="">Gracias por su compra</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="load-more-btn text-center mt-70">
                <a href="#" className="btn oneMusic-btn">
                  FINALIZAR COMPRA
                </a>
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

export default Cart;
