const User = require("../models/User");

module.exports = async () => {
  await User.deleteMany();
  const users = [];

  const admin = new User({
    firstname: "admin",
    lastname: "admin",
    username: "admin",
    email: "admin@evento.com",
    password: "admin",
    address: "Calle 0 1234",
    telephone: 123456789,
    isAdmin: true,
    orders: [],
    tokens: [],
  });
  users.push(admin);

  const user = new User({
    firstname: "user",
    lastname: "user",
    username: "user",
    email: "user@evento.com",
    password: "user",
    address: "Calle A 1234",
    telephone: 987654321,
    isAdmin: false,
    orders: [],
    tokens: [],
  });
  users.push(user);

  const user2 = new User({
    firstname: "user2",
    lastname: "user2",
    username: "user2",
    email: "user2@evento.com",
    password: "user",
    address: "Calle B 1234",
    telephone: 987654322,
    isAdmin: false,
    orders: [],
    tokens: [],
  });
  users.push(user2);

  await User.create(users);
  console.log("Se corrió el seeder de Usuarios.");
};
