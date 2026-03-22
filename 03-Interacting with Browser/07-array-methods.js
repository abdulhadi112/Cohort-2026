const orders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 }
]
// ALWAYS UNDERSTAND THE DATA FIRST. TAKE TIME. 

// Looping methods 
// 1. forEach - Does not return anything.
//  Order -> Current Element, Index -> index of the current element, Array -> Entire array

const myData = orders.forEach((order, index, array) => {
  console.log(`Qty of dish #${index + 1} : ${order.qty}`);

})
console.log(myData); //undefined

// 2. map - Always returns a new array containing the results
const receipt = orders.map(order => `${order.dish}: $${order.price * order.qty}`)
console.log(receipt);

// 3. Filter - we give a condition in filter,Returns the elements of an array that meet the condition specified in a callback function.
const spicyOrder = orders.filter(o => o.spicy == true)
console.log(spicyOrder)

// 4. reduce - we decide ehat 'reduce' will return
const totalRevenue = orders.reduce((acc, currVal) => {
  acc += currVal.price
  return acc
}, 0)

console.log(totalRevenue);
// Another way of using 'reduce'

const grouped = orders.reduce((acc, order) => {
  const category = order.spicy ? "spicy" : "mild"
  acc[category].push(order)

  return acc

}, { spicy: [], mild: [] })

console.log(grouped);


// SORTING
const ticketNumbers = [100, 23, 4, 52, 8]
const sortedA = [...ticketNumbers].sort((a, b) => a - b) // Ascending Order
const sortedD = [...ticketNumbers].sort((a, b) => b - a) // Desending Order
console.log("Ascending : ", sortedA);
console.log("Desending : ", sortedD);

// IMP : forEach DOESN'T WAIT FOR PROMISES. Await inside forEach doesn't matter. There is no way to stop or break a forEach() other than throwing exception

const kitchenOrders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
  { dish: "Ghost Pepper soup", price: 15, spicy: true, qty: 1 },
]

// This is called chaining
const mildReport = kitchenOrders
  .filter((o) => !o.spicy)
  .map(o => ({ dish: o.dish, total: o.price * o.qty }))
  .toSorted((a, b) => a.total - b.total)

console.log(mildReport);

