// Game-developers join table, since a game can have multiple developers.
exports.up = function(knex) {
  return knex.raw(
    'CREATE TABLE game_join_companies (' +
      'id SERIAL PRIMARY KEY,' +
      'id_game INTEGER NOT NULL CONSTRAINT game_id_range CHECK(id_game >= 1 AND id_game <= 100),' +
      'id_developer INTEGER REFERENCES companies(id),' +
      'id_publisher INTEGER REFERENCES companies(id),' +
      'id_platform INTEGER REFERENCES platforms(id)' +
    ')'
  );
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('game_join_companies');
};
