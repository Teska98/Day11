// Create a myPetsArray here
myPetsArray=["Dog", "Cat"];
// End of myPetsArray array

function myArrayFunction(myPets) {
 var myNewPets = [...myPets];
  // Only change code below this line
  myNewPets.unshift("Lion");
  var firstPet = myNewPets[0];
  var lastPet = myNewPets[2];
  // Only change code above this line
}

console.log(myArrayFunction(myPets));
module.exports = myArrayFunction;
