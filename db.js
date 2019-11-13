const Sequelize = require("sequelize");

const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseURL, { logging: false });

db.sync()
  .then(() => console.log("Database connected"))
  .catch(console.error);

console.log("Connected to db.js");

module.exports = db;
