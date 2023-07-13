const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  database: "todoapp",
  port: 5432,
  username: "mac4567",
  password: "1234",
  dialect: "postgres",
});

module.exports = db;