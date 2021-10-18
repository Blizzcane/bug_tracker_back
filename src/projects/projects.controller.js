const projectsService = require("./projects.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


function list(req, res) {
    res.json({ data: projects });
  }


module.exports = {
    list
  };