import express from "express";

function block_1_request() {
  // to study the request object
  return new Promise((resolve) => {

    const app = express();
    app.use(express.json()) // Tells the server to understand the incoming request in JSON Format
    app.get('/menu', (req, res) => {
      res.json({ items: ['thali', 'biryani'] }) // res.json() returns a serialized object
    })
    app.get('/search', (req, res) => {
      const { q, limit } = req.query
      res.json({
        query: q,
        limit: limit || '10' // Agar limit nhi hai toh send '10' in the response
      })
    })

    app.get('/menu/:id', (req, res) => {
      const { id } = req.params
      res.json({
        item: id,
        price: 149
      })
    })

    app.post('/order', (req, res) => {
      const order = req.body
      res
        .status(201)
        .json({
          status: 'created',
          order
        })
    })

    // const PORT = process.env.PORT // is used when deploying on other than VPS else the PORT is taken from env
    const server = app.listen(0, async () => {
      const port = server.address().port
      const base = `http://127.0.0.1:${port}`

      console.log(`Listening on http://${base}`)

      try {
        // Frontend part
        const menuResponse = await fetch(`${base}/menu`)
        const menuData = await menuResponse.json() // A JS object

        // console.log('MenuResponse : ', menuResponse);
        console.log('GET /menu : ', JSON.stringify(menuData)); // stringify converts JS Object to string & parse converts string into a JS Object

        console.log(`${'='.repeat(50)}`);
        const searchResponse = await fetch(`${base}/search?q=biryani&limit=5`)
        const searchData = await searchResponse.json()
        console.log('GET /search : ', JSON.stringify(searchData));

        console.log(`${'='.repeat(50)}`);
        const menuItemResponse = await fetch(`${base}/menu/42`)
        const menuItemData = await menuItemResponse.json()
        console.log('GET /menu/42 :  ', JSON.stringify(menuItemData));

        console.log(`${'='.repeat(50)}`);
        const orderResponse = await fetch(`${base}/order`, {
          method: 'POST', // can be any other HTTP method
          headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify({
              dish: "biryani",
            })
          }
        })
        const orderData = await orderResponse.json()
        console.log('POST /order ', JSON.stringify(orderData));

      } catch (error) {
        console.error(error)
      }

      server.close(() => {
        console.log(`Block 1 Served ...`);
        resolve()

      })
    })

    // console.log(`Server : ${server}`) // Complex object
    console.log('Server.address() :', server.address()) // gives us address, familiy(ipv4/ipv6) & port
    console.log('Server.address() :', server.address().address) // gives us address, familiy(ipv4/ipv6) & port
  })
}

function block_2_repsonse() {
  // Aim : To study the response obj
  return new Promise((resolve) => {
    const app = express()
    app.use(express.json())

    app.get('/text', (req, res) => {
      // To send a simple text as response
      res.send(`Welcome to the server`)
    })

    app.get('/json', (req, res) => {
      res.json({
        success: true,
        message: "Json sent successfully"
      })
    })

    app.get('/not-found', (req, res) => {
      res.status(404).json({
        error: "Page not found"
      })
    })

    // This route is for service like AWS to check if the server is running or not. If not then spin another machine 
    app.get('/health', (req, res) => {
      res.sendStatus(200) // Similar to res.status(200).end()
    })

    // redirecting to some other page
    app.get('/old-menu', (req, res) => {
      // adding in DB to see how many users are still visiting the old route
      res.redirect(301, '/new-menu') //301 is status code for Moved Permanently, may change a POST req to GET req. 308 is for Permanent Redirect(alternative to 301), strictly forbids browser from changing HTTP Method (i.e POST methods remains POST)
    })

    app.get('/xml', (req, res) => {
      res.type('xml') // sets the Content-Type, tells the browser that a XML file is coming. Type can be any other valid MIME type like json,xml, form-data, plain, html, css/js, pdf, png,jpg etc
      res.send(`
        <menu>
          <item>Thali</item>
          <item>Biryani</item>
        </menu>
      `)
    })

    app.get('/custom-headers', (req, res) => {
      // we can also set custom headers as well. Like Iss route par koi bhi user aayega toh hum usae customized headers send kardege. Taaki next time woh user jabh request karega toh hum uss headers se data nikaal dege. Customized headers k saath mein 'X-' is a common convention. These headers are useful in CORS, caching, tracing etc.
      res.set('X-Powered-By', 'NodeJS')
      res.json({
        message: "Custom headers sent successfully"
      })
    })

    app.get('/no-content', (req, res) => {
      res.status(204).end()
    })

    const server = app.listen(0, async () => {
      const port = server.address().port
      const base = `http://127.0.0.1:${port}`

      try {
        const textResponse = await fetch(`${base}/text`)
        const textData = await textResponse.text()
        console.log('GET /text : ', textData);

        console.log(`${'='.repeat(50)}`);
        const jsonResponse = await fetch(`${base}/json`)
        const jsonData = await jsonResponse.json()
        console.log('GET /json : ', JSON.stringify(jsonData));

        console.log(`${'='.repeat(50)}`);
        const notFoundResponse = await fetch(`${base}/not-found`)
        const notFoundData = await notFoundResponse.json()
        console.log('GET /not-found : ', JSON.stringify(notFoundData));

        console.log(`${'='.repeat(50)}`);
        const healthResponse = await fetch(`${base}/health`)
        const healthData = healthResponse.status
        console.log('GET /health : ', healthData);

        console.log(`${'='.repeat(50)}`);
        const oldMenuResponse = await fetch(`${base}/old-menu`)
        const oldMenuData = oldMenuResponse.status
        console.log('GET /old-menu : ', oldMenuData);

        console.log(`${'='.repeat(50)}`);
        const xmlResponse = await fetch(`${base}/xml`)
        const xmlData = await xmlResponse.text()
        console.log('GET /xml : ', xmlData)

        console.log(`${'='.repeat(50)}`);
        const customHeaderResponse = await fetch(`${base}/custom-headers`)
        const customHeaderData = await customHeaderResponse.json()
        console.log('GET /custom-headers : ', JSON.stringify(customHeaderData));
        console.log('Headers : ', customHeaderResponse.headers)

        console.log(`${'='.repeat(50)}`);
        const noContentResponse = await fetch(`${base}/no-content`)
        console.log('GET /no-content : ', noContentResponse.status)


      } catch (error) {
        console.error(error)
      }

    })

  })
}

async function main() {
  await block_1_request();
  await block_2_repsonse()
}

main()