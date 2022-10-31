//master file that wraps everything together
const db = require("./db");
const Movie = require("./Movies");
const Genre = require("./Genres");

//after creating association, link tables together in seed
Movie.belongsTo(Genre);
Genre.hasMany(Movie);

module.exports = {
  db,
  Movie,
  Genre,
};
