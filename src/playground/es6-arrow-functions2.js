// arguments object - no longer bound with arrow functions
// arguments is a built in property for a function that is no
// longer valid when using arrow functions
const add = function (a, b) {
  console.log(arguments)
  return a + b;
};
// This would return an error when printing arguments
const addArrowF = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log("Sum ", add(55, 1), 1001 );

// this keyword - no longer bound
const user = {
  name: 'Oscar',
  cities: ['Miami', 'El Tigre', 'Falls Church'],
  printPlacesLived: function () {
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
    this.cities.forEach( (city) => {
      console.log(this.name, " has lived in ", city);
    });

    return false;
  },
  anotherWay() {
    console.log("This is another valid function");

    const cityMessages = this.cities.map((city) => {
      return this.name + " has lived in " + city + "!";
    });
    return cityMessages;
  }
}
console.log( user.printPlacesLived() );
console.log(user.anotherWay());

// Challenge area
// create object with an array of data and access it using map
const multiplier = {
  numbers: [1,2,3,4,5],
  multiplyBy: 2,
  getNewValues() {
    return this.numbers.map( (n) => n * this.multiplyBy  );
  }
};

console.log(multiplier.getNewValues());
