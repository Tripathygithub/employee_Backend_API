const express = require('express');
const { resolve } = require('path');
let { getAllMovies, getMovieById, addNewMovie } = require('./movie.js');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/movies', (req, res) => {
  let result = getAllMovies();
  res.json(result);
});

app.get('/api/movies/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let result = getMovieById(id);
  res.json(result);
});

app.post('/movies/add', (req, res) => {
  let movie = req.body;
  res.json(addNewMovie(movie));
});

module.exports = app;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
