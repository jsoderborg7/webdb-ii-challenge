
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 2345433, make: "Honda", model: "CRV", mileage: 23432, transmission: null, titleStatus: null},
        {VIN: 2347654, make: "Hyundai", model: "Sonata", mileage: 85743, transmission: null, titleStatus: null}
      ]);
    });
};
