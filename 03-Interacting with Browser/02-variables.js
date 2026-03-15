var shipName = "The Amber" // Avoid using var now
console.log(`ShipName: ${shipName}`);

let crewCount = 12 // We should use this. This came after ES6
console.log(`Crewcount : ${crewCount}`);
crewCount = 15

const captainName = "Jack Sparrow"
console.log("Captain Name : ", captainName);

// captainName = "MSD" // Cannot reassign a const variable
// Software Rule 101: Declare everything as a 'const', if needed then change it 'let' (Good Practice)

// The 'var' issue
if (true) {
  var leakyTreasure = 'Gold coins'
}
console.log(leakyTreasure); // This shouldn't be accessible here

// Variable Naming : Rules vary company to company. We should maintain consistency while naming a variable

let shipSpeed = 22
let _privateLog = "secret" // '_' at the start indicate we will keep this variable private or for internal use only
let _ = 'a' // '_'' uss jagah use karte hai, jis value ko humein future mein zyaada use nhi karna. Basically its a temporary placeholder, When you need a variable just for a short time and won't use it again.
// Kahi baar function mein 2 values aari hai but humein ek use karni hai, toh 2nd waali k liye we use this. We'll use this while learning about Express


// The Confusing Part
const treasureChest = {
  gold: 50,
  rubies: 2,
  maps: 2
}

treasureChest.rubies = 5 // ✅. This is mutating the content 
treasureChest = { gold: 45 } // ❌. Complete referencing is not allowed. We are re-assiging the treasureChest

const crewRoster = ['alok', 'akash', 'anirudhh']
crewRoster.push('AHadi') //✅
crewRoster[0] = "Raju Rastogi" //✅
crewRoster = ["someone"] // ❌
