// Game description & release date
exports.up = function(knex) {
  return knex.raw(
    'CREATE TABLE descriptions (' +
      'id SERIAL PRIMARY KEY,' +
      'description TEXT,' +
      'release_date DATE' +
    ')'
  );
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('descriptions');
};
