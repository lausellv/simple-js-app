
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



//JS 1.5 Part 2 
document.write('<h3>==== JS 1.5 Part 2 IIFE=======</h3>');

var pokemonRepository = (function () {
  var pokemonList =[{
  name: 'Bulbasaur',
  type: ["grass", 'poison'],
  height: 0.7
},{
  name: 'Ivysaur',
  type: ["grass", 'poison'],
  height: 1
}, {
  name: 'Charizard',
  type: ["fire", 'flying'],
  height: 1.7
} ];

var butterfree = {name: 'Butterfree',type: ['bug', 'flying'], height: 1.1}; 
//pokemonRepository+= (add(butterfree));
add(butterfree);
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll () {
    return pokemonList;
  }
  // pokemonList.forEach(function(property) {
  //   console.log(pokemonList.name);
  //   console.log(butterfree);});
    
  return {
    add: add,
    getAll: getAll, 
  };

}());


//console.log (pokemonRepository.getAll());  // this returns the array in the console
//document.write(pokemonRepository.getAll());  // this returns [object Object],[object Object],[object Object],[object Object]


  var pokemons = [
    {name: 'Charmeleon',
   type: 'fire',
     height: 1.1
   }, {name:'Rattata',
   type: 'normal',
   height: 0.3}];
  
   console.log(pokemons);  // this won't come out on repl. but it does on the web console.

   var pokemon1 = 
   {name: 'Charmeleon',
  type: 'fire',
    height: 1.1
  };

  var pokemon2 = {name:'Rattata',
  type: 'normal',
  height: 0.3};
 // I can't figure out how to add an array (pokemons) to the list so I went ahead and did so as two separate objects (pokemon1 and pokemon2)
  pokemonRepository.add(pokemon1);
  pokemonRepository.add(pokemon2);

  // I would like to print out a list of the pokemons 
  pokemonRepository.getAll().forEach(function(keys){
    if (keys.height <=1) {
      document.write ('<p>Name: '+ keys.name + ': Type: ' + keys.type + ',' + ' Height: ' + keys.height + 'm - That\'s small. ' + "</p>");
    }  else {
      document.write ('<p>Name: '+ keys.name + ': Type: ' + keys.type + ',' + ' Height: ' + keys.height + 'm - That\'s tall. ' + "</p>");
    }
    document.write('<p>  </p>');
  });






