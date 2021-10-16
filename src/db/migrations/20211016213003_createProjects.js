exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("project_id").primary(); // sets supplier_id as the primary key
    table.string("project_name");
    table.string("project_bugs");
    table.string("project_members");
    table.string("project_admin");
    table.string("project_added");
    table.timestamp("created_at");
      table.timestamp("updated_at");
      table.integer("createdById").notNullable;
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
