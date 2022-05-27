import React from "react";
function Ticket() {
  return (
    <div className="single-event-area my-3">
      <div className=""></div>
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
  );
}

export default Ticket;
