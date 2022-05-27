import React from "react";
import "./ticketEvent.css";

function TicketEvent({ imageTicket }) {
  return (
    <>
      <div className="ticket2 row">
        <div className="holes-top2"></div>
        <div className="titleTicket col ">
          <div className="text-center  text-white mb-3">
            <span className="">
              CATEGORIA: <span>GOLD</span>
            </span>
          </div>
          <div class="input-group mb-3 ms-3">
            <span class="input-group-text"> $</span>
            <span class="input-group-text">00</span>
          </div>
          <div class="input-group mb-3 ms-3">
            <span class="input-group-text"> CTDA</span>
            <span class="input-group-text">00</span>
          </div>
        </div>
        <div className="holes-lower2"></div>
        <div className="col d-flex align-items-center">
          <div className="row">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="email"
                class="form-control"
                placeholder="CORREO"
                aria-label="CORREO"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="text-center  text-white">
              <span className="">Gracias por su compra</span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="holes-lowerdashed"></div>
    </>
  );
}

export default TicketEvent;
