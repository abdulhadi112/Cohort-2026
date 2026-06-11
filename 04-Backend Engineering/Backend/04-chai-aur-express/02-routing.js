import express, { json } from "express"

function block_1_httpMethods() {
  return new Promise((resolve) => {

    const app = express()
    app.use(express.json())
    // Backend

    // DB Simulation
    const routes = {
      1: {
        id: 1,
        name: "Virar-Churchgate Fast",
        direction: "South"
      },
      2: {
        id: 2,
        name: "Goregaon Slow",
        direction: "North"
      }
    }
    let nextId = 3

    app.get('/routes', (req, res) => {
      // Listing all the routes
      res.json(Object.values(routes).map(item => item.name)) // kahi baar FE waale specific response hi maangte hai like only the name of the routes. This is just an example
    })

    app.get('/routes/:id', (req, res) => {
      // Listing specific routes

      // const { id } = req.params
      const id = req.params.id
      const route = routes[req.params.id]

      if (!route) return res.status(404).json({ error: "No such transport found" })
      res.json({
        id,
        route
      })

    })

    app.post('/routes', (req, res) => {
      // creating new routes
      const { name, direction } = req.body
      // some validation check

      const newRoute = {
        id: nextId++,
        name,
        direction
      }
      routes[newRoute.id] = newRoute

      res.status(201).json({ newRoute })
    })

    app.put('/routes/:id', (req, res) => {
      const { id } = req.params
      if (!routes[id]) return res.status(404).json({ error: "No such route found" })

      // Entire data is sent to update
      routes[id] = {
        id,
        ...req.body
      }
      res.status(200).json({ message: "Data updated successfully", routes })
    })

    app.patch('/routes/:id', (req, res) => {
      // Selective data is sent to update
      const { id } = req.params
      if (!routes[id]) return res.status(404).json({ error: "No such route found" })

      const { newName, newDirection } = req.body
      routes[id].name = newName
      routes[id].direction = newDirection

      res.status(200).json({ message: "Data updated successfully", routes })
    })
    app.delete('/routes/:id', (req, res) => {
      const { id } = req.params
      if (!routes[id]) return res.status(404).json({ error: "No such route found" })

      delete routes[id]
      res.sendStatus(204) // Jabh ek value delete hogyi hai yaha par kabhi bhi error codes nhi bhejte hai. Delete bhi ek operation joh hum successfully karte hai. Yaha par '2' k range ki hi codes aate hai. Standard practice
    })


    const server = app.listen(0, async () => {
      const port = server.address().port
      const base = `http://127.0.0.1:${port}`

      try {
        // Frontend
        const allRoutes = await fetch(`${base}/routes`)
        const allRoutesJson = await allRoutes.json()
        console.log("GET /routes : ", JSON.stringify(allRoutesJson))

        console.log(`${'='.repeat(50)}`)
        const specificRoute = await fetch(`${base}/routes/1`)
        const specificRouteJson = await specificRoute.json()
        console.log("GET /routes/1 : ", JSON.stringify(specificRouteJson))

        console.log(`${'='.repeat(50)}`)
        const createRoute = await fetch(`${base}/routes`, {
          method: 'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({
            name: "Panvel Slow",
            direction: "East"
          })
        })
        const createRouteJson = await createRoute.json()
        console.log('POST /routes : ', JSON.stringify(createRouteJson));

        console.log(`${'='.repeat(50)}`)
        const updateRoutes = await fetch(`${base}/routes/2`, {
          method: 'PUT',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({
            name: "Borivali Fast",
            direction: "north"
          })
        })
        const updateRoutesJson = await updateRoutes.json()
        console.log('PUT /routes/2 : ', JSON.stringify(updateRoutesJson))

        console.log(`${'='.repeat(50)}`)
        const patchRoutes = await fetch(`${base}/routes/1`, {
          method: 'PATCH',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({
            newName: 'Surat Express',
            newDirection: 'North-west'
          })
        })
        const patchRoutesJson = await patchRoutes.json()
        console.log('PATCH  /routes/1 : ', JSON.stringify(patchRoutesJson))

        console.log(`${'='.repeat(50)}`)
        const deleteRoutes = await fetch(`${base}/routes/3`, {
          method: 'DELETE',
          headers: {
            'Content-Type': "application/json"
          }
        })
        const deleteRoutesJson = await deleteRoutes.status
        console.log('DELETE /routes/3 : ', deleteRoutesJson)

        console.log('Final Routes :', routes)

      } catch (error) {
        console.error(error)
      }

      server.close(() => {
        console.log('Block 1 HTTP Methods Assignment Done')
        resolve()
      })
    })
  })
}


function block_2_features() {
  return new Promise((resolve) => {
    const app = express()
    app.use(express.json())
    // Backend
    // filepath
    app.get('/files/*filepath', () => {
      // /files k aage kuch bhi ho sakta hai like '/files/docs/readme.txt', '/files/images/img.png'
      // This is Express 5 feature : '/*filepath'. What does this do & mean
      // '/*fielpath' defines a named(i.e filepath) wildcard route. '/files' k aage '/*filepath' mein kuch bhi ho toh woh 'req.params.filepath' mein ek array mein store kiya jaata hai (the values are separated)

      // '/files/docs/readme.txt'
      const filePath = req.params.filePath // Eg: filePath = ['docs', 'readme.txt']
      res.json({
        type: "wildcard route",
        filePath
      })
    })

    // Used jabh single URL Path par different HTTP methods use karne hai
    app
      .route('/')
      .get()
      .post()


    const server = app.listen(0, () => {
      const port = server.address().port
      const base = `http://127.0.0.1:${port}`

      // Frontend
      // try {

      // } catch (error) {

      // }

      server.close(() => {
        console.log(`Block 2 served...`)
        resolve()
      })
    })
  })
}
async function main() {
  await block_1_httpMethods();
}
main()