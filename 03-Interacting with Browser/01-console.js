const clue1 = "Muddy footprint near the window"
const clue2 = "Broken glass on the table"

console.log('clue found :', clue1)
console.log('clue found :', clue2)

const suspectName = "Raju"
const suspectAge = 20

console.log("Suspect Name : ", suspectName, "| Age : ", suspectAge);

// There is not much difference in these logging 
// Usage : When we go into production logs we easily filter the logs like warning logs, error logs etc
console.warn("Warning") // Outputs a warning message to the console
console.error("Error") // Outputs an error message to the console

const evidenceLog = [
  { id: 1, item: "Muddy Footprint", location: "Window sill" },
  { id: 2, item: "Broken Glass", location: "Living Room" },
  { id: 3, item: "Red fiber strand", location: "Door Handle" }
]

// We can use console.table to print when we have an array of objects. Prints the values in table format
console.table(evidenceLog)

// Logs the number of times it has been called with a specific label & prints the count beside it
console.count("Chaicode")
console.count("Chaicode")
console.count("Chaicode")
