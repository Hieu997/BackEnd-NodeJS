const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/getUser", (req, res) => {
  console.log("Check User ", req.body);
  res.json({ name: "hieu" });
});

app.listen(5000, () => {
  console.log("Server start on http://localhost:5000");
});
