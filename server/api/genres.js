const express = require("express");
const router = express.Router();

//curly braces below dives into object from index.js that was exported, and extracts 'Movie'
//need to require genre for the 'include'
const { Movie, Genre } = require("../db");

//localhost:3000/api/genres/
//list of all genres
router.get("/", async (req, res) => {
  const genres = await Genre.findAll();
  res.send(genres);
});

//localhost:3000/api/genres/:ID
////list of specific genres
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const genre = await Genre.findByPk(id, {
    includes: [Movie],
  });
  res.send(genre);
});

module.exports = router;
