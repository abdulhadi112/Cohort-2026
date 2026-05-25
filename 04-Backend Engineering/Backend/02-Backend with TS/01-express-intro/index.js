// Creating a http server using http module
// We are seeing how Without using express we can handle all the things that express offers 
import http from "node:http";

// This is a raw server. T
const server = http.createServer((req, res) => {
  // Handling GET request on /menu
  if (req.method === 'GET' && req.url === '/menu') {
    // writeHead writes the headers
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // res ko end bhi karna hota hai 
    res.end(JSON.stringify({ items: ['thali', 'aloo puri', 'chana chaat'] }))
  } else if (req.method === 'POST' && req.url === '/order') {
    let data = ''
    // 'data' event par humne user ka bheja hua data store kar liya
    req.on('data', chunk => data += chunk)
    // Request user se puri aagyi hai = 'end' & uske baad kya kaam karna hai is the cb function
    req.on('end', () => {
      const order = JSON.parse(data)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({
        status: "received",
        order
      }))
    })
  }
})