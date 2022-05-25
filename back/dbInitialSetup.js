module.exports = async () => {
  // Crear tablas:
  console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/userSeeder")();
  await require("./seeders/eventSeeder")();
  await require("./seeders/ticketSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
