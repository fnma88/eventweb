import React from "react";
import "./ticketEvent.css";

function TicketEvent({ imageTicket }) {
  return (
    <>
      <div class="ticket">
        <div class="holes-top"></div>
        <div class="titleTicket">
          <p class="cinema">PRODUCTORA</p>
          <p class="movie-title">NOMBRE EVENTO</p>
        </div>
        <div class="event-thumbnailfortTicket">
          <img src={imageTicket} alt="" />
        </div>

        <div class="holes-lower"></div>
        <div class="serial"></div>
      </div>
    </>
  );
}

export default TicketEvent;
