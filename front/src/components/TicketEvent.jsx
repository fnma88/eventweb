import React from "react";
import "./ticketEvent.css";

function TicketEvent({ imageTicket }) {
  return (
    <>
      <div className="ticket">
        <div className="holes-top"></div>
        <div className="titleTicket">
          <p className="cinema">PRODUCTORA</p>
          <p className="movie-title">NOMBRE ARTISTA</p>
        </div>
        <div className="event-thumbnailfortTicket">
          <img src={imageTicket} alt="" />
        </div>

        <div className="holes-lower"></div>
        <div className="serial"></div>
      </div>
    </>
  );
}

export default TicketEvent;
