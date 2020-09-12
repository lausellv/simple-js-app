//I started doing this but then I realized I can include the empty objects in the array and modify them afterward.  
// the exercise calls for an empty array so I created one that's empty bc the objects haven't been defined.

// let pokemonDescription = {
//   name: {},
//   type: {},
//   height: {}
// };

// IN the end I opted out for the following formula. Seems much easier. 

let pokemonList = [
  { name: {}}, { type: {}}, {height:{}}, 
  { name: {}}, { type: {}}, {height:{}},
  { name: {}}, { type: {}}, {height:{}}
];

// Now I have to add names, types and height to these pokemons  (searched for them on https://pokedex.org/.)
pokemonList[0].name = 'Bulbasaur'
pokemonList[1].name = 'Ivysaur'
pokemonList[2].name = 'Charizard'
// Lets add the type
pokemonList[0].type = ["grass", 'poison']
pokemonList[1].type = ["grass", 'poison']
pokemonList[2].type = ["fire", 'flying']
// lets add the height
pokemonList[0].height = '0.7m'
pokemonList[1].height = '1m'
pokemonList[2].height = '1.7m'






