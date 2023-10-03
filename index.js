const express = require("express");
const app = express();
const port = 3000;

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("Hello This World, dynamically!");
  res.render("pages/index");
});

app.get("/foo", (req, res) => {
  res.send("Hello foo!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
