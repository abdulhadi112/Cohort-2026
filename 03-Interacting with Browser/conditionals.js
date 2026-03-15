// Conditionals 101
const playerHealth = 75
const hasShield = true
const hasSword = false

if (playerHealth <= 30 && hasShield) {
  // && - dono conditions true hogi tabh hi yeh run karega
}

const isLoggedIn = true
const hasCourseAccess = false

if (isLoggedIn || hasCourseAccess) {
  // || - agar dono conditions mein se ek true hai toh yeh run karega
  // allow to watch videos
}

// Switch statement
const chosenPath = 'left' // can be right, bottom, front etc
switch (chosenPath) {
  // case are case-sensitive, meaning 'left' & 'Left' are two different values
  case 'left':
    // code 
    break;
  case 'right':
    // code 
    break;
  //....

  default: // Agar koi bhi cases match nhi hore hai toh this will run
}