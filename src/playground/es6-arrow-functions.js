const square = function (x) {
  return x * x;
};

const squareArrow = (x) => {
  return x * x;
};

// error (single) function expression syntax
const squareExpress = (x) => x * x;

console.log("The Square:         ", square(8) );
console.log("The Square Arrow:   ", squareArrow(8));
console.log("The Square Express: ", squareExpress(8));

// Challenge - Use arrow functions
// getFirstName

const getFirstName = (fullname ) => fullname ? fullname.split(' ')[0] : undefined;

console.log("Getting Firstname ", getFirstName("Oscar Ganteaume"));
console.log("Getting Firstname ", getFirstName(undefined));