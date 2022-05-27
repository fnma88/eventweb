const express = require("express");
const eventRouter = express.Router();
const eventController = require("../controllers/eventController");
const checkJwt = require("express-jwt");
//const tokenExist = require("../middlewares/tokenExist");
const isAdmin = require("../middlewares/isAdmin.js");

//*****    Ruta para home *************** */
eventRouter.get("/", eventController.index);
//******    Ruta para obtener una event************ */
eventRouter.get("/:name", eventController.show);
//******    Midlleware para rutas privadas ************ */
eventRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
//******    Ruta obtener event ************ */
eventRouter.use(isAdmin);
//******    Ruta crear event ************ */
eventRouter.post("/", eventController.create);
//******    Ruta editar event ************ */
eventRouter.patch("/:id", eventController.update);
//*****   Ruta delete tweet ************* */
eventRouter.delete("/:id", eventController.destroy);

module.exports = eventRouter;
