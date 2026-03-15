const crewMembers = 40
const fuelTons = 143.5
const lightSpeed = 299_345_678_900 // '_' is just for readability

const positiveInfinity = Infinity
const negativeInfinity = -Infinity
const notANumber = NaN
// NaN - Eg: "AHadi" ka equivalent number => NaN. Cannot be converted to a number
// 2 NaN cannot be equal. NaN is just an output. Woh 2 different values k liye aa sakta hai. We dont know what were the value 

// console.log(Number.MAX_SAFE_INTEGER); // MAX Integer value
// console.log(Number.MIN_SAFE_INTEGER); // MIN Integer value
// console.log(Number.isNaN()); //to check if a value is NaN
// console.log(Number.isInteger()); //to check if a value is Integer


// PARSING - Be careful while parsing values
const fuelReading = "142.5 tons"
const sectorCode = "0xA3" // This is a Hex code value. Kisi bhi number k start mein '0x' lagate woh Hex code ban jata hai. Numbers jinke aage 0x hota hai unhe Hexadecimal consider kiya jata hai else all other strings are considered decimal
const countDown = "007"

// parseInt() - Converts a string into number
// parseFloat() - converts string into floating-poing number
// console.log(parseInt(fuelReading)); // 142
// console.log(parseInt(sectorCode)); // 163. Here A3 is converted to decimal format which gives 163
// console.log(parseInt(countDown)); // 7. Suppose Car number '007' ka challan kaata na tha but parse karke '7' ka kaat diya
console.log(parseInt("111", 2)) // '2' -- A value between 2 and 36 that specifies the base of the number. The base we use is Decimal (10).  


// MATH - Depending on your use case methods ko dhundhna & apply karna
const thrustForce = 4.567

console.log(Math.round(thrustForce));
console.log(Math.floor(thrustForce)); // Give the priority to lower number after rounding off
console.log(Math.ceil(thrustForce)); // Give the priority to larger number after rounding off
console.log(Math.trunc(thrustForce)); // Returns the integer part, removing the decimal part

const temps = [-120, 34, 56, -25]
console.log(Math.min(...temps)); // -120

// GOTCHAS OF JS
console.log(0.1 + 0.2) // 0.3
console.log(0.1 + 0.2 === 0.3) // false. This is a Math problem not JS

function almostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}
console.log(almostEqual(0.1 + 0.2, 0.3));

