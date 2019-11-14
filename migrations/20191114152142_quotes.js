
exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('quote').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('quotes')
};
