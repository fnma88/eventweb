const Event = require("../models/Event");

module.exports = async () => {
  await Event.deleteMany();
  const events = [];

  const eventA = new Event({
    name: "Event A",
    description: "Event A de la gira A",
    date: 01 / 12 / 2022,
    place: "Arena A",
    headerimage: "eventoa.jpg",
    eventmap: "mapa.jpg",
  });
  events.push(eventA);

  const eventB = new Event({
    name: "Event B",
    description: "Event B de la gira B",
    date: 15 / 12 / 2022,
    place: "Arena B",
    headerimage: "eventob.jpg",
    eventmap: "mapa.jpg",
  });
  events.push(eventB);

  const eventC = new Event({
    name: "Event C",
    description: "Event C de la gira C",
    date: 31 / 12 / 2022,
    place: "Arena C",
    headerimage: "eventoc.jpg",
    eventmap: "mapa.jpg",
  });
  events.push(eventB);

  await Event.create(events);
  console.log("Se corrió el seeder de Events.");
};
