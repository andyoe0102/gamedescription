const faker = require('faker');

/**
 * Generate 100 game descriptions with release dates
 * @returns {Array} array of game description objects for seeding
 */
const generateGameDesc = () => {
  // Generate an array of game ids 1-100
  let descriptions = new Array(100).fill(0).map((_, idx) => idx + 1);

  // Map generated game id array into object for db seeding
  let msIn10Years = 1000 * 60 * 60 * 24 * 365 * 10;
  descriptions = descriptions.map(id => {
    let descObj = { id };
    descObj.description = faker.fake('{{lorem.paragraph}} {{lorem.paragraph}}');
    // Gets a random millisecond date value between now and 10 years ago,
    // converts to Date object, then transforms into human-readable ISOString (i.e. 2020-06-30T00:00:00.000Z)
    descObj.release_date = new Date(Date.now() - Math.floor(Math.random() * msIn10Years)).toISOString();
    return descObj;
  });
  return descriptions;
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('descriptions').del()
    .then(() => {
      // Inserts seed entries
      return knex('descriptions').insert(generateGameDesc());
    });
};
