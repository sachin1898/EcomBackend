import express from "express";

const app =express()

app.get('/', function (req, res) {
    res.send('Hello from Ecommerce project')
  })
  
  app.listen(3000)