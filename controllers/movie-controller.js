const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Movie = sequelize.import('../models/movie');
// const validateSession = require('../middleware/validate-session');

//Get all
router.get('/viewmovies', (req, res) => {
   Movie.findAll()
       .then(movies => res.status(200).json(movies))
       .catch(err => res.status(500).json({ error : err}))
});

router.post('/addmovie', (req, res) => {
   const newMovie = {
       name : req.body.name,
       rating : req.body.rating,
       genre : req.body.genre,
       contentrating : req.body.contentrating,
       runtime : req.body.runtime,
       description : req.body.description,
   }




   Movie.create(newMovie)
       .then(movie => res.status(200).json(movie))
       .catch(err => res.status(500).json({ error : err}))
});


// Broken Code Challenge (Solved)

router.get('/movies/:id', (req, res) => {
    Movie.findOne({where: { id: req.params.id }})
    .then(movie => res.status(200).json(movie))
    .catch(err => res.status(500).json({error: err}))
});


router.put('/editmovies/:name', (req, res) => {
    Movie.update(req.body, {where: { name: req.params.name }})
    .then(movie => res.status(200).json(movie))
    .catch(err => res.status(500).json({ error: err}))
});

router.delete('/xmovie/:name', (req, res) => {
    Movie.destroy({ where : { name : req.params.name }})
    .then(recChanged => res.status(200).json(recChanged))
    .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;
