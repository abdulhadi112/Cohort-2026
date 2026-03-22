// Function Declaration : statement where you create (declare) a function with a name.
// Eg : function greet(name) { return `Hello ${name}`}
// 'function' keyword is used & function has a name 'greet'

// Function Defintion : the actual implementation of the function—its code block. Definition includes the function’s name, parameters, and body.
// eg : function add(a, b) { // <-- This whole block is the function definition
// return a + b;
// }

// console.log(brewPotion("healing herbs", 2)) // Function declaration in JS are hoisted to the top of their scope. Thats why we can call it here
function brewPotion(ingredients, dose) // ingredients & dose <-- Parameters
{
  return `Brewing potion with ${ingredients} (x${dose})... Potion ready`
}

// Function Expression
const mixElxir = function (ingredient) {
  return `Mixing elxir with ${ingredient}`
}
// console.log(mixElxir('Goo')) // 'Goo' <-- argument

// Arrow Function - no Own 'this', no 'arguments' object
const distilEssence = (ingredient) => {
  return `Mixing elxir with ${ingredient}`
}

// What are 'arguments' object
function oldBrewingLogs() {
  // Printing internal properties that each function has
  console.log("Type : ", typeof arguments); // Object
  console.log("Arguments : ", arguments); // { '0': 'Sage', '1': 'Rosy' }
  console.log("Is Arguments Array ? : ", Array.isArray(arguments)); // false
  const argsArray = Array.from(arguments)
  // Array.from() works here & not on objects.
  // Reason : 'Arguments' has numeric keys i.e 0 & 1 & It also has a length property equal to the number of arguments i.e length = 2
  // Array.from(x) checks 2 things. Is 'x' iterable or Is 'x' array-like. If neither is true then it return empty array
  console.log("argsArray : ", argsArray); // [ 'Sage', 'Rosy' ]

}
oldBrewingLogs("Sage", "Rosy")

// Investigating Arrow function for 'arguments' object
const arrowBrew = () => {
  try {
    // console.log(arguments) // Very big output 
  } catch (error) {
    console.log(error)
  }
}
arrowBrew()
// Left to complete - closures concept

let globalCount = 0

function brewCount(name) {
  globalCount++ // Kaise bhi iss 'globalCount' ki value change ki inside this function. This is then called Impure function. It mutates external state(variable)
  return globalCount
}
// Ek function tabh 'Pure Function' bola jata hai jabh woh bahar ki kisi value ko change/modify na kare, apne andar hi joh kaam karna hai woh kare, thats it!

// IT ALWAYS DEPENDS ON THE BUSINESS USECASE. PROGRAM KYA KAREGA KYA NAHI KAREGA IS GOVERNED BY BUSINESS USECASE. Agar Business usecase hai ki 1 SQL query chalegi joh bohot saari tables se data laa kar 10mins mein run hoti hai, toh bhale 10min mein run ho. Aisa nhi hona chahiye ki Ismein bohot zyaada time lag rha hai toh yeh karege hi nhi

// IIFE - Immediately Invoked Function Expression - a function which defined & immediately executed
// To run 2 IIFE sequentially, the first should have a semi-colon at the end 
// Syntax
// (function () {

// })();

// (() => { })()

// Higher Order Function (HOF) - A function that takes one or more functions as arguments or Returns a function as a result. Common example are : map, reduce, filter
function anotherBrew(brewCount) {

  return function newBrew() {
    // do something
  }
}

// There is no difference in normal functions & arrow functions, except 'this' keyword & 'arguments' object

const potionShop = (function () {
  let inventory = 0 // we can't access this variable outside this scope. Baaki functions mein tarike hote hai 
  return {
    brew() {
      inventory++
      return `Brew #${inventory}`
    },
    getStock() {
      return inventory
    }
  }
})()
console.log(potionShop); //{ brew: [Function: brew], getStock: [Function: getStock] }
console.log(potionShop.brew());// Brew #1
console.log(potionShop.getStock()); //1
console.log("Inventory : ", potionShop.inventory);// undefined

// CLOSURES
function makeFunc() {
  const name = "MDN"
  function displayName() {
    console.log(name); // 
  }
  return displayName
}

const myFunc = makeFunc()
myFunc()

// THIS CALL BIND APPLY CLOSURES - topics before Object Oriented JS