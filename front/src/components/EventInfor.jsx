import React from "react";
import "./eventinfor.css";
function EventInfor({ fecha }) {
  return (
    <>
      <div class="card  bg-dark">
        <h3 class="card-header bg-dark text-white border-bottom-2 border-white">
          {fecha}
        </h3>
        <div class="card-body">
          <h5 class="card-title">Nombre del Evento</h5>
          <p class="card-text  text-white">
            <span>LUGAR DEL EVENTO :</span>
          </p>
          <p class="card-text  text-white">
            <span>ARTISTA :</span>
          </p>
          <p class="card-text  text-white">
            <span>INVITADOS :</span>
          </p>
          <p class="card-text  text-white">
            <span>METODOS DE PAGO :</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default EventInfor;
