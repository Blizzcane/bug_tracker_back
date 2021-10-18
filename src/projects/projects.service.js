const knex = require("../db/connection");


function list() {
  return knex("projects").select("*");
}

module.exports = { list };
