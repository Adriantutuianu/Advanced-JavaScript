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
var newStr = "Hey! I am a string.";

// Lenght of the string
var newStr = "Hey String";
var strLEnght = newStr.length;

// Joining two strings -concat
var string1 = "Hey";
var string2 = "String";
var string3 = string1.concat(string2);

// Substring
var myString = "I am in love with Strings.";
// This will extract a string from the variable from position 5 upto length 7
myString.substr(5, 7);
// The above snippet will return "in love" - space is a character as well .
