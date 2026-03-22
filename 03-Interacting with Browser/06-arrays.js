const carriage1 = ["akash", "Rachit", "AH"]
const emptyCarriage = []

// Humein yeh dhyaan rakhna hota hai ki hum array kis tarah create kar rhe hai
// Eg : 
const threeEmptySeats = Array(3) // Here we are using array as constructor
console.log(threeEmptySeats); // [<3 empty items>] Length =3  but values empty, undefined nhi

const passenger = Array("akash", "Rachit", "AH")
const singlePassenger = Array.of(3) // returns new Array from set of given elements 
console.log(singlePassenger); // [3]

// Difference between Array(3) & Array.of(3)
// Array(3) : Create an array of 3 empty items, length = 3
// Array.of(3) : Create an array with 3 as element, length = 1

// How to create Array from different values like strings, set or array 
console.log(Array.from("DUST")); // [ 'D', 'U', 'S', 'T' ]
console.log(Array.from({
  id: 1,
  name: "Rahul Sharma",
  age: 28,
  email: "rahul@example.com",
  isActive: true
})); // []
// Reason for [] : Array.from() expects an iterable (like a string, array, or set) or an array-like object (with a length property and numeric keys). The object you passed is a plain object, not iterable or array-like.


const tempTrain = ['A', 'B', 'C', 'D', 'E']
tempTrain.length = 3 // This is truncate of array. Yeh property over-write karne k liye allowed hoti hai but hum karte nhi, coz its not a good practice. But AI might do it 
console.log(tempTrain); // ['A', 'B', 'C']
tempTrain.length = 5
console.log(tempTrain); // ['A', 'B', 'C',  <2 empty items>]. Here we lost our data

// Does splice() mutate the original array? : Yes, it changes the content of array by removing/replacing existing elements &/or by adding new elements
// To do it without mutating the original array we should use : toSpliced()

// Example of methods that
//  mutate the Array : push, pop, unshift, shift, splice etc
// Dont mutate the Array : concat, slice, flat (these return new array without touching the Original). We usually prefers these. Aage hum jab hum React & Redux learn karege tabh humein ek concept pata chalega ki hum zyaadatar apni State ko mutate karna pasand nhi karte(if you want to change something then create new variables. Simply Don't change the OG Data)

// Common syntax to copy data
const trainCopy = tempTrain.slice()

// Searching methods : indexOf, includes, find, lastIndexOf. (Most commonly used : indexOf & includes)
console.log(typeof []) // Object.
console.log(Array.isArray([])) // true.
console.log(Array.isArray("R")) // false.
console.log(tempTrain[6]); // undefined. JS doesn't throw any error like in other languages


// Key Points :
// 1. Try to use array as literal i.e [] rather than 'Array(n)'
// 2. Array are 0 based. If we try to access index which is out of range then it will return undefined. JS doesn't throw any error like in other languages
// 3. Mutating methods : push, pop, shift, unshift, splice
// 4. Non-mutating methods : concat, slice, flat
// 5. Searching methods : includes, indexOf, lastIndexOf, find
// 6. To check if array is array or not we use : Array.isArray(), typeof is useless here

// ================ BASICS OF ARRAY COMPLETED ================
