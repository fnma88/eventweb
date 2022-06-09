import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";

function EventCreate() {
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.user);
  const [warning, setWarning] = React.useState(null);
  const [formFields, setFormFields] = React.useState({
    name: "",
    description: "",
    date: "",
    time: "",
    place: "",
    headerimage: "",
    eventmap: "",
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in formFields) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/events`,
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
        data: formFields,
      },
      {
        validateStatus: function (status) {
          return status >= 200;
        },
      }
    );
    if (response.status === 200) {
      navigate("/events");
    } else {
      setWarning(response.data.msg);
    }
  };

  return (
    <>
      <NavBarAdmin />
      <Container>
        <Row xs={1} md={1} lg={7} className="d-flex justify-content-center ">
          <Col className="w-50">
            {" "}
            <Card className="">
              <Card.Header>
                <Card.Title>
                  <h1>Crear un nuevo Evento</h1>
                </Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="mb-5">
                  <label className="mt-3  form-label" htmlFor="name">
                    Nombre del evento
                  </label>
                  <input
                    required
                    onChange={(ev) => {
                      setFormFields({ ...formFields, name: ev.target.value });
                    }}
                    value={formFields.name}
                    className=" form-control"
                    id="name"
                    type="text"
                  />
                  <label className="mt-3  form-label" htmlFor="name">
                    Descripcion
                  </label>
                  <input
                    required
                    onChange={(ev) => {
                      setFormFields({
                        ...formFields,
                        description: ev.target.value,
                      });
                    }}
                    value={formFields.description}
                    className=" form-control"
                    id="description"
                    type="text"
                  />
                  <label className="mt-3  form-label" htmlFor="description">
                    Fecha
                  </label>
                  <input
                    required
                    onChange={(ev) => {
                      setFormFields({ ...formFields, date: ev.target.value });
                    }}
                    value={formFields.date}
                    className=" form-control"
                    id="date"
                    type="date"
                  />
                  <label className="mt-3  form-label" htmlFor="time">
                    Hora
                  </label>
                  <input
                    required
                    onChange={(ev) => {
                      setFormFields({ ...formFields, time: ev.target.value });
                    }}
                    value={formFields.time}
                    className=" form-control"
                    id="time"
                    type="time"
                  />
                  <label className="mt-3  form-label" htmlFor="place">
                    Lugar
                  </label>
                  <input
                    required
                    onChange={(ev) => {
                      setFormFields({ ...formFields, place: ev.target.value });
                    }}
                    value={formFields.place}
                    className=" form-control"
                    id="place"
                    type="text"
                  />
                  <label className="mt-3  form-label" htmlFor="headerimage">
                    Imagen del evento
                  </label>
                  <input
                    required
                    onChange={(ev) => {
                      setFormFields({
                        ...formFields,
                        headerimage: ev.target.value,
                      });
                    }}
                    value={formFields.headerimage}
                    className=" form-control"
                    id="headerimage"
                    // type="file"
                  />
                  <label className="mt-3  form-label" htmlFor="eventmap">
                    Foto locaciones
                  </label>
                  <input
                    required
                    onChange={(ev) => {
                      setFormFields({
                        ...formFields,
                        eventmap: ev.target.value,
                      });
                    }}
                    value={formFields.eventmap}
                    className=" form-control"
                    id="eventmap"
                    // type="file"
                  />
                  {warning && <p className="text-danger">{warning}</p>}
                  <button className="btn btn-success mt-3" type="submit">
                    Guardar cambios
                  </button>
                </form>
              </Card.Body>
              <a className="mt-3 btn btn-danger" href="/events">
                Ir atrás
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EventCreate;
