// Local scope
function localFunction() {
  var localVar = 50;
  console.log(localVar);
}
// call the function
localFunction();

// Global scope
var globalVar = 5;
function newFunction() {
  console.log(globalVar);
}
console.log(globalVar);
newFunction();

// Hoisting
var newVar = 50;
