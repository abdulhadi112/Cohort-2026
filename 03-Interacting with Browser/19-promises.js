// Async JS
// PROMISES :
// States of promises : pending, fulfilled, rejected

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    // res('chaicode')
    rej(new Error('chaicode'))
  }, 2000)
})

console.log(promise); //Promise { <pending> }

// setTimeout(() => {
//   console.log(promise);
// }, 3000)

promise
  .then((data) => console.log(data)) // Joh bhi value hum 'res()' mein pass karte hai woh humein 'data' mein milti hai  
  // .then(console.log, (err) => console.log(err)) //chaicode
  // .then(console.log, console.log) //chaicode, Error: chaicode
  .catch(console.error)

// Joh bhi value humein 'resolve' fn deta hai hum as it is usae '.then()' k callback mein insert kardete hai.
// 'reject()' is made to pass on error, error throw karne k liye. Error aise pass karte hai : rej(new Error('chaicode'))
// '.then()' se bhi error handle kar sakte hai


const turant = Promise.resolve("Turant")
console.log(turant)

// Promise.any - Takes an array of promises. Multiple promises run hote hai, joh pehle fullfilled hojaye uska result deta hai
// const anyPromise = Promise.any([
//   Promise.resolve("Chai"),
//   Promise.resolve("code"),
//   Promise.reject("Error")
// ])

// Promise.all - Takes an array of Promises. Agar ek bhi Promise (inside the array) reject hota hai toh Reject kar deta hai. Sabh resolve hone chahiye. Usecase : Multiple file uploads (Saari files upload honi chahiye)
// const anyPromise = Promise.all([
//   Promise.resolve("Chai"),
//   Promise.resolve("code"),
//   Promise.reject("Error")
// ])

// Promise.allSettled - Takes an array of Promises. It return an object with status & value of the promise(even for reject), for each promise in the array
const anyPromise = Promise.allSettled([
  Promise.resolve("Chai"),
  Promise.resolve("code"),
  Promise.reject("Error")
])
anyPromise.then(console.log)

// TODO : Create for all, allSettled & with explanation

// Async-Await : The syntactic sugar for Promises
// Await can only be used when the function is async

const hPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res('chaicode')
  }, 3000)
})
async function nice() {
  // const result = await hPromise // Await can't handle errors so we use try-catch
  // console.log(result);
  try {
    const result = await hPromise
    console.log(result);

  } catch (error) {
    console.error("Error : ", error)
  }
}
// nice()

// MICRO, MACRO TASKS - diagram on eraser
console.log("AH"); // Sync
Promise.resolve("Resolved Task").then(v => console.log('MicroTask : ', v)) // MicroTask / Ambani
console.log("JK") // Sync
