import express from "express"

function block_1_middleware() {
  const app = express()
  app.use(express.json()) // '.use()' is used when we have built in middleware or third party package
  app.use(express.urlencoded({ extended: true })) // help karta hai url encoded data ko handle karne mein. To handle nested objects we give 'extended : true'
  app.use(express.static('public')) // static files serve karne mein help karta hai. 'public' bata ta hai ki kaha se static files serve karni hai 


  // Creating a custom request logger like Winston or Morgan. Idea : Request kisi bhi route par jaane se pehele log ho kar jayegi. 'app.use()' se hum middlewares use & bana sakte hai
  const logs = []
  const date = new Date()
  app.use((req, res, next) => {
    // next is only used when we want to write a middleware. It is a function that tells Express to pass the control to next middleware or handler in line. If not used the application will hang & time out. Usually written when all the work is done

    // add to DB
    // console everything
    // write in some file
    const logEntry = `${req.method} : ${req.url} ${Date.now().toLocaleString()}`
    logs.push(logEntry)
    console.log(`[LOG] -- ${logEntry}`);
    next()
  })

  // Auth middleware
  function authMe(req, res, next) {
    return (req, res, next) => {
      // taking particular header from req
      const token = req.headers['x-access-token']
      if (!token) {
        return res.status(401).json({ error: 'No token provided' })
      }

      //checking token with the token stored in DB(here considering a hardcoded token)
      if (token !== 'valid-token') {
        return res.status(403).json({ error: 'Invalid token' })
      }

      // Extracting data from the token -> {userID, name, email, role}
      // creating a user object in req & storing the extracted data
      req.user = { id: 1, name: "HC", role: "admin" }
      next()
    }
  }
  function getRole(role = []) {
    return (req, res, next) => {
      if (!req.user || !role.includes(req.user.role)) {
        return res.status(403).json({ error: `Role ${role} required` })
      }
      next()
    }
  }

  function rateLimit(maxRequest) {
    let count = 0

    return (req, res, next) => {
      count++
      if (count > maxRequest) {
        return res.status(429).json({ error: "Too many requests" })
      }
    }
  }
  app.get('/profile', authMe, getRole('admin'), () => { }) // Express iss route par jitne bhi middlewares hai uhne ussi order mein call karta hai jis order mein likhe gye hai 
}