const artifact = {
  name: "Obsidian Crown ",
  era: "Ancient",
  value: 50000,
  material: "volcanic glass"
}

// Key of object
console.log(Object.keys(artifact))
// Values of object
console.log(Object.values(artifact));
// Array of key-value pair 
console.log(Object.entries(artifact));

for (const [key, value] of Object.entries(artifact)) {
  console.log(`${key} : ${value}`);
}

// How to create Object from Array of arrays (i.e entries)
const entries = [
  ['Obsidian', 5000],
  ['Ruby', 54000],
  ['Diamond', 500000],
]
const priceObject = Object.fromEntries(entries)
console.log(priceObject);

// ========= INTERVIEW GOTCHAS =============
const displayCase = {
  artifact: "Obsidian",
  location: "Hall A",
  locked: true
}

Object.freeze(displayCase) // Any changes made after this line will not affect the displayCase, even delete won't affect
delete displayCase.locked
displayCase.newProp = "test"
console.log(displayCase)

// Q: What is the difference between Object.freeze() & Object.seal()
const catalogEntry = {
  id: "ART-001",
  description: "ancient crown",
  verified: true
}

Object.seal(catalogEntry)
// ANS : Object.seal() is used when you want to allow edit to existing properties, Structural changes are not allowed, like we can't add or delete properties ONLY EDIT

const secureArtifacts = { name: "ruby pendant" }


// To add new properties to the object with some control over it 
Object.defineProperty(secureArtifacts, "catalogId", {
  // These are some pre-defined properties 
  value: "SEC-999",
  writable: false, // If true, the property’s value can be changed (assigned a new value).
  enumerable: true, // If 'true' only then that property is loopable. Meaning agar hum default loop karege toh yeh value aani chahiye ya nhi aani chahiye
  configurable: false // if true then, the property can be deleted or its descriptors (like writable, enumerable, etc.) can be changed.
})

console.log(secureArtifacts.catalogId);
secureArtifacts.catalogId = "HACKED"
console.log(secureArtifacts.catalogId);


// When enumerable = true
for (const [key, value] of Object.entries(secureArtifacts)) {
  console.log(`${key} : ${value}`); // Prints catalogId : SEC-999
}
// When enumrable = false. It doesn't print catalogId
// An entire object can be created where enumerable = false

// If we want to check properties of a key of an Object
console.log(Object.getOwnPropertyDescriptor(secureArtifacts, "catalogId"))
console.log(Object.getOwnPropertyDescriptor(secureArtifacts, "name"))

// LOOP OVERVIEW
// 1. For loop is the most optimized loop. Whenever we want to loop any large array just simply use for loop. CLASSIC ALWAYS WORKS
// 2. while : Jabh humein nhi pata kitna iteration karna hai
// 3. do..while : Runs at least once
// 4. for..in : Mostly used on Objects. Avoid using it on Arrays. Used to iterate over enumerable property keys of an Object
// 5. for..of : Used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// 6. map, forEach, filter, reduce, some : these are customized implementation on loops

