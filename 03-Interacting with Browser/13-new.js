// These are called Constructor function
function Tatacar(chassisNumber, modelName) {
  this.chassisNumber = chassisNumber
  this.modelName = modelName
  this.fuelLevel = 100
}

Tatacar.prototype.status = function () {
  return `Tata ${this.modelName} # ${this.chassisNumber} | Fuel : ${this.fuelLevel}`
}

// With new keyword
const car1 = new Tatacar('MH-101', 'Nexon') //Tata Nexon # MH-101 | Fuel : 100
const car2 = new Tatacar('DD-202', 'Harrier')// Tata Harrier # DD-202 | Fuel : 100
// Since the 'new' keyword is used, 'car1' & 'car2' are instances (objects) of Tatacar
// Methods defined on 'TataCar.prototype' are shared i.e car1.status === car2.status -> true (Same function reference)
// The properties (chassisNumber, modelName, fuelLevel) are per instance

// without new keyword
// const car1 = Tatacar('MH-101', 'Nexon') //TypeError: Cannot read properties of undefined (reading 'status')
// const car2 = Tatacar('DD-202', 'Harrier')// TypeError: Cannot read properties of undefined (reading 'status')

// This is error means : we are trying to access the status property on a value that is undefined
// Explanation : 
// - When we call a constructor without 'new', 'this' inside the function refers to Global Object & not to a new instance. 
// - Function assigns the properties (chassisNumber, modelName, fuelLevel) to the global obj & not a new object. Since it doesn't return anything so, car1 & car2 are both undefined
// Calling a method on undefined gives us the TypeError
// console.log(car1.status())
// console.log(car2.status())

// What does 'new' do:
// Step 1 : An empty Object is created i.e { }
// Step 2 : The prototype of Empty Obj ({ }) & TataCar is linked
// Step 3 : Activation of 'this'. Joh bhi TataCar function ko call kar rha hai 'this' ko uske saath bind kar dete hai
// - Eg : const car2 = new Tatacar('DD-202', 'Harrier'). 'this' is binded to car2 here
// Whatever value is passed with TataCar() is stored with 'this' (line 2), Suppose 'chassisNumber' pass kiya hai, toh it creates a property 'chassisNumber' on the  'car' obj & set its value
// Step 4 : Explicit return of the obj
// 'new' keyword works the same when used with class constructor & object

// These are called Factory Functions
function autoRickshaw(id, route) {
  return {
    id,
    route,
    run() {
      return `Auto ${this.id} running on ${this.route}`
    }
  }
}

const auto1 = autoRickshaw('UP-1', 'Lucknow-kanpur')
const auto2 = autoRickshaw('UP-2', 'Agra-mathura')

console.log(auto1.run());
console.log(auto2.run());
// 'auto1' & 'auto2' are plain objects returned by the function
// the 'run' method is created new for each call i.e auto1.run === auto2.run -> false (different function objects)