//I started doing this but then I realized I can include the empty objects in the array and modify them afterward.  
// the exercise calls for an empty array so I created one that's empty bc the objects haven't been defined.



// IN the end I opted out for the following formula. Seems much easier. 

let pokemonList = [
  { name: {}}, { type: {}}, {height:{}}, 
  { name: {}}, { type: {}}, {height:{}},
  { name: {}}, { type: {}}, {height:{}},
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

// //version 2
// // Another possible way could be to create three empty objects (one for each pokemon)

// let pokemon1 = {
//    name: {},
//    type: {},
//    height: {}
//  };

//  let pokemon2 = {
//   name: {},
//   type: {},
//   height: {}
// };

// let pokemon3 = {
//   name: {},
//   type: {},
//   height: {}
// };

// //in order to create an array of empty objects
// let pokemonListVersB = [pokemon1, pokemon2, pokemon3];

// // now I went ahead and entered the info

// pokemonListVersB[0].name = 'Charmeleon'
// pokemonListVersB[0].type = 'fire'
// pokemonListVersB[0].height = '1.1m'

// pokemonListVersB[1].name = 'Butterfree'
// pokemonListVersB[1].type = 'bug', 'flying'
// pokemonListVersB[1].height = '1.1m'

// pokemonListVersB[0].name = 'Rattata'
// pokemonListVersB[0].type = 'normal'
// pokemonListVersB[0].height = '0.3m'


// var firstNumber = 3;
// var secondNumber = 7;
// var total = Number(firstNumber)+Number(secondNumber);
// alert(total);

// var firstNumber = prompt('Enter first number');
// var secondNumber = prompt('Enter second number');
// var total = Number (firstNumber)+ Number(secondNumber);
// alert(total);


// JavaScript Basics 1.3 part 2

//first try
// for (var i=0; i<pokemonList.length; i++ ){
//   alert(pokemonList[i].name + ' ' + '('+ 'height:' + height + ')');

// }
// second try.  changed to i<3
for (var i=0; i<3; i++ ){
  
  console.log(pokemonList[i].name + ' ' + ' (' + 'type:' + pokemonList[i].type + ') '
   + '(' + 'height:' + pokemonList[i].height + ')' );
   document.write('\\ ' + pokemonList[i].name + ' ' + ' (' + 'type:' + pokemonList[i].type + ') '
   + '(' + 'height:' + pokemonList[i].height + ')  ');

}