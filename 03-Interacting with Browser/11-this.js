// Topics Covered : this, call, bind, apply, new, prototype (JS ko JS banane waale topics )
console.log(this)
// {}(Node). Reason for {} : At the top level this === module.exports & module.exports starts as {}
// Window Object(Browser)

// console.log(globalThis) // Nodejs's global Object
// In browser globalThis == window & In nodejs globalThis == global

function ranveerOnGlobalStage() {
  return typeof this
}
// console.log(ranveerOnGlobalStage()); //object

function ranveerWithNoScript() {
  // Inside function 'this' refers to Global Object
  // On browser it refers to Window Object
  // if we use "use strict" it returns 'undefined' (INTERVIEW GOTCHA)
  // "use strict"
  return this
}
// console.log(ranveerWithNoScript()); // Nodejs's global Object

const bollywoodFilm = {
  name: "gully boy",
  lead: "ranveer",

  introduce() {
    return `${this.lead} performs in ${this.name}`
  }
}
console.log(bollywoodFilm.introduce()); // ranveer performs in gully boy
// Har ek object ke paas 'this' hota hai
// 'bollywoodFilm' mein this kisko point karega ? ANS : Current context(i.e bollywoodFilm)

// INTERVIEW GOTCHAS - What will 'this' refer to inside the callback function of forEach(i.e arrow fn)
const filmDirector = {
  name: "Sanjay leela bhansali",
  cast: ['ranveer', 'deepika', 'priyanka'],
  announceCast() {
    this.cast.forEach((actor) => {
      console.log(`${this.name} introduces ${actor}`); // Sanjay leela bhansali introduces ranveer.
      // Arrow fn don't have their own 'this' instead they inherit 'this' from surrounding lexical scope which in this case is 'announceCast()' 
      // announceCast k liye this = filmDirector
      // If we used regular fn, inner 'this' would be undfined(strict mode) or refer to global obj & not the filmDirector. Arrow fn solves this common gotcha
    })
  }
}
filmDirector.announceCast()

// GOTCHAS EXAMPLE
const filmSet = {
  crew: 'Spot Boys',
  prepareProps() {
    console.log(`Outer this.crew : ${this.crew}`); // Spot Boys

    // A regular nested function(i.e arrangeChairs()) does not inherit 'this', 'this' yaha tak pohcha ta hi nhi hai
    function arrangeChairs() {
      console.log(`Inside this.crew : ${this.crew}`); // undefined
    }
    arrangeChairs()

    // These are detached functions
    const arrangeLights = () => {
      console.log(`Arrow this.crew :  ${this.crew}`); // Spot Boys. Explained in announceCast()
    }
    arrangeLights()
  }
}
filmSet.prepareProps()
// Why undefined in regular fn but not in arrow fn : Its the behaviour of JS, just like how closures is behaviour of JS

// Detached methods 
const actor = {
  name: "ranveer",
  bow() {
    return (`${this.name} takes a bow`);
  }
}

const detachedBow = actor.bow // Unlike closures, 'detachedBow' k paas 'this' ka reference nhi hota hai (i.e tiffin box concept). Closures mein when we did this usually the variable had the reference. (10-functions.js line 100-109)
console.log(detachedBow()); // undefined takes a bow
