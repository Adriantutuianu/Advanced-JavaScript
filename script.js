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

// Numbers
var height = 5.62;
var age = 19;

// Rounding off the numbers
// Example: To round off 3.142 upto two digits we write:
var myNum = 3.142;
myNum.toFixed(2);
document.write(myNum);

document.write("<br>");

// Converting a number to a string
var myNum = 456;
myNum.toString();
document.write(myNum);

// Boolean variable
var myBool = true;
var newBool = false;

// Object literal
var Student = {
  // first item
  name: "Rahul",
  // second item
  class: 10,
  // third item
  roll_no: 45,
};

// Operations on date
var myDate = new Date(); // instance of the object
myDate.getFullYear();
//  Ex : getDate()    getDay()   getTime()    getFullYear()     getMonth()

// to set the date
// setData() setTime()  setFullYear()  setMonth()

var myDate = new Date();
myDate.setFullYear(2025);

// Dom- Document Object Model
// Manipulate the content or the HTML using JavaScript

// Accessing Elements in DOM :

// Access using Tag Name
document.getElementsByTagName("p");
// Access using Class Name
// To access the paragraph tag with a class newClass as shown above, we can write
document.getElementsByClassName("newClass");
// Access using the ID
// We can access the <p> tag with the id that is assigned to it which is newId
document.getElementById("newID");

// Manipulating HTML elements using JavaScript

// Writing HTML content- replace content

document.getElementById("bold-me").innerHTML = "<b>Just like this</b>";
