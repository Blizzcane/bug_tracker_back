exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("project_id").primary(); // sets project_id as the primary key
    table.string("project_name");  
    table.timestamp("created_at");
    table.timestamp("updated_at");
    table.integer("createdById").notNullable;
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
