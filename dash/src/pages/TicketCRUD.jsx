import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container, Col, Row, Card } from "react-bootstrap";
import ButtonDeleteticket from "../components/ButtonDeleteticket";

function TicketCRUD() {
  const [ticket, setTicket] = React.useState(null);

  React.useEffect(() => {
    const getticket = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/tickets`
      );
      setTicket(response.data);
    };
    getticket();
  }, []);

  return (
    ticket && (
      <>
        <NavBarAdmin />
        <Container>
          <div className="">
            <Row>
              <Col md="12">
                <Card>
                  <Card.Header>
                    <Card.Title
                      tag="h4"
                      className="d-flex justify-content-between align-items-center"
                    >
                      Tickets{" "}
                      <a href="tickets/nuevo" className="btn btn-primary">
                        Agregar Tickets
                      </a>
                    </Card.Title>{" "}
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
                          <th scope="col">Evento</th>
                          <th scope="col"> Descripcion</th>
                          <th scope="col"> Price</th>
                          <th scope="col">Stock</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ticket.map((ticket) => (
                          <tr key={ticket.id}>
                            <th scope="row">{ticket.id}</th>
                            <td>{ticket.name}</td>
                            <td>{ticket.event}</td>
                            <td>{ticket.description}</td>
                            <td>{ticket.price}</td>
                            <td>{ticket.stock}</td>
                            <td>
                              <a
                                className="btn btn-outline-success"
                                rel="stylesheet"
                                href={`/tickets/${ticket.id}`}
                              >
                                <i className="fa-solid fa-pen"></i>
                              </a>
                              <ButtonDeleteticket
                                setTicket={setTicket}
                                id={ticket.id}
                              />
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

export default TicketCRUD;
