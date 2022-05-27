const userRoutes = require("./userRoutes");
const ticketRoutes = require("./ticketRoutes");
const eventRoutes = require("./eventRoutes");
const orderRoutes = require("./orderRoutes");
const userController = require("../controllers/userController");

module.exports = (app) => {
  //Login
  app.post("/tokens", userController.newToken);
  app.use("/users", userRoutes);
  app.use("/tickets", ticketRoutes);
  app.use("/orders", orderRoutes);
  app.use("/events", eventRoutes);
};
