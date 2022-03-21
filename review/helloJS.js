// what is javascript?
// it is, in this context, an interpreted, loosely typed language run on the client side
// interpreted? it does not need to be compiled like java does
// loosely typed? variables can be any type and can have their contents changed to whatever at will
// for instance, a variable can at one moment hold a number and at another hold a function
// client side? all web browsers nowadays can run JS, but they can't easily run Java

var a = 5;
function b() {
    return 5;
}
a = b;
a();

// loosely typed language comes with a couple of quirks:
// 1. type coersion : a variable of a certain type can be forced into another
//      specifically, this applies to coersion into a boolean : causing all variables to have
//      a true or false value (false being 0, null, "")

if(5 == "5"){
    // this is true
}
// we saw this with our images - if an image link is null, we don't attempt to render the image
if(null){
    // this is false
}
// === introduces type checking
if(5==="5"){
    // this is false
}

// 2. passing functions as variables also introduces a cool quirk:
//      callback functions
//      pass a function as a parameter of another function, which calls the parameter's function
//      good example of this : our sorting, mapping, filtering functions
//      which take in a function to determine what they should decide with a particular data
var myArr = [0,1,2,3,4,5];
function square(x){
    return (x*x );
}
// map takes in a callback that is applied to every value of myArr
myArr = myArr.map(square);
// myArr = myArr.map(a => a*a);

// ES6
// is a version of javascript that introduced quite a bit:
// most notably, 'let' and 'const'
// also: template literals
// arrow functions
// classes
// spread rest operators

// let: unlike var, let introduces block scope, which makes it function like a variable in java
// var, on the other hand, exists one once in the script
// const: cannot be changed

(a) => a*a;

// template literals: like strings, although they take in things like newlines 'literally',
// as they are written, using backticks
// eg:
let literal = `template
                literal`
// classes:
// js is an OOP language, it's just not the central feature
class user {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    getUsername(){
        return this.username;
    }
}
// spread rest operators
// are a way to interate through arrays more easily
console.log(...arr);
// outputs: 0, 1, 4, 9, 16

// hoisting:
// variables are 'brought up' to the top of the js script
// unless we use 'use strict', strict mode
//      no using reserved keywords, no assigning values to const, etc

// DOM manipulation:
// DOM?
// Document Object Model
// Tree representation of the structure of a webpage
// We can select, manipulate, create items from the webpage
// We can traverse the DOM (it is a tree, after all)

button = document.getElementById("ClickMeButton");
button.onClick = someFunction;

function someFunction() {
    button.innerHTML = "Text Changed";
}

// Event object
// Whenever an event occurs, we have some information about it
// designate bubbling or capturing:
// whether the parents of this element or the children of this element
// also recieve this event
// target : the element where the event occurred

// Event Listeners: which allow for multiple handler on an event, unlike just using
// something like .onClick

// AJAX:
// Asynchronous Javascript and XML
// just is JS's way of communicating with web servers
// it does this by having an XMLHttpRequest()
// and it allows us to create an event for the status update of recieving information from the server
// so, when this happens, we'd typically check of a update status of 4 (response ready) and http code
// of 200 (everything OK)

// Fetch:
// unlike AJAX, fetch is promise-based, meaning that we intend to fill a variable with information
// in the future
// This is a good chance to use async/await:
// async functions allow for the use of await, which waits and lets other events fire asynchronously

// JSON: both of these are intended to give us JSON, Javascript Object Notation