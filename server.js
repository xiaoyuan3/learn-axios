const express = require("express");

const app = express();

app.get("/login", (req, res) => {
  res.send("登录")
})

app.listen(3000);