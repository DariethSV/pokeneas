const express = require('express');
const pokemonRoutes = require('./routes/pokemon.routes');

const app = express();

app.use(express.json());

app.use('/', pokemonRoutes);
app.use('/images', express.static(__dirname + '/images'));

module.exports = app;
