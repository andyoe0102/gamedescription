// Development platforms (Windows, Mac, Linux) that games are made for
exports.up = function(knex) {
  return knex.raw(
    'CREATE TABLE platforms (' +
      'id SERIAL PRIMARY KEY,' +
      'platform VARCHAR(10)' +
    ')'
  );
};

exports.down = function(knex) {
  return knex.raw('DROP TABLE IF EXISTS platforms CASCADE');
};
