// Companies that either develop or public games
exports.up = function (knex) {
  return knex.raw(
    'CREATE TABLE companies (' +
      'id SERIAL PRIMARY KEY,' +
      'company VARCHAR(50)' +
    ')'
  );
};

exports.down = function (knex) {
  return knex.raw('DROP TABLE IF EXISTS companies CASCADE');
};
