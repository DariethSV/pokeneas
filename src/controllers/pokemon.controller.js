const pokemons = require('../data/pokemons');
const os = require('os');

exports.getRandomPokemon = (req, res) => {
  const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

  const html = `
        <div style="display:flex; justify-content:center; align-items:center; height:100vh; background:#f3f4f6; font-family:sans-serif;">
      <div style="background:white; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0); padding:24px; width:300px; text-align:center;">
        <h2 style="margin:0; color:#333333;">${randomPokemon.name}</h2>
        <p style="color:#6b7280;">ID: ${randomPokemon.id}</p>
        <hr style="margin:12px 0;">
        <p><strong>Height:</strong> ${randomPokemon.height}</p>
        <p><strong>Ability:</strong> ${randomPokemon.ability}</p>
        <p style="font-size:0.9rem; color:#333333;"><strong>Container ID:</strong> ${os.hostname()}</p>
      </div>
    </div>
  `;

  res.type('html').send(html);
};

exports.getRandomPokemonImageAndPhrase = (req, res) => {
  const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

  const html = `
    <div style="display:flex; justify-content:center; align-items:center; height:100vh; background:#f3f4f6; font-family:sans-serif;">
      <div style="background:white; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0); padding:24px; width:300px; text-align:center;">
        <img src="${randomPokemon.image}" alt="${randomPokemon.name}" style="width:150px; margin-bottom:16px;">
        <p><strong>${randomPokemon.phrase}</strong> </p>
        <p style="font-size:0.9rem; color:#333333;"><strong>Container ID:</strong> ${os.hostname()}</p>
      </div>
    </div>
  `;

  res.type('html').send(html);
};



