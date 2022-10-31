const db = require("./db");

//the below assumes ./index.js
const { Movie, Genre } = require("./");

const getRandomRuntime = () => {
  return Math.floor(50000 + Math.random() * 100000);
};

const movies = [
  {
    name: "Finding Nemo",
    runtime: getRandomRuntime(),
  },
  {
    name: "Scream",
    runtime: getRandomRuntime(),
  },
  {
    name: "Halloween",
    runtime: getRandomRuntime(),
  },
  {
    name: "Texas Chainsaw",
    runtime: getRandomRuntime(),
  },
  {
    name: "Alien",
    runtime: getRandomRuntime(),
  },
  {
    name: "Mario",
    runtime: getRandomRuntime(),
  },
];

const genres = [{ name: "horror" }, { name: "family" }];
const seed = async () => {
  //clear out any old data
  await db.sync({ force: true });

  console.log("CREATING MOVIES...");
  //creates all movies above at the same time instead of running movie.create for each one
  const [movie1, movie2, movie3] = await Promise.all(
    movies.map((movieData) => Movie.create(movieData))
  );
  console.log("DONE CREATING MOVIES...");

  console.log("CREATING GENRES...");
  const [genre1, genre2] = await Promise.all(
    genres.map((genreData) => Genre.create(genreData))
  );
  console.log("DONE CREATING GENRES...");

  console.log({ movie1, genre1 });
  genre1.addMovies([movie1]);
  genre2.addMovies([movie2, movie3]);

  console.log("DONE RUNNING SEED...");
};

seed();
