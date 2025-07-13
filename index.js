require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/a", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/chat", (req, res) => {
  res.redirect("https://chatgpt.com/c/6873a277-ebe0-800b-a217-849b5ebe39ae");
});
const port = process.env.PORT || 3000;
app.listen(port);
