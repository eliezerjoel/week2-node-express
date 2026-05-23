const express = require('express')
const app = express()

const PORT = process.env.port;
app.use(express.json())

app.get("/", (req, res)=>{
  res.send("My week 2 API"
})

app.post("/user",  (req, res)=>{
  if(!user.name || !user.email){
    res.send("Both email and username are required. Please retry. ")
  }
  const name = req.body.name
  const email = req.body.email
  res.send(`Hello ${name} !`)
  res.status(201)
})

app.get("/user/:id", (req, res)=>{
  const id = req.params.id
  res.send(`User ${id} profile `)
})
app.listen(PORT, ()=>{
  console.log("Listening on port 3000")
})
        
