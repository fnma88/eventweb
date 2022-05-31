import React from "react";
import axios from "axios";
import { Container, Col, Row, Card } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import { useParams } from "react-router-dom";
import ButtonEditicket from "../components/ButtonEditicket";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Editticket() {
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.user);
  const [warning, setWarning] = React.useState(null);
  const params = useParams();
  const [ticket, setTicket] = React.useState(null);
  const [editedTicket, setEditTicket] = React.useState({});

  React.useEffect(() => {
    const getticket = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/tickets/${params.id}`
      );
      setTicket(response.data);
    };
    getticket();
  }, [params.id]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in editedTicket) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/tickets/${ticket.id}`,
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
        data: editedTicket,
      },
      {
        validateStatus: function (status) {
          return status >= 200;
        },
      }
    );
    if (response.status === 200) {
      navigate("/tickets");
    } else {
      setWarning(response.data.msg);
    }
  };

  return (
    ticket && (
      <>
        <NavBarAdmin />
        <Container>
          <Row xs={1} md={1} lg={7} className="d-flex justify-content-center">
            <Col className=" w-75">
              {" "}
              <Card className="">
                <Card.Header>
                  <Card.Title>
                    <h1>Editar Ticket: {ticket.name}</h1>
                  </Card.Title>
                </Card.Header>
                <Card.Body className="d-flex justify-content-center">
                  <form onSubmit={handleSubmit} className="mb-5 col-7">
                    <label className="mt-3 form-label" htmlFor="name">
                      Nombre
                    </label>
                    <input
                      required
                      defaultValue={ticket.name}
                      className=" form-control"
                      id="name"
                      type="text"
                      onChange={(ev) => {
                        setTicket({ ...ticket, name: ev.target.value });
                        setEditTicket({
                          ...editedTicket,
                          name: ev.target.value,
                        });
                      }}
                    />

                    <label className="mt-3 form-label" htmlFor="description">
                      Descripción
                    </label>
                    <input
                      required
                      defaultValue={ticket.description}
                      className=" form-control"
                      id="description"
                      onChange={(ev) => {
                        setTicket({
                          ...ticket,
                          description: ev.target.value,
                        });
                        setEditTicket({
                          ...editedTicket,
                          description: ev.target.value,
                        });
                      }}
                    />

                    {/* <label className="mt-3 form-label" htmlFor="image">
              Imagen
            </label>
            <input className=" form-control" id="image" type="file" /> */}
                    <label className="mt-3 form-label" htmlFor="price">
                      Precio
                    </label>
                    <input
                      required
                      defaultValue={ticket.price}
                      className=" form-control"
                      id="price"
                      type="number"
                      onChange={(ev) => {
                        setTicket({ ...ticket, price: ev.target.value });
                        setEditTicket({
                          ...editedTicket,
                          price: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3 form-label" htmlFor="stock">
                      Stock
                    </label>
                    <input
                      required
                      defaultValue={ticket.stock}
                      className=" form-control"
                      id="stock"
                      type="number"
                      onChange={(ev) => {
                        setTicket({ ...ticket, stock: ev.target.value });
                        setEditTicket({
                          ...editedTicket,
                          stock: ev.target.value,
                        });
                      }}
                    />

                    <label className="mt-3 form-label" htmlFor="event">
                      Categoría
                    </label>
                    <input
                      required
                      defaultValue={ticket.event}
                      className=" form-control"
                      id="event"
                      type="text"
                      onChange={(ev) => {
                        setTicket({ ...ticket, event: ev.target.value });
                        setEditTicket({
                          ...editedTicket,
                          event: ev.target.value,
                        });
                      }}
                    />
                    {warning && <p className="text-danger">{warning}</p>}
                    <button className="btn btn-success mt-3" type="submit">
                      Guardar cambios
                    </button>
                  </form>
                </Card.Body>
                <a className="mt-3 btn btn-danger" href="/tickets">
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

export default Editticket;
