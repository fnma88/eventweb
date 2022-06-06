import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container, Col, Row, Card } from "react-bootstrap";

function EventCRUD() {
  const [event, setEvent] = React.useState(null);

  React.useEffect(() => {
    const getEvent = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/events`
      );
      setEvent(response.data);
    };
    getEvent();
  }, []);

  return (
    event && (
      <>
        <NavBarAdmin />
        <Container>
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <Card.Header>
                    <Card.Title
                      className="d-flex justify-content-between align-items-center"
                      tag="h4"
                    >
                      Eventos{" "}
                      <a href="events/nuevo" className="btn btn-primary">
                        Agregar evento
                      </a>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Table
                      striped
                      bordered
                      hover
                      className="tablesorter"
                      responsive="md"
                    >
                      <thead className="text-primary">
                        <tr>
                          <th scope="col">Nombre</th>
                          <th scope="col">Descripcion</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Hora</th>
                          <th scope="col">Lugar</th>
                          <th scope="col">Imagen</th>
                          <th scope="col">Locaciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {event.map((event) => (
                          <tr scope="row" key={event._id}>
                            <td>{event.name}</td>
                            <td>{event.desription}</td>
                            <td>{event.time}</td>
                            <td>{event.place}</td>
                            <td>{event.headerimage}</td>
                            <td>{event.eventmap}</td>
                            <td>
                              <a
                                className="btn btn-outline-success"
                                rel="stylesheet"
                                href={`/events/${event.name}`}
                              >
                                <i className="fa-solid fa-pen"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    )
  );
}

export default EventCRUD;
