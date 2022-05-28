import React from "react";
import EventInfor from "../components/EventInfor";
import Ticket from "../components/Ticket";
import TicketEvent from "../components/TicketEvent";

function Event() {
  let image = "img/bg-img/e1.jpg";
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
          <div className="row ">
            <div className="col-4"></div>
          </div>
          <div className="row d-flex align-items-top">
            <div className="col m-1">
              <TicketEvent imageTicket={image} />
            </div>
            <div className="col m-1 ">
              <Ticket costo={"100"} tipo={"SILVER"} />
              <Ticket costo={"200"} tipo={"GOLD"} />
              <Ticket costo={"300"} tipo={"PLATINIUM"} />
            </div>
            <div className="col m-1 ">
              <EventInfor fecha={"29-10"} />
              <img src="https://tickantel.cdn.antel.net.uy/media/Distribucion/40000906/d08993b9_3f73_4e50_88f0_ea54766aef72.jpg" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row w-75">
          <div className="col-12  d-flex justify-content-end"></div>
        </div>
      </div>

      {/* <!-- ##### Eventos Area End ##### --> */}

      {/* <!-- ##### Nosotrosletter & Testimonials Area Start ##### --> */}
    </>
  );
}

export default Event;
