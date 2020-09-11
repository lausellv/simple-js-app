let myName = 'Bob';
myName = "Victor";
document.write(myName);
alert(myName);

// let size = 100;
// let doubleSize = size * 2;
// document.write(doubleSize);

let size = 100;
let doubleSize = size * 2;
let minSize = (doubleSize * 2) - (size / 2);
// document.write(minSize);
document.write(doubleSize);

let favoriteFood = "Spinach";
document.write(favoriteFood);

let color ="red";
document.write(color);

let text1 = 'This is a text!';
let text2 = "This uses double quotes.";
document.write(text2);

let person = {
    name: 'Victor',
    age: 52,
};
let annesAge = 27;
let anne = {
  name: 'Anne',
  age: annesAge,
  child: {
    name: 'Joe',
    age: 2
  }
};
anne.name = 'Victor';
console.log(anne);



