// Creating server using express

import express from "express"

const app = express()

app.use(express.json())
// use() is a middleware
// express.json() : Automatically parses incoming requests with JSON payloads & makes that data available on req.body

app.get('/menu', (req, res) => {
  res.json({ items: ['thali', 'biryani'] })
})

app.get('/order', (req, res) => {
  res.status(200).json({
    status: 'received',
    order: req.body
  })
})
