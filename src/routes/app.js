const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/app')

router.get('/', getAllMovies)
router.get('/:id', getMovieById)
router.put('/:id', editMovie)
router.post('/', createMovie)
router.delete('/:id', deleteMovie)

module.exports = router
