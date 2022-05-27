const Ticket = require("../models/Ticket");

async function index(req, res) {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    console.log(error.status);
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const ticket = await Ticket.findById(id);

    res.json(ticket);
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  try {
    const newTicketData = req.body;
    const newTicket = await Ticket.create(newTicketData);
    res.json(newTicket);
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  try {
    const ticketId = req.params.id;
    const fieldsToEdit = req.body;
    const updatedTicketData = await Ticket.findByIdAndUpdate(ticketId, fieldsToEdit);
    res.json(updatedTicketData);
  } catch (error) {
    console.log(error);
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id;
    const deletedTicket = await Ticket.findByIdAndDelete(id);
    res.json(deletedTicket);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
