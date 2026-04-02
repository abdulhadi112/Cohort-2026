const aadhaar_of_Batman = Symbol("aadhaar")
const aadhaar_of_Superman = Symbol("aadhaar")
// Symbol always returns a guaranteed  unique value. 'Symbol("aadhaar")', aadhaar here is just a label & label can be same


// console.log(aadhaar_of_Batman); //Symbol(aadhaar)
// console.log(typeof aadhaar_of_Batman);// Symbol
// console.log(aadhaar_of_Batman === aadhaar_of_Superman); // false
// console.log(aadhaar_of_Batman.toString()) // Symbol(aadhaar) (typeof is string)
// console.log(aadhaar_of_Batman.description) // aadhaar. Returns the label of symbol

const NRI = Symbol()
// INTERVIEW GOTCHAS
console.log(NRI.description); //undefined. Jabh hum Symbol ko label nhi dete hai & uska description check karte hai toh we get undefined

const biometricHash = Symbol("biometricHash")
const bloodGrp = Symbol("bloodGrp")

const citizenRecord = {
  name: "AH",
  age: 21,
  [biometricHash]: "qawsredgrfhtgyjh",
  [bloodGrp]: "O+"
}
console.log(Object.keys(citizenRecord)); //[ 'name', 'age' ]. Jabh hum Symbol bana kar usae as key pass karte hai toh print nhi hoti
// How to view these hidden symbols
console.log(Object.getOwnPropertySymbols(citizenRecord)) //[ Symbol(biometricHash), Symbol(bloodGrp) ]
