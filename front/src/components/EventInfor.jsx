import React from "react";
import "./eventinfor.css";
import { Accordion } from "react-bootstrap";
function EventInfor({ fecha }) {
  return (
    <>
      <Accordion>
        <Accordion.Item className="border border-dark mt-1" eventKey="0">
          <Accordion.Header>FECHA : {fecha}</Accordion.Header>
          <Accordion.Body>
            <div class="card-body">
              <p class="card-text  text-dark">
                <span>LUGAR DEL EVENTO :</span>
              </p>
              <p class="card-text  text-dark">
                <span>ARTISTA :</span>
              </p>
              <p class="card-text  text-dark">
                <span>INVITADOS :</span>
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="border border-dark mt-1" eventKey="1">
          <Accordion.Header>FECHA : {fecha} </Accordion.Header>
          <Accordion.Body>
            <div class="card-body">
              <p class="card-text  text-dark">
                <span>LUGAR DEL EVENTO :</span>
              </p>
              <p class="card-text  text-dark">
                <span>ARTISTA :</span>
              </p>
              <p class="card-text  text-dark">
                <span>INVITADOS :</span>
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default EventInfor;
