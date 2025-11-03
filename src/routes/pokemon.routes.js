const express = require('express');
const router = express.Router();
const { getRandomPokemon, getRandomPokemonImageAndPhrase } = require('../controllers/pokemon.controller');

router.get('/pokemon/random', getRandomPokemon);
router.get('/pokemon/random/image', getRandomPokemonImageAndPhrase);

module.exports = router;
