import React from "react";
import "./eventinfor.css";
function EventInfor({ fecha }) {
  return (
    <>
      <div class="card  bg-white">
        <h3 class="card-header bg-secondary text-white border-bottom-2 border-white">
          {fecha}
        </h3>
        <div class="card-body">
          <h5 class="card-title">Nombre del Evento</h5>
          <p class="card-text  text-dark">
            <span>LUGAR DEL EVENTO :</span>
          </p>
          <p class="card-text  text-dark">
            <span>ARTISTA :</span>
          </p>
          <p class="card-text  text-dark">
            <span>INVITADOS :</span>
          </p>
          <p class="card-text  text-dark">
            <span>METODOS DE PAGO :</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default EventInfor;
