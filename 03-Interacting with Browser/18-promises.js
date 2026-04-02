// The callback hell
function prepareOrderCB(dish, cb) {
  setTimeout(() => cb(null, { dish, status: 'preparing' }), 100)
}
function pickupOrderCB(order, cb) {
  setTimeout(() => cb(null, { ...order, status: 'picked up' }), 100)
}
function deliverOrderCB(order, cb) {
  setTimeout(() => cb(null, { ...order, status: 'delivered' }), 100)
}

// prepareOrderCB('Biryani', (err, order) => {
//   if (err) return console.log(err)
//   pickupOrderCB(order, (err, order) => {
//     if (err) return console.log(err)
//     deliverOrderCB(order, (err, order) => {
//       if (err) return console.log(err)
//       console.log(`${order.dish} : ${order.status}`);
//     })
//   })
// })

// PROMISES :
// States of promises : pending, fulfilled, rejected
// Creating a promisified version of the above function

function prepareOrder(dish) {
  // We are creating a promise here not consuming it. Consume karte time we use .then & .catch
  // Promise has 2 parts : Resolve & reject. 
  return new Promise((resolve, reject) => {
    // if (!dish) {
    //   reject(new Error("No dish is there"))
    //   return
    // }
    console.log('Dish is ready')
    resolve({ dish, status: 'prepared' })
  }, 100)
}
function pickupOrder(order) {
  return new Promise((resolve, reject) => {
    // if (!order) {
    //   reject(new Error("No order received"))
    //   return
    // }
    console.log(`${order} is ready`)
    resolve({ ...order, status: 'pick up' })
  }, 100)
}
function deliverOrder(order) {
  return new Promise((resolve, reject) => {
    // if (!order) {
    //   reject(new Error("No order picked up"))
    //   return
    // }
    console.log(`${order} ready to deliver`)
    resolve({ ...order, status: 'delivered' })
  }, 100)
}

prepareOrder("Aloo tikki")
  .then(order => pickupOrder(order)) // [object Object] is ready
  .then(order => deliverOrder(order))
  .catch(err => console.error(err))

// Reason for [object Object] is ready : Inside PickupOrder function we used template literals to print the object. JS tries to convert the obj into string. By default it uses object's toString method which returns [object Object].
// To avoid this we can use JSON.stringify or simply print without template literals i.e console.log(order, "is ready")