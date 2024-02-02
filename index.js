const featuredContainer = document.querySelector(".featured-cards");

function getRandomIdNumber() {
  return Math.floor(Math.random() * 151 + 1);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getPokemon(pokeId) {
  try {
    const [pokemon] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).then((res) =>
        res.json()
      ),
    ]);
    return {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.map((type) => type.type.name),
    };
  } catch (error) {
    console.error("Failed to fetch Pokemon");
  }
}

async function fetchAndCreateFeaturedCards() {
  try {
    const pokemonData = await Promise.all(
      Array.from({ length: 6 }, () => getPokemon(getRandomIdNumber()))
    );

    createCards(pokemonData);
  } catch (error) {
    console.error("Failed to fetch Pokemon data", error);
  }
}

fetchAndCreateFeaturedCards();

// Displays pokemon cards
function createCards(pokemonData) {
  featuredContainer.innerHTML = "";

  pokemonData.forEach((pokemon) => {
    const cardItem = document.createElement("div");

    cardItem.className = "card";
    cardItem.innerHTML = `
    <div class="card-image-wrapper">
      <div class="card-image">
				<img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${
          pokemon.id
        }.svg" alt="${pokemon.name}"/>
        </div>
			</div>
			<div class="card-info">
			<h3>${capitalizeFirstLetter(pokemon.name)}</h3>
			<p>${capitalizeFirstLetter(pokemon.types[0])}</p>
			</div>
    `;

    featuredContainer.appendChild(cardItem);
  });
}

// - function to add favorites to a list

// - function to remove item from favorites, item then added back to array

// - function to sort favorites a-z, z-a

// - function to sort favorites by type of pokemon
