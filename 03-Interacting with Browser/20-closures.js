// Interesting topics in JS
// Interview clearing topics (focus on these & foundations ): queues, Promises, closures
// Mental model samjhna zaruri hai to understand closures

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName
}

const myFunc = makeFunc()
myFunc()

// Har ek function ka execution context hota hai. myFunc = displayName. Problem is myFunc ko jabh hum execute karte hai toh uske paas 'name' ka reference kaise aya


function startCompany() {
  function ca(name) {
    return `${name} is a company`
  }
  return ca
}

const getMeCompany = startCompany() // getMeCompany = ca. Has the reference of ca()
const myCmpy = getMeCompany("Google")


function eternal(guest) {
  const guestName = guest
  let count = 0

  function zomato() {
    console.log(`hi ${guestName} from Zomato`);
  }
  function blinkit() {
    if (count == 1) return
    console.log(`hi ${guestName} from Blinkit`);
    count++
  }
  // We dont run code like this
  // zomato()
  // blinkit()
  return {
    zomato,
    blinkit
  }
}
const hc = eternal("HC")
const pg = eternal("PG")

hc.blinkit()
hc.blinkit() // this won't print anything. we just controlled how many we can call a function- useMemo() - agar function change hi nhi hora hai toh usae dubara run mat karo