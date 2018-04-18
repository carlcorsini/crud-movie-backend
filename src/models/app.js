const db = require('../../db')
const uuid = require('uuid/v4')
const path = require('path')

getAllMovies = () => {
  return db('movie').then(movies => {
    return movies
  })
}

getMovieById = id => {
  return db('movie').where('id', id)
}

editMovie = (id, title, director, year, rating, imageUrl) => {
  return db('movie')
    .where('id', id)
    .update('title', title)
    .update('director', director)
    .update('year', year)
    .update('rating', rating)
    .update('image_url', imageUrl)
    .then(result => {
      return db('movie').where('id', id)
    })
}

createMovie = (title, director, year, rating, image_url) => {
  return db('movie')
    .insert({
      title,
      director,
      year,
      rating,
      image_url
    })
    .then(result => {
      return db('movie')
    })
}

deleteMovie = id => {
  return db('movie')
    .where('id', id)
    .del()
    .then(result => {
      return db('movie')
    })
}

module.exports = {
  getAllMovies,
  getMovieById,
  editMovie,
  createMovie,
  deleteMovie
}
