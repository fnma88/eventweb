const Ticket = require("../models/Ticket");

module.exports = async () => {
  await Ticket.deleteMany();
  const tickets = [];

  const ticketA = new Ticket({
    name: "Ticket A",
    description: "Ticket en zona A",
    price: 100,
    stock: 1000,
  });
  tickets.push(ticketA);

  const ticketB = new Ticket({
    name: "Ticket B",
    description: "Ticket en zona B",
    price: 50,
    stock: 2000,
  });
  tickets.push(ticketB);

  const ticketC = new Ticket({
    name: "Ticket C",
    description: "Ticket en zona C",
    price: 30,
    stock: 4000,
  });
  tickets.push(ticketC);

  await Ticket.create(tickets);
  console.log("Se corrió el seeder de Tickets.");
};
