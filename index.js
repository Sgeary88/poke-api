function getRandomIdNumber() {
	return Math.floor((Math.random() * 255) + 1);
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// function getPokemon(pokeId) {
// 	fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
// 		.then(response => response.json())
// 		.then(data => { 
// 			document.querySelector('.pokemonBox').innerHTML = `
// 			<div>
// 			<img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
// 			</div>
// 			<div class="pokemonInfo">
// 			<h1>${capitalizeFirstLetter(data.name)}</h1>
// 			<p>Type: ${capitalizeFirstLetter(data.types[0].type.name)}</p>
// 			<p>Weight: ${data.weight}</p>
// 			</div>
// 			`
// 			console.log(data);
// 		}).catch(error => {
// 			console.log('Pokemon not found', error);
// 		});
// }

// getPokemon(getRandomIdNumber());




	// -JS Framework- fetching data from api, display array, display at 3 values of the api(name, base xp, height)

	// - html has to be created programmatically. 

	// - function to add favorites to a list 

	// - function to remove item from favorites, item then added back to array

	// - function to sort favorites a-z, z-a 

	// - function to sort favorites by type of pokemon

