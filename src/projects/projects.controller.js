const service = require("./projects.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const projects = await service.list();
  res.json({ data: projects });
}

function validateBody(req, res, next) {
  console.log("validating body", req.body.data);

  if (!req.body.data) {
    return next({ status: 400, message: "Body must include a data object" });
  }
  next();
}

async function create(req, res) {
  console.log("creating project", req.body.data);

  const response = await service.create(req.body.data);
  console.log("create", response.body);
  res.status(201).json({ data: response[0] });
}

module.exports = {
  list,
  create,
};
