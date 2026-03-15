const weaponName = "Flame Sword" // String
console.log("Weapon : ", weaponName, " | Type : ", typeof weaponName)

const attackPower = 75 // Number
const attackUpgrade = 1.5 // Number
const megaAttackPower = 75n // bigint. Arbitrary Large integer. 

console.log(typeof attackPower); // number
console.log(typeof attackUpgrade) // number
console.log(typeof megaAttackPower) // bigint

const isLoggedIn = false // Boolean
let bonusEffect; // Here it is undefined

let curseStatus = null // Here the value is intentionally absent
let weatherApiResponse = null

console.log(typeof weatherApiResponse)// Object. This is old bug of JS. Compatibility k liye change nhi kiya abhi tak 

const uniqueRuneId = Symbol("rune_of_fire")
// Symbol gives us the guarantee of uniqueness + immutable of a datatype. Agar hum waapis ek aur same symbol bana te hai toh woh unique value hi return karega. 
// "rune_of_fire" here is just a label
console.log("Rune : ", uniqueRuneId) // Rune : Symbol(rune_of_fire). This might give issue in Production
console.log("Rune : ", uniqueRuneId.toString()) // For safety we use this


// Non-Primitive datatypes
// 1. Object
const heroStats = {
  name: "AbdulHadi",
  level: 34,
  class: "Captain",
}

console.log("Hero : ", heroStats, " | Typeof : ", typeof heroStats)

// 2. Array
const inventory = ["Flame Sword", "Health Potion", "shield"]
console.log("Inventory : ", inventory, " | Typeof : ", typeof inventory) // Type : Object. There is a special way to check for array : Array.isArray(inventory) 

// 3. Function
function castSpell() {
  return "Fireball!!"
}

console.log("Spell Type : ", typeof castSpell); // Spell Type : function

console.log(typeof "chaicode");
console.log(typeof 42);
console.log(typeof 42n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () { });


// Cloning Concept - Primitive datatype are stored in stack & by default they are copied by value
let originalHP = 100
let cloneHP = originalHP

console.log("Original : ", originalHP);
console.log("Clone : ", cloneHP);

// Cloning Concept - Non-Primitive datatype are stored in heap & by default they are copied by reference. Meaning any changes made in cloneSword will effect originalSword
const originalSword = {
  name: "Flame Sword",
  damage: 75,
  typeofW: "Fire"
}

const cloneSword = originalSword
cloneSword.damage = 100

console.log("Original Sword : ", originalSword);
console.log("Clone Sword : ", cloneSword);

// Hum Objects ko directly copy nhi karte hai. There is syntax/way to copy objects
// Eg:
const armorOriginal = {
  name: "Iron Plate",
  damage: 80,
  buff: {
    fire: 10
  }
}

// 1. Spread operator
const armorCopy = { ...armorOriginal } //Shallow Copy.Only copies the upper level object. It doesn't copy the nested object
armorCopy.damage = 120
armorCopy.buff.fire = 20
console.log("Original Armor : ", armorOriginal);
console.log("Clone Armor : ", armorCopy);


// 2. Deep Copy
const potion = { name: "Health", effects: { heal: 40, mana: 30 } }
const potionCopy = structuredClone(potion) // structuredClone is a recent addition to JS