const express = require("express");
const router = express.Router();

//curly braces below dives into object from index.js that was exported, and extracts 'Movie'
//need to require genre for the 'include'
const { Movie, Genre } = require("../db");

//localhost:3000/api/movies/
router.get("/", async (req, res) => {
  const movies = await Movie.findAll();
  res.send(movies);
});

//localhost:3000/api/movies/:ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await Movie.findByPk(id, {
    includes: [Genre],
  });
  res.send(movie);
});

module.exports = router;
