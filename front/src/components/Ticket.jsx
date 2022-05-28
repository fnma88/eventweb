import React from "react";
function Ticket({ costo, tipo }) {
  return (
    <div className="single-event-area my-3">
      <div className=""></div>
      <div className="event-text">
        <h4>{tipo} </h4>
        <div className="event-meta-data">
          <a href="#" className="event-place">
            COSTO
          </a>
          <a href="#" className="event-date">
            {costo}
          </a>
        </div>
        <a href="#" className="btn see-more-btn">
          Agregar a carrito
        </a>
      </div>
    </div>
  );
}

export default Ticket;
