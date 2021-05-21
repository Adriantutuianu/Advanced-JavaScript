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

// Hoisting-moving variable declaration to the top
var newVar = 50;

// String - sequence of characters
var newSTr = "Hey! I am a string.";
