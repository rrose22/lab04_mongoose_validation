const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./userRoutes/userRoutes')

const SERVER_PORT = process.env.PORT || 8081
const app = express();
app.use(express.json());
app.use(userRoutes);

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.ktjqy7e.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((success) => {
    console.log("Success Mongodb connection");
  })
  .catch((err) => {
    console.log("Error Mongodb connection");
  });

app.listen(SERVER_PORT, ()=>{
    console.log("server is running")
  })