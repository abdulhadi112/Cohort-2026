// Ways to create a String
const codeName = "Shadow Fox"
const backupName = String("Night Owl")
const templateName = `Agent ${codeName}` //Template Literals. 
// String Interpolation : The way of inserting variables or experssion in a string i.e '${codeName}'

// Strings are immutable
let intercepted = "HELLO"
intercepted[0] = "J"// slient fail -> JS does nothing over here & doesn't throw any error
console.log(intercepted);

const secretCode = "OMEGA-7"

// Property & Methods
console.log(secretCode.length); // 7
console.log(secretCode.charAt(1));// M
console.log(secretCode.charAt(99)); //_emptyString_
console.log(secretCode[99]);//undefined
console.log(secretCode.at(-1)); // Does the same work as charAt. But supports -ve indexing 
console.log(secretCode.toLowerCase()); // omega-7
console.log(secretCode.toUpperCase()); // OMEGA-7


const msg = "The drop point is at Dock 7. Repeat: Dock 7"

console.log(msg.indexOf("Dock")); // 21
console.log(msg.includes("Dock"));// true
console.log(msg.slice(-3));// k 7
console.log(msg.slice(0, 12));// The drop poi
// Research topics : splice, slice etc 

const orders = "move-north|hold-position|extract-vip"
let orderList = orders.split("|")
console.log(orderList); // [ 'move-north', 'hold-position', 'extract-vip' ]
console.log("SOS".split(""));// [ 'S', 'O', 'S' ]. splits on the position between every character

const missionNumber = "42"
console.log(missionNumber.padEnd(5, 'X')); // 42XXX

// Strings immutable hoti hai & jitne bhi changes hum string par karte hai har baar woh new string return hota hai
// Methods jaise jaise zarurat padhti hai waise waise hum find karlege

// Benefit of using Template Literals :
// 1. Multi line strings without special characters
// 2. Readable syntax
// 3. Can insert valid expression(like conditional experssion)  inside ${}

// INTERVIEW GOTCHA
// Output of this : 
console.log(void 0) // undefined
console.log(void "AH") // undefined
// Reason : 'void' always evaluates its expression & returns undefined. Basically 'void' k baad kuch bhi likho koi farak nhi padhta hai
// Void is used for type-safety.  Suppose karo ek function hai joh kuch return hi nhi karta hai, toh explicitly mention karna padhega na ki woh 'kuch nhi' return karta hai. 'void' specifies that

// We want to demolish/completely gayab the value of variable
let generalStore = { name: "Kirana", goods: 3 }
console.log(generalStore);
// generalStore = undefined

// Agar humein completely gayab/ demolish karna hai kisi variable ki value ko toh we use this :
generalStore = null
console.log(generalStore);

// RESEARCH : undefined & null karne par memory kya changes aayege
// - Undefined : Variable memory mein exist karta hai, its reference is still there. Agar variable kisi object/array ko refer kar rha tha, toh wo object/array tab tak memory mein rahega jab tak koi aur reference usko point nhi karta.
// - Null : Variable memory mein exist karta hai, but woh kisi bhi object ko point nhi karta. Agar pehle variable kisi object ko refer kar raha tha, aur ab koi aur reference nahi hai, toh JavaScript ka 'garbage collector' us object ko MEMORY SE HATA SAKTA HAI.
// PRODUCTION BEST PRACTICE : Use 'null' to explicitly release refernces to objects we no longer need. It helps prevent 'memory leaks' in long-running applications