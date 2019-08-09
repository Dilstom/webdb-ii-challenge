exports.seed = function(knex) {
 // Deletes ALL existing entries
 return knex('cars')
  .truncate()
  .then(function() {
   // Inserts seed entries
   return knex('cars').insert([
    {
     VIN: '23DFDS78998',
     make: 'Mercedes',
     model: 'C-class',
     mileage: '15000',
    },
    {
     VIN: '23DFDS789HJKl',
     make: 'BMW',
     model: 'x5',
     mileage: '49000',
    },
    {
     VIN: '23YHEIWOR899090',
     make: 'BMW',
     model: 'i8',
     mileage: '32000',
    },
   ]);
  });
};
