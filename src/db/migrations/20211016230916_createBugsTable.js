exports.up = function (knex) {
  return knex.schema.createTable("bugs", (table) => {
    table.increments("bug_id").primary(); // sets user_id as the primary key
    table.string("title");
    table.string("description");
    table.string("priority");
    table.integer("project_id");
    table
      .foreign("project_id")
      .references("project_id")
      .inTable("projects")
      .onDelete("SET NULL");
    table.boolean("isResolved").defaultTo(false);
    table.timestamp("created_at");
    table.integer("createdById");
    table.timestamp("updatedAt");
    table.integer("updatedById"); 
    table.timestamp("closedAt");
    table.integer("closedById");
    table.timestamp("reopenedAt");
    table.integer("reopenedById");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("bugs");
};
