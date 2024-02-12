const express = require("express");
const userModel = require("../model/User.js");
const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  console.log(req.body);
  const user = new userModel(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
