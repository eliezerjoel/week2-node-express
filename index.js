const express = require('express')
const app = express()

const PORT = process.env.port;
app.use(express.json())

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
  next(); 
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Resource not found" });
});

app.get("/", (req, res)=>{
  res.send("My week 2 API")
})

app.post("/user",  (req, res)=>{
  const {name, email} = req.body
  if(!name || !email){
    return;
    res.status(400)
    res.send("Both email and username are required. Please retry. ")
  }
  res.status(201)
  res.send(`Hello ${name} !`)

})

app.get("/user/:id", (req, res)=>{
  const id = req.params.id
  res.send(`User ${id} profile `)
})
app.listen(PORT, ()=>{
  console.log("Listening on port 3000")
})
        
