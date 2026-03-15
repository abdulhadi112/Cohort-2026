// console.log('Hello World!')

// Code Structure
// kebab-case - File Naming style eg: js-refresher.js

// Strict Mode
// 2009 ES5 added new features that breaks things. If we wanted to run old code in new version of JS we had to use strict mode like "use strict" at the top of the file.
// New version mein apne aap "use strict" applied hota hai

// Variables : Usually camelCase naming is used for naming a variable
let firstNum; // Declaring a variable
firstNum = 10 // initializing the variable 'num1'

// If a value will remain constant throughout the code then it must be in Uppercase
const PI = 3.14

// Datatypes
let num = 45 // can be 45.65, 0, -34
let bigBalance = 123456789009654321n // bigint ranges from 9007199254740991 to -9007199254740990
let double = "Chai" // can 'chai' , `chai`
let single = 'Chai'
let backtick = `chai` // this is known as string interpolation 
let isLoggedIn = false
let partner = null // empty or unknown
let khaaliBox; // abhi value assign nhi ki hai isliye its 'undefined'


// Object
let userDetail = {
  name: "Guddu",
  age: 21,
  familyMember: ["ammi", 'abbu', 'bhai'],
  isMarried: false
}

console.log("typeof : ", typeof null) // Object. Which is wrong. this was recognised earlier but due to compatibility issue its still kept

// Type Conversion
// String conversion
let choice = false
let strChoice = String(choice)

// Number conversion
let strInput = "25"
let age = Number(strInput)
// let wordAge = Number("Twenty One") //NaN.
//  undefined -> NaN
// null -> 0
// true & false -> 1 & 0
// empty

// Boolean Conversion
// truthy & falsy values
// There are only 6 values that are considered falsy :
/*
- false
- number or bigint representing 0 (0, 0.0, 0n)
- empty string
- primitive value 'null'
- primitive value 'undefined'
- NaN
*/