const hero = {
  name: "shaktimaan",
  class: "8th",
  level: 12,
  health: 75,
  mana: 120,
  isAlive: true
}
//How to access properties of object 
hero.name // Use jabh humein pata ho ki values yehi hai ya kahi dynamically nhi aari hai ya API se nhi aari hai
// hero[category] // Use when we are getting some response, processing something etc. Advantage is agar key mein beech mein spaces i.e key = "user name" & we use hero[key] toh the work gets done. 
// Dot Notation is simpler but is limited. It can't handle dynamic keys & special characters

// How to add properties to object
hero.weapon = "Danda"

// How to delete property
delete hero.level

const ranger = {
  name: "AH",
  agility: 80,
  stealth: undefined
}
console.log("name" in ranger); // true. If it exist else false 
console.log("stealth" in ranger); // true. yeh exist karta hai but iski value undefined hai 
console.log("toString" in ranger); // true. Prototypal inheritance concept

// To check if the property is there in an object we use
console.log(ranger.hasOwnProperty("toString"))// false
console.log(ranger.hasOwnProperty("stealth"))// true

