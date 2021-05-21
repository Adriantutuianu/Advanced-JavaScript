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
  globalVar = 6;

  console.log(globalVar);
}
console.log(globalVar);
newFunction();

// Hoisting-moving variable declaration to the top
var newVar = 50;

// String - sequence of characters
var newString = "Hey! I am a string.";

// Lenght of the string
var newStr = "Hey String";
var strLenght = newStr.length;
document.write(newStr);
// Joining two strings -concat
var string1 = "Hey";
var string2 = "String";
var string3 = string1.concat(string2);
console.log("String lenght : " + strLenght);
// Substring
var myString = "I am in love with Strings.";
// This will extract a string from the variable from position 5 upto length 7
myString.substr(5, 7);
// The above snippet will return "in love" - space is a character as well .
document.write("<br>");
// Converting string to uppercase and lowercase
var myString = "Don`t mess with my case!.";
myString.toUpperCase();
document.write(myString);

myString.toLowerCase(); //Convert to lowercase
