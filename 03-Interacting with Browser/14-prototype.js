const prithiviraj = {
  name: "Prithiviraj",
  generation: "grandfather",
  cookTraditionalDish() {
    return `${this.name} cooks an ancient family recipe`
  }
}
// Use#1 of prototype is inheritance
const raj = Object.create(prithiviraj) // Jabh bhi Object iss tarah se inherit karta hai toh woh prototype mein chale jaati hai i.e prototype of raj. inheriting properties from prithiviraj
console.log(raj); // {}
raj.name = "raj" // Modifying the object
raj.generation = "father"
raj.runBusiness = function () {
  return `${this.name} runs the family business`
}
console.log("Raj : ", raj); // 'raj' can also use 'cookTraditionalDish'() as it inherited it from 'prithiviraj'

const ranbir = Object.create(raj)
ranbir.name = "Ranbir"
ranbir.generation = "son"
ranbir.makeFilm = function () {
  return `${this.name} directs blockbuster films`
}
console.log("ranbir :", ranbir);
console.log(ranbir.makeFilm()); //Ranbir directs blockbuster films
console.log(ranbir.runBusiness()); //Ranbir runs the family business
console.log(ranbir.cookTraditionalDish()); //Ranbir cooks an ancient family recipe
console.log(ranbir.hasOwnProperty("cookTraditionalDish")); // false

// Everything eventually inherits from Object.prototype
// Polyfills - overview
Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this)
  }
}

Array.prototype.last = function () {
  return this[this.length - 1]
}
console.log([1, 2, 3, 4].last())

Array.prototype.myMap = function (cb) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this))
  }
  return result
}

let arr = [1, 2, 3]
const result = arr.myMap((curr) => curr * 2)
console.log("arr :", result);

// TODO : polyfill of flat, spilt, concat, join

let str = "hc"
const r = str.concat("sir")
console.log("result : ", r);

// Prototype ka kaam :
// - inheritance
// - polyfills