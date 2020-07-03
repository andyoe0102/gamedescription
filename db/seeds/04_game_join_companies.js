/**
 * Generate 1-3 developers for each game with platform ids that are not repeated for the same game
 * @returns {Array} array of game developer objects for seeding
 */
const generateGameJoinCompanies = () => {
  // Generate an array of game ids 1-100
  let seedObjs = new Array(100).fill(0).map((_, idx) => idx + 1);

  // Repeat each game id between 1 to 3 times
  seedObjs = seedObjs.map(id => new Array(Math.ceil(Math.random() * 3)).fill(id));

  // Attach id_developer or id_platform to gameJoinCompany objects
  let primaryKey = 0;
  seedObjs = seedObjs.map(idArr => {
    let platformIds = [1, 2, 3];
    // Map array of ids into array of id_game objects and primary key ids
    let gameJoinDevObjs = idArr.map(id_game => ({ id: ++primaryKey, id_game }));
    gameJoinDevObjs.forEach(obj => {
      // 20 possible companies for development and publishing
      obj.id_developer = Math.ceil(Math.random() * 20);
      obj.id_publisher = Math.ceil(Math.random() * 20);

      // 3 possible platforms, but must be unique per game
      let randIdx = Math.floor(Math.random() * platformIds.length);
      obj.id_platform = platformIds[randIdx];
      platformIds.splice(randIdx, 1);
    });
    return gameJoinDevObjs;
  });

  return seedObjs.flat();
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('game_join_companies').del()
    .then(() => {
      // Inserts seed entries
      return knex('game_join_companies').insert(generateGameJoinCompanies());
    });
};
