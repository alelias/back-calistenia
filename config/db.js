//const Sequelize  = require('sequelize');
const Sequelize = require("sequelize-cockroachdb");

const db = new Sequelize({
  dialect: "postgres",
  username: "alelias",
  password: "QwwMfvdolynKEwG7",
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: 26257,
  database: "noisy-frog-5136.calisteniaapp",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

module.exports = db;