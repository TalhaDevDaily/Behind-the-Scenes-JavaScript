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

/*
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
*/

// The this keyword in Practice
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1998);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1998);
*/

/*
const talha = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
talha.calcAge();

const jonas = {
  year: 1991,
};

jonas.calcAge = talha.calcAge;
jonas.calcAge();

const f = talha.calcAge;
// f();
*/

// Regular Functions vs. Arrow Functions
// var firstName = 'Jonas';

const talha = {
  firstName: 'Talha',
  year: 1998,
  calcAge: function () {
    // console.log(this);
    // console.log(2037 - this.year);

    /*
    // Solution 1
    const self = this; // self or that
    const isGenZ = function () {
      console.log(self);
      console.log(self.year >= 1997 && self.year <= 2012);
      console.log(this.year >= 1997 && this.year <= 2012);
    };
    */

    // Solution 2
    const isGenZ = () => {
      // console.log(this);
      // console.log(this.year >= 1997 && this.year <= 2012);
    };
    isGenZ();
  },
  greet: function () {
    // console.log(this);
    // console.log(`Hey my name is ${this.firstName}`);
  },
};
// talha.greet();
talha.calcAge();

// Arguements keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow();
