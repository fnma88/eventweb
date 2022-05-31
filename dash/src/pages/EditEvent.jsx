import React from "react";
import axios from "axios";
import { Container, Col, Row, Card } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const userLogged = useSelector((state) => state.user);
  const [warning, setWarning] = React.useState(null);
  const [event, setEvent] = React.useState(null);
  const [editedevent, setEditEvent] = React.useState({});

  React.useEffect(() => {
    const getevent = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/event/${params.name}`
      );
      setEvent(response.data);
    };
    getevent();
  }, [params.name]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in editedevent) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/event/${event.id}`,
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
        data: editedevent,
      },
      {
        validateStatus: function (status) {
          return status >= 200;
        },
      }
    );
    if (response.status === 200) {
      navigate("/event");
    } else {
      setWarning(response.data.msg);
    }
  };

  return (
    event && (
      <>
        <NavBarAdmin />
        <Container>
          <Row xs={1} md={1} lg={7} className="d-flex justify-content-center">
            <Col className="w-75 ">
              {" "}
              <Card className="">
                <Card.Header>
                  <Card.Title>
                    <h1>Crea un nuevo evento</h1>
                  </Card.Title>
                </Card.Header>
                <Card.Body className="d-flex justify-content-center">
                  {" "}
                  <h1>Editar Evento: {event.name}</h1>
                  <form onSubmit={handleSubmit} className="mb-5 col-7">
                    <label className="mt-3 form-label" htmlFor="name">
                      Nombre
                    </label>
                    <input
                      required
                      value={event.name}
                      className=" form-control"
                      id="name"
                      type="text"
                      onChange={(ev) => {
                        setEvent({ ...event, name: ev.target.value });
                        setEditEvent({
                          ...editedevent,
                          name: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3 form-label" htmlFor="description">
                      Descripcion
                    </label>
                    <input
                      required
                      value={event.description}
                      className=" form-control"
                      id="description"
                      type="text"
                      onChange={(ev) => {
                        setEvent({ ...event, description: ev.target.value });
                        setEditEvent({
                          ...editedevent,
                          description: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3 form-label" htmlFor="date">
                      Nombre
                    </label>
                    <input
                      required
                      value={event.date}
                      className=" form-control"
                      id="date"
                      type="text"
                      onChange={(ev) => {
                        setEvent({ ...event, date: ev.target.value });
                        setEditEvent({
                          ...editedevent,
                          date: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3 form-label" htmlFor="time">
                      Hora
                    </label>
                    <input
                      required
                      value={event.time}
                      className=" form-control"
                      id="time"
                      type="text"
                      onChange={(ev) => {
                        setEvent({ ...event, time: ev.target.value });
                        setEditEvent({
                          ...editedevent,
                          time: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3 form-label" htmlFor="place">
                      Lugar
                    </label>
                    <input
                      required
                      value={event.place}
                      className=" form-control"
                      id="place"
                      type="text"
                      onChange={(ev) => {
                        setEvent({ ...event, place: ev.target.value });
                        setEditEvent({
                          ...editedevent,
                          place: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3 form-label" htmlFor="headerimage">
                      Imagen
                    </label>
                    <input
                      required
                      value={event.headerimage}
                      className=" form-control"
                      id="headerimage"
                      type="file"
                      onChange={(ev) => {
                        setEvent({ ...event, headerimage: ev.target.value });
                        setEditEvent({
                          ...editedevent,
                          headerimage: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3 form-label" htmlFor="eventmap">
                      Locaciones
                    </label>
                    <input
                      required
                      value={event.eventmap}
                      className=" form-control"
                      id="eventmap"
                      type="file"
                      onChange={(ev) => {
                        setEvent({ ...event, eventmap: ev.target.value });
                        setEditEvent({
                          ...editedevent,
                          eventmap: ev.target.value,
                        });
                      }}
                    />
                    {warning && <p className="text-danger">{warning}</p>}
                    <button className="btn btn-success mt-3" type="submit">
                      Guardar cambios
                    </button>
                  </form>
                </Card.Body>
                <a className="mt-3 btn btn-danger" href="/event">
                  Ir atrás
                </a>
              </Card>{" "}
            </Col>
          </Row>
        </Container>
      </>
    )
  );
}

export default EditEvent;
