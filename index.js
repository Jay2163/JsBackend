require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send("twitterresponse")
})

app.get('/login', (req,res)=>{
    res.send('<h1>Login Page</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send("<h2>youtube</h2>")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})