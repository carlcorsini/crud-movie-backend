const model = require('../models/app')

getAllMovies = (req, res, next) => {
  let promise = model.getAllMovies(req.query.limit)

  promise.then(movies => {
    res.status(200).json({
      movies,
      message: 'all movies returned succesfully'
    })
  })
}

getMovieById = (req, res, next) => {
  let promise = model.getMovieById(req.params.id)

  promise.then(movie => {
    res.status(200).json({
      movie,
      message: 'movie'
    })
  })
}

editMovie = (req, res, next) => {
  let promise = model.editMovie(
    req.params.id,
    req.body.title,
    req.body.director,
    req.body.year,
    req.body.rating,
    req.body.imageUrl
  )

  promise.then(result => {
    res.status(200).json({
      result,
      message: `Movie of ID: ${req.params.id} updated`
    })
  })

  promise.catch(error => {
    res.status().json()
  })
}

createMovie = (req, res, next) => {
  let promise = model.createMovie(
    req.body.title,
    req.body.director,
    req.body.year,
    req.body.rating,
    req.body.imageUrl
  )

  promise.then(result => {
    res.status(201).json({
      result,
      message: `Movie titled ${req.params.title} created`
    })
  })

  promise.catch(error => {
    res.status().json()
  })
}

deleteMovie = (req, res, next) => {
  let promise = model.deleteMovie(req.params.id)

  promise.then(result => {
    res.status(200).json({
      result,
      message: `Movie id:${req.params.id} deleted`
    })
  })

  promise.catch(error => {
    res.status().json()
  })
}

module.exports = {
  getAllMovies,
  getMovieById,
  editMovie,
  createMovie,
  deleteMovie
}
