import express from "express"

function block_1_middleware() {
  const app = express()
  app.use(express.json())


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


      next()
    }
  }
  function getRole(role) {
    return (req, res, next) => {




      next()
    }
  }
  app.get('/profile', authMe, () => { })
}