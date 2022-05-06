const mongoose = require("mongoose");

const blogPostModel = require("./models/BlogPost");
const db = mongoose.connection;
const DB_URL = "mongodb://admin:123456@127.0.0.1:27017/lesson6";
mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => {
  console.log("Connect");
});
db.on("error", (err) => {
  console.log("Db connect err");
});
