// call & apply -> needs reference. Jab array pass karte hai toh 'apply' use karte hai
// bind -> returns a new function

function cookDish(ingredient, style) {
  return `${this.name} prepares ${ingredient} in ${style} style!`
}

const sharmaKitchen = { name: "Sharma Da Dhaba" }
const guptaKitchen = { name: "Gupta Da Dhaba" }

// Every method has its call, apply & bind
console.log(cookDish.call(sharmaKitchen, "Aloo Paratha", "Makhan thok ke "));
console.log(cookDish.call(guptaKitchen, "Dal Fry", "Tadka mar ke "));

const guptaOrder = ['Chole Kulche', 'Punjabi']
console.log(cookDish.apply(guptaKitchen, guptaOrder)); //Whenever we want to pass array we need to use 'apply'


function reportDelivery(location, status) {
  return `${this.name} at ${location}:${status}`
}

const deliveryBoy = { name: "ranveer" }
console.log("call : ", reportDelivery.call(deliveryBoy, "Lyari", "Ordered")); //ranveer at Lyari:Ordered
console.log("apply : ", reportDelivery.apply(deliveryBoy, ["Mars", "Pick up"])); //ranveer at Mars:Pick up
console.log("bind: ", reportDelivery.bind(deliveryBoy)); //[Function: bound reportDelivery]

// const bindReport = reportDelivery.bind(deliveryBoy, "Ghar", "delivered")
// const bindReport = reportDelivery.bind(deliveryBoy, "Ghar")
// const bindReport = reportDelivery.bind(deliveryBoy)
console.log(bindReport())
// console.log(bindReport("delivered"))
// console.log(bindReport("ghar", "delivered"))