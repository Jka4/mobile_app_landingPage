'use strict';

const fetchButton = document.querySelector('#getPokemon');

async function getRandomPokemon() {
  const rawPokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 807)}/`);
  const pokemonData = await rawPokemonData.json();

  // console.log(pokemonData);

  addPokemonToThePage(pokemonData);
}

const addPokemonToThePage = (pokemonData) => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('span');
  const order = document.createElement('span');
  const exp = document.createElement('span');

  div.className = 'pokemonCard';

  image.src = pokemonData.sprites.front_default;
  name.innerHTML = pokemonData.name;
  order.innerHTML = pokemonData.order;
  exp.innerHTML = pokemonData.base_experience;

  // console.log(div);

  div.append(image, name, order, exp);

  const container = document.querySelector('.cardsContainer');
  container.appendChild(div);
};

fetchButton.addEventListener('click', getRandomPokemon);
