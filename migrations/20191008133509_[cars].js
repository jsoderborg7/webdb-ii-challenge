
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
    tbl.increments();
    tbl.integer('VIN number').notNullable();
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.boolean('transmission type');
    tbl.string('title status');
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
