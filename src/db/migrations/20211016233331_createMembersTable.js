exports.up = function (knex) {
  return knex.schema.createTable("members", (table) => {
    table.increments("member_id").primary(); // sets member_id as the primary key
    table.integer("project_id");
    table
      .foreign("project_id")
      .references("project_id")
      .inTable("projects")
      .onDelete("SET NULL");
    table.timestamp("joinedAt");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("members");
};
