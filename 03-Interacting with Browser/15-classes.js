// Tip: Never name your file with a JS Keyword
// Always keep the 1st letter of the class Capital (standard)
class Cricketer {
  // This is Class based constructor
  // Connect this with the 4 steps that happen when we use 'new' i.e creation of object, linking prototypes
  constructor(name, role) {
    // User se li hui properties assign kardi, we can add more properties as well
    this.name = name
    this.role = role
    this.matchesPlayed = 0
    this.stamina = 100
  }

  introduce() {
    return `${this.name} the ${this.role} | Matches : ${this.matchesPlayed}`
  }
}

// Blueprint is shared between player1 & player2. But each of them has different 'this' context i.e this.name is different for both.
const player1 = new Cricketer("Virat", "Batsman")
const player2 = new Cricketer("Bumrah", "Bowler")

console.log(player1.hasOwnProperty("name"));// true. This is the right way to check if a property exists in an object
console.log(typeof Cricketer) // function. Reason : Classes are just Syntactic Sugar over constructor function. When we declare class under the hood, JS creates a special kind of function (constructor function). Notice the similarity between class constructor(15-classes.js) & function constructor (13-new.js)

class Debutant {
  constructor(name) {
    this.name = name
    this.walkOut = () => `${this.name} walks out to bat for the first time`
  }

  bats() {
    return `${this.name} bats`
  }
}

const debutant1 = new Debutant("Shubman")
const debutant2 = new Debutant("YBJ")
const somethingFromLastClass = debutant1.walkOut
console.log(somethingFromLastClass()); // Shubman walks out to bat for the first time. Here 'this' has the reference somehow I don't know how

console.log(debutant1.walkOut === debutant2.walkOut) // false
// Reason : debutant1 runs, the constructor executes and creates a new arrow function object and stores it in debutant1.walkOut. Similarly happens for debutant2. So we end up with 2 different function objects in memory
console.log(debutant1.bats === debutant2.bats) // true. Reason : They share the same reference to the bats function. It is similar to Debutant.prototype.bats
// Methods defined on Tatacar.prototype (like status) are shared.