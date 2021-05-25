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

// Create new element

document.createElement("p");

// Appending elements
var newEl = document.createElement("p"); //This will create a new element and store it in a variable
var someText = document.createTextNode("Some Text Here!"); //This will create some text for new element and store it in a variable
var insertThis = newEl.appendChild(someText); // This will insert text into newly created p element and store it in a variable
document.getElementById("meDiv").appendChild(insertThis); //This will insert the p element inside the present div.

// Remove an element
var divEl = document.getElementById("thisDiv"); //This will access the division with specific ID name
var pEl = document.getElementById("thisP"); //This will access the paragraph element
divEl.removeChild(pEl); //This will remove paragraph element from division.

// Setting an attribute
var aEl = document.querySelector("a"); //This will access the anchor element
aEl.setAttribute("href", "http://google.com"); //This will set a href attribute in the <a> tag.

// Remove an attribute
document.querySelector("a").removeAttribute("href");

// Manipulating CSS using JavaScript

// Change the font
var el = document.querySelector("h3"); //This will access the paragraph element
el.style.fontSize = "30px"; //This will make paragraph font - size 25px

// Change the color
el.style.color = "green";

// Background color change
el.style.background = "yellow";

// Similar we can change margin, padding, border , change alignment, etc.

//Events
// onclick() //This event  is fired when any HTML element is clicked.
// onload(); // This event is fired when the browser finishes loading the web page.
// onkeydown(); // This event occurs when any key on the keyboard is pressed.
// onmouseout(); //This event occurs when the pointer is moved out of any element.
// onmouseover(); //This event occurs when the pointer moves over any element.
//  etc

// Attaching events to HTML elements
function clicked() {
  alert("Oh!Clicked");
} //First way

var myBtn = document.querySelector("button"); // This will access the button element
myBtn.addEventListener("click", function () {
  alert("Oh!Clicked"); //This will add an event using proper method.
}); // Second way

// Remove events from HTML elements
var removeEventButton = document.querySelector(".remove-event"); //This will access the button element
removeEventButton.removeEventListener("click", function () {
  alert("Event removed");
}); //This will remove an event using proper method

// Browser object model BOM

// Window size
console.log("Inner Height " + window.innerHeight); //Returns the innerHeight of the browser window
console.log("Inner width " + window.innerWidth); //returns the innerWidth of the browser window.

// Screen object
// We can get the height, width, color depth, pixel depth and many more things using the screen object.

// ex:
console.log("screen height " + screen.height);
console.log(`screen width ${screen.width}`); // to find out the height and width

// The history object
history.back(); //The same with using the back button of the browser.
history.forward(); //Will take the navigation forward onto the next screen.

// the location object
console.log("window location " + window.location.href); // it returns the URL of the current page.
console.log("window hostname " + window.location.hostname); // it returns the domain name of the website.
console.log("window protocol " + window.location.protocol); // it returns the protocol of the website

// Cookies
// JavaScript can read, create, modify and delete cookies.
document.cookie = "key=value"; //syntax

// Deleting a cookie
document.cookie = "key:value";
expires: "Date";

// Read the cookies
var myCook = document.cookie;
// The above will store a string containing all the information about
// cookies in the variable myCook which will be in the same key-value format.

// Es6

// let and const
// In ES6, we can declare variables using let and const.
// let is same as the var, except it is block scoped, unlike var.
// When we learnt about scope we saw that a variable declared inside a function using var isn’t available outside the function.
// But, a variable declared inside a block scope using var is still available outside the block.
// For example:
for (var count = 0; count < 5; count++) {
  //some action
  console.log(count);
}

for (let count = 0; count < 5; count++) {
  //some action
  console.log(count);
}

let variable_name = value; //syntax
// let is the keyword , variable_name can be any valid variable name and value is the variable value.
const const_name = value; //syntax
// const is the keyword, const_name can be any valid variable name and value is the constant value .

// Arrow function
(parameters) => {}; //syntax

// Template string
let str = `Hey! String me.`; //syntax

// ex
let a = 5;
let str1 = `I am ${a} years old.`;
