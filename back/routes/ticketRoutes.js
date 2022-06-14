const express = require("express");
const ticketRouter = express.Router();
const { index, show, create, update, destroy } = require("../controllers/ticketController");
const { expressjwt: expressJwt } = require("express-jwt");

const tokenExist = require("../middlewares/tokenExist");
const isAdmin = require("../middlewares/isAdmin");
//RUTAS PUBLICAS
ticketRouter.get("/", index);
ticketRouter.get("/:id", show); //PODRIAMOS MOSTRAR EL NOMBRE DEL PRODUCTO EN VEZ DE EL ID

//RUTAS PRIVADAS
ticketRouter.use(expressJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
//******    Ruta obtener ticket ************ */
// ticketRouter.use(isAdmin);
//******    Ruta crear ticket ************ */
ticketRouter.post("/", create);
ticketRouter.patch("/:id", update);
ticketRouter.delete("/:id", destroy); //IMPLEMENTAR SOFT DELETE

module.exports = ticketRouter;
