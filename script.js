'use strict';

/*
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1997 && birthYear <= 2012) {
      var genZ = true;
      //   Creating NEW variable with same name as outer scopes variable
      const firstName = 'Jonas';
      //   Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a generation - z, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(genZ);
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Talha';
calcAge(1998);
*/

// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Talha';
let job = 'teacher';
const year = 1998;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addExpr(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
