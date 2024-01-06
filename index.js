const featuredContainer = document.querySelector(".featured-cards");

let allPokemon = [];

fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  .then((res) => res.json())
  .then((data) => {
    allPokemon = data.results;
    console.log(allPokemon);
    createCards(allPokemon);
  });

function getRandomIdNumber() {
  return Math.floor(Math.random() * 151 + 1);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// function createCards(data) {
//   let pokeImg = data.sprites.other["official-artwork"].front_default;
//   let name = data.name;
//   let weight = data.weight;
//   return (document.querySelector(".featured-cards").innerHTML = `
// 	<div class="card">
// 			<div class="card-image">
// 				<img src="${pokeImg}" alt="${name}">
// 			</div>
// 			<div class="card-info">
// 				<h3>${capitalizeFirstLetter(name)}</h3>
// 				<p>${capitalizeFirstLetter(data.types[0].type.name)}</p>
// 			</div>
// 		</div>
// 	`);
// }

async function getPokemon(pokeId) {
  try {
    const [pokemon, pokemonSpecies] = await Promise.all([
      fetch(`https://pokeapi.co.api/v2/pokemon/${pokeId}`).then((res) =>
        res.json()
      ),
      fetch(`https://pokeapi.co.api/v2/pokemon-species/${pokeId}`).then((res) =>
        res.json()
      ),
    ]);
    return true;
  } catch (error) {
    console.error("Failed to fetch Pokemon");
  }
}

function createCards(pokemon) {
  featuredContainer.innerHTML = "";

  pokemon.slice(0, 6).forEach((pokemon) => {
    const pokemonId = pokemon.url.split("/")[6];
    const cardItem = document.createElement("div");

    cardItem.className = "card";
    cardItem.innerHTML = `
			<div class="card-image">
				<img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg" alt="${
      pokemon.name
    }"/>
			</div>
			<div class="card-info">
			<h3>${capitalizeFirstLetter(pokemon.name)}</h3>
			<p>${capitalizeFirstLetter(pokemonId.types[1].type.name)}</p>
			</div>
		`;

    featuredContainer.appendChild(cardItem);
  });
}

// getPokemon(getRandomIdNumber());

// -JS Framework- fetching data from api, display array, display at 3 values of the api(name, base xp, height)

// - html has to be created programmatically.

// - function to add favorites to a list

// - function to remove item from favorites, item then added back to array

// - function to sort favorites a-z, z-a

// - function to sort favorites by type of pokemon
