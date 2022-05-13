const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

/* app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname), "views/index.html");
}); */
app.get("/", (request, response) => {
  response.render("index");
});
app.get("/about", (request, response) => {
  response.render("about");
});
app.get("/contact", (request, response) => {
  response.render("contact");
});
app.get("/post", (request, response) => {
  response.render("post");
});

app.listen(PORT, () => {
  console.log("Server running");
});
