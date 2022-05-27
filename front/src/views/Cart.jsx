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
          <h2>TU CARRITO</h2>
        </div>
      </div>
      {/* <!-- ##### Breadcumb Area End ##### --> */}

      {/* <!-- ##### Eventos Area Start ##### --> */}
      <div className="Eventos-area section-padding-100">
        <div className="container">
          <div className="row">
            {/* <!-- Single Event Area --> */}
            <div className="col-12 ">
              <TicketEventCart />
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
