console.log("Running ES6");

var nameVar = "Oscar";
console.log('Name ', nameVar);

let nameLet = 'Monika';
nameLet = 'New Value';
console.log('Name Let: ', nameLet);

const nameConst = "John";
console.log("NameConst: ", nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

var fullName = "Gabe Ganteaume";

if( fullName ) {
  var firstName = fullName.split(' ')[0];
  console.log('The Fist name ', firstName);
}

// const and let does not work, they are block defined but var is not
console.log("I can Still access first name ", firstName)