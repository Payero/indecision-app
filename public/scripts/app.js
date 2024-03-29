'use strict';

// arguments object - no longer bound with arrow functions
// arguments is a built in property for a function that is no
// longer valid when using arrow functions
var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};
// This would return an error when printing arguments
var addArrowF = function addArrowF(a, b) {
  // console.log(arguments);
  return a + b;
};
console.log("Sum ", add(55, 1), 1001);

// this keyword - no longer bound
var user = {
  name: 'Oscar',
  cities: ['Miami', 'El Tigre', 'Falls Church'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    // here the keyword this works
    console.log(this.name);
    console.log(this.cities);

    // here does not work, so nee to use either user or 
    // create a new object such as 'const that = this;'
    this.cities.forEach(function (city) {
      console.log(user.name, " has lived in ", city);
    });

    // another fix is to use an arrow function so it address the 
    // parent object
    this.cities.forEach(function (city) {
      console.log(_this.name, " has lived in ", city);
    });

    return false;
  },
  anotherWay: function anotherWay() {
    var _this2 = this;

    console.log("This is another valid function");

    var cityMessages = this.cities.map(function (city) {
      return _this2.name + " has lived in " + city + "!";
    });
    return cityMessages;
  }
};
console.log(user.printPlacesLived());
console.log(user.anotherWay());

// Challenge area
// create object with an array of data and access it using map
var multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  getNewValues: function getNewValues() {
    var _this3 = this;

    return this.numbers.map(function (n) {
      return n * _this3.multiplyBy;
    });
  }
};

console.log(multiplier.getNewValues());
