// Difference between initialization & declaration
// Declaration : Telling JS a variable exist & giving it a name
// Initialization : Giving a variable its first value
// In case of 'const` we must initialize at the same time we declare the variable

let x; // declaration
x = 10; // initialization
let a = 5 // declaration + initialization

// Is 'let' hoisted ? -> Yes (Concept of Temporal Dead Zone)
// Temporal Dead Zone(TDZ) : It is a specific period in JS where variables declared with 'let' & 'const' exist in memory but are uninitialized & inaccessible


// FUNCTIONS
// Declaration : Giving the functionName & parameters
// Definition : The actual implementation, the code, the function body 
// In JS function declaration & definition is done at the same time unlike other languages
function sayHello(name) {
  // This is the Function Body 
  // `name` here is a parameter
  console.log(`yoyo ${name}`)
}

// sayHello('raju') // `raju' is an argument

// Another way of creating a function, This is Function Expression
let cartoon = function () {
  console.log(`hello`);
}
// cartoon()

// Arrow functions
const sayBye = () => {
  return `bye`
}
// const sayBye = () => `bye`
// console.log(sayBye())
// If we have a single statement we dont need the the curly braces we can directly return it
// eg : const sayBye = () => `bye`

// Arrays :
const fruits = ['apple', 'cheeku', 'santra', 'mango', 'grapes', 'pineapple']
// console.log(fruits)
// console.log(fruits.length) // gives the length of the array
// console.log(fruits.includes('tarbooj')) // Check if the element is present in the array
// console.log(fruits.slice(2, 5)) // Returns a copy of section of the array
// console.log(fruits.shift()); // removes the first element from the array
// console.log(fruits.unshift('pav')); //Inserts new elements at the start of an array, and returns the new length of the array.

// HIGH ORDER FUNCTIONS
// - Takes one or more functions as arguments, and/or Returns a function as its result.
// Eg: map, filter, reduce, forEach
fruits.forEach((fruit, index) => {
  console.log(`Fruit: ${fruit}, Index: ${index}`);
})

const nums = [1, 2, 3, 4, 5, 6,]

const result = map((num) => num * 2)
function map(fn) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    result.push(fn(nums[i]))
  }

  return result
}

console.log(result)