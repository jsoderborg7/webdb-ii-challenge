exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
    tbl.increments();
    tbl.integer('VIN').notNullable();
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.integer('mileage').notNullable();
    tbl.boolean('transmission');
    tbl.string('titleStatus');
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
