require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/a", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/faceBook", (req, res) => {
  res.json({"name":"Deep Guchhait","reg":34042723017});
});
const port = process.env.PORT || 3000;
app.listen(port);
