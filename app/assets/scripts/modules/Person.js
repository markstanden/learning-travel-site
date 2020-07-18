/* Constructor Function */

/* function Person(name, favCol) {
  this.name = name;
  this.favCol = favCol;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and my favourite colour is ${this.favCol}.`);
  };
} */

/* Class syntax */

class Person {
  constructor(name, favCol) {
    this.name = name;
    this.favCol = favCol;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and my favourite colour is ${this.favCol}.`);
  }
}

export default Person;

/* 
class Adult extends Person {
  payTaxes() {
    console.log(`${this.name} owes 0 in taxes`);
  }
}

let john = new Person('Johnny', 'purple');
john.greet();

let jane = new Adult('Jane', 'red');
jane.greet();
jane.payTaxes(); */
