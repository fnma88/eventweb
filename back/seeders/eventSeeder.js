const Event = require("../models/event.js");

module.exports = async () => {
  await Event.deleteMany();
  const events = [];

  const eventA = new Event({
    name: "EventA",
    description: "Event A de la gira A",
    date: "30/12/2022",
    time: "22:00",
    place: "Arena A",
    headerimage: "eventoa.jpg",
    eventmap: "mapa.jpg",
  });
  events.push(eventA);

  const eventB = new Event({
    name: "EventB",
    description: "Event B de la gira B",
    date: "01/12/2022",
    time: "21:00",
    place: "Arena B",
    headerimage: "eventob.jpg",
    eventmap: "mapa.jpg",
  });
  events.push(eventB);

  const eventC = new Event({
    name: "EventC",
    description: "Event C de la gira C",
    date: "15/12/2022",
    time: "20:00",
    place: "Arena C",
    headerimage: "eventoc.jpg",
    eventmap: "mapa.jpg",
  });
  events.push(eventC);

  await Event.create(events);
  console.log("Se corrió el seeder de Events.");
};
