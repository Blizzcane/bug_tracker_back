const projectsService = require("./projects.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {

  const projects = await projectsService.list();
  res.json({ data: projects });
}

module.exports = {
  list,
};
