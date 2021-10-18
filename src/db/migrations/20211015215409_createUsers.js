exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id").primary(); // sets user_id as the primary key
    table.string("username");
    table.string("passwordHash"); 
    table.timestamp("created_at");
    table.timestamp("updated_at"); 
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
