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
          <div className="rowinput-group mb-3 ms-3 d-flex justify-content-center ">
            <span className="input-group-text"> $</span>
            <span className="input-group-text">00</span>
          </div>
          <div className="input-group mb-3 ms-3">
            <span className="input-group-text"> CTDA</span>
            <span className="input-group-text">00</span>
            <button className=" input-group-text">-</button>
            <button className="input-group-text">+</button>
          </div>
          <div className="holes-lowerdashed col"></div>
        </div>

        <div className="holes-lower2"></div>
        <div className="col d-flex align-items-center">
          <div className="row">
            <div className="text-center  text-white mb-3">
              <span className="">
                Fecha: <span>**/**/****</span>
              </span>
            </div>
            <div className="text-center  text-white mb-3">
              <span className="">
                Hora: <span>##:##</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketEvent;
