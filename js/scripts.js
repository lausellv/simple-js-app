//I started doing this but then I realized I can include the empty objects in the array and modify them afterward.  
// the exercise calls for an empty array so I created one that's empty bc the objects haven't been defined.



// IN the end I opted out for the following formula. Seems much easier. 

// let pokemonList = [
//   { name: {}}, { type: {}}, {height:{}}, 
//   { name: {}}, { type: {}}, {height:{}},
//   { name: {}}, { type: {}}, {height:{}},
// ];

// // Now I have to add names, types and height to these pokemons  (searched for them on https://pokedex.org/.)
// pokemonList[0].name = 'Bulbasaur'
// pokemonList[1].name = 'Ivysaur'
// pokemonList[2].name = 'Charizard'
// // Lets add the type
// pokemonList[0].type = ["grass", 'poison']
// pokemonList[1].type = ["grass", 'poison']
// pokemonList[2].type = ["fire", 'flying']
// // lets add the height  // these height values were string values but I needed number variables (since I don't know how to use parseInt function yet I decided to reassign these values as numeric ones that can be used with the conditional for loop and the if else statement)
// pokemonList[0].height = 0.7
// pokemonList[1].height = 1
// pokemonList[2].height = 1.7

// Hey Victor,

// All of your options are valid options, but I do notice that you wrote a lot of code that could be indeed simplified, a lot of times though, the style of writing code is very subjective and depends on the project guidelines, but i'll show you the approach I would have taken and why.

// First we start with a completely empty array
let pokemonList = []; // no need to add anything now

// Then we can use the Array.push function to add things
pokemonList.push({
  name: 'Bulbasaur',
  type: ["grass", 'poison'],
  height: 0.7
});

pokemonList.push({
  name: 'Ivysaur',
  type: ["grass", 'poison'],
  height: 1
});

pokemonList.push({
  name: 'Charizard',
  type: ["fire", 'flying'],
  height: 1.7
});


// then repeat for each pokemon



 // now , I can use i < pokemonList.length :-) before I wasn't able bc It went through nine loops . I had to use i>0 instead
  
 for (let i = 0; i< pokemonList.length; i++){
   if (pokemonList[i].height <= 1) {
   document.write(pokemonList[i].name + ': (type:' + pokemonList[i].type + '), ' +'(height: ' + pokemonList[i].height +'m)'+ ' - That\'s small. ' + "<br>");
    // document.write("<br>"); no need to have it in a separate code line
     console.log(pokemonList[i].name + ': (type:' + pokemonList[i].type + '), ' +'(height: ' + pokemonList[i].height +'m)'+ ' - That\'s small. ');
}
  else {
    document.write(pokemonList[i].name + ': (type:' + pokemonList[i].type + '), ' + '(height: ' + pokemonList[i].height +'m)'+ ' - Wow, that\'s tall!');
    console.log(pokemonList[i].name + ': (type:' + pokemonList[i].type + '), ' + '(height: ' + pokemonList[i].height +'m)'+ ' - Wow, that\'s tall!');
}
}


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

// // now I went ahead and entered the info; however, the height values are strings and cannot be used now for JS 1.3 (for loop)

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
// for (var i=0; i<3; i++ ){
  
//   console.log(pokemonList[i].name + ' ' + ' (' + 'type:' + pokemonList[i].type + ') '
//    + '(' + 'height:' + pokemonList[i].height + ')' );
//    document.write('\\ ' + pokemonList[i].name + ' ' + ' (' + 'type:' + pokemonList[i].type + ') '
//    + '(' + 'height:' + pokemonList[i].height + ')  ');

// }

// final try worked it out in repl.it (https://repl.it/join/knoskiui-lausellv)
// for (let i = 0; i< 3; i++){
//   if (pokemonList[i].height <= 1) {
//   document.write(pokemonList[i].name + ': (type:' + pokemonList[i].type + '), ' +'(height: ' + pokemonList[i].height +'m)'+ ' - That\'s small. ' + "<br>");
//    // document.write("<br>"); no need to have it in a separate code line
//     console.log(pokemonList[i].name + ': (type:' + pokemonList[i].type + '), ' +'(height: ' + pokemonList[i].height +'m)'+ ' - That\'s small. ');
// }
// else {
//  document.write(pokemonList[i].name + ': (type:' + pokemonList[i].type + '), ' + '(height: ' + pokemonList[i].height +'m)'+ ' - Wow, that\'s tall!');
//  console.log(pokemonList[i].name + ': (type:' + pokemonList[i].type + '), ' + '(height: ' + pokemonList[i].height +'m)'+ ' - Wow, that\'s tall!');
// }
// }