const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.json());

const PORT = 3000;
const DB_URL = "mongodb://admin:123456@127.0.0.1:27017/registeruser";
const db = mongoose.connection;
mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => {
  console.log("Connect " + PORT);
});
db.on("error", (err) => {
  console.log("Db connect err");
});

app.set("view engine", "ejs");
app.set("views", "./views");
const userRoute = require("./routes/userRouter");
app.use("/user", userRoute);
const postRoute = require("./routes/postRouter");
app.use("/post", postRoute);

app.listen(PORT, () => {
  console.log("Server running");
});
